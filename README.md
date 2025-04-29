# YouTube Monetization Checker

一个帮助用户快速检查 YouTube 内容播放量和变现资格的在线工具。

## 功能特点

- 支持检查 YouTube 视频、频道和 Shorts 的播放量
- 判断是否符合变现条件
- 响应式设计，支持各种设备
- 简单易用的界面

## 技术栈

- Next.js 13+ (App Router)
- TypeScript
- Tailwind CSS
- YouTube Data API

## 开发

首先，运行开发服务器：

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看结果。

## 部署

项目使用 Vercel 部署，只需将代码推送到 GitHub 仓库，然后在 Vercel 中导入即可。

## 环境变量

创建 `.env.local` 文件并添加以下变量：

```env
YOUTUBE_API_KEY=your_api_key_here
```

## 许可证

MIT 