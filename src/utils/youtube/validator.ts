// YouTube 链接类型
export type YouTubeUrlType = 'video' | 'channel' | 'shorts' | 'invalid';

// 验证并解析 YouTube 链接
export function parseYouTubeUrl(url: string): { type: YouTubeUrlType; id: string | null } {
  try {
    const urlObj = new URL(url);
    
    // 视频 ID 正则表达式
    const videoIdRegex = /^[a-zA-Z0-9_-]{11}$/;
    // 频道 ID 正则表达式
    const channelIdRegex = /^[a-zA-Z0-9_-]+$/;

    // 处理 youtube.com 域名
    if (urlObj.hostname === 'www.youtube.com' || urlObj.hostname === 'youtube.com') {
      // 视频链接
      if (urlObj.pathname === '/watch') {
        const videoId = urlObj.searchParams.get('v');
        if (videoId && videoIdRegex.test(videoId)) {
          return { type: 'video', id: videoId };
        }
      }
      
      // Shorts 链接
      if (urlObj.pathname.startsWith('/shorts/')) {
        const shortsId = urlObj.pathname.split('/')[2];
        if (shortsId && videoIdRegex.test(shortsId)) {
          return { type: 'shorts', id: shortsId };
        }
      }

      // 频道链接
      if (urlObj.pathname.startsWith('/channel/')) {
        const channelId = urlObj.pathname.split('/')[2];
        if (channelId && channelIdRegex.test(channelId)) {
          return { type: 'channel', id: channelId };
        }
      }
    }

    // 处理 youtu.be 短链接
    if (urlObj.hostname === 'youtu.be') {
      const videoId = urlObj.pathname.slice(1);
      if (videoId && videoIdRegex.test(videoId)) {
        return { type: 'video', id: videoId };
      }
    }

    return { type: 'invalid', id: null };
  } catch (error) {
    return { type: 'invalid', id: null };
  }
}

// 格式化播放量
export function formatViewCount(views: number): string {
  if (views >= 1000000) {
    return `${(views / 1000000).toFixed(1)}M`;
  }
  if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}K`;
  }
  return views.toString();
} 