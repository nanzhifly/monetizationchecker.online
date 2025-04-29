import { YouTubeUrlType } from './validator';

export interface YouTubeCheckResult {
  success: boolean;
  data?: {
    views: number;
    isMonetizable: boolean;
    title?: string;
    thumbnail?: string;
  };
  error?: string;
}

// 检查是否满足变现条件
function checkMonetizationEligibility(views: number, type: YouTubeUrlType): boolean {
  switch (type) {
    case 'video':
    case 'shorts':
      return views >= 1000; // 视频需要1000次观看
    case 'channel':
      return views >= 1000; // 频道需要1000个订阅者
    default:
      return false;
  }
}

// 调用 YouTube API 获取数据
export async function checkYouTubeContent(type: YouTubeUrlType, id: string): Promise<YouTubeCheckResult> {
  try {
    const response = await fetch('/api/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type, id }),
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();
    
    if (!data.success) {
      throw new Error(data.error || 'Unknown error');
    }

    const views = data.data.views;
    const isMonetizable = checkMonetizationEligibility(views, type);

    return {
      success: true,
      data: {
        views,
        isMonetizable,
        title: data.data.title,
        thumbnail: data.data.thumbnail,
      },
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to check content',
    };
  }
} 