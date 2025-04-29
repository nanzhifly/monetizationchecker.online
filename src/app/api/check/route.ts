import { NextResponse } from 'next/server'

// 彻底不用任何 TypeScript 类型定义
// 只用 JS

export async function POST(request) {
  try {
    const body = await request.json()
    const { type, id } = body

    if (!type || !id) {
      return NextResponse.json(
        { success: false, error: 'Missing type or id' },
        { status: 400 }
      )
    }

    const apiKey = process.env.YOUTUBE_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { success: false, error: 'YouTube API key not configured' },
        { status: 500 }
      )
    }

    // 根据内容类型构建 API 请求
    const part = 'statistics,snippet'
    let endpoint = ''
    
    if (type === 'video' || type === 'shorts') {
      endpoint = `https://www.googleapis.com/youtube/v3/videos?part=${part}&id=${id}`
    } else if (type === 'channel') {
      endpoint = `https://www.googleapis.com/youtube/v3/channels?part=${part}&id=${id}`
    } else {
      return NextResponse.json(
        { success: false, error: 'Invalid content type' },
        { status: 400 }
      )
    }

    // 调用 YouTube API
    const response = await fetch(`${endpoint}&key=${apiKey}`)
    const data = await response.json()

    if (!data.items || data.items.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Content not found' },
        { status: 404 }
      )
    }

    const item = data.items[0]
    // 健壮性校验，防止snippet或thumbnails缺失导致500
    if (!item.snippet || !item.snippet.title || !item.snippet.thumbnails || !item.snippet.thumbnails.medium) {
      return NextResponse.json(
        { success: false, error: 'Content details not found' },
        { status: 404 }
      )
    }
    const views = type === 'channel'
      ? parseInt(item.statistics.subscriberCount || '0')
      : parseInt(item.statistics.viewCount || '0')

    return NextResponse.json({
      success: true,
      data: {
        views,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium.url,
      },
    })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
} 