import { CheckCircleIcon } from '@heroicons/react/24/outline';

// 使用步骤数据
const steps = [
  {
    id: 1,
    title: "Go to the homepage",
    description: "Start by visiting our homepage where you'll find the main input field."
  },
  {
    id: 2,
    title: "Paste a YouTube link",
    description: "Copy and paste any YouTube link you want to check. We support:",
    supportedLinks: [
      "Channels: youtube.com/@channel_name or youtube.com/channel/UCxxxxxxx",
      "Videos: youtube.com/watch?v=xxxx or youtu.be/xxxx",
      "Shorts: youtube.com/shorts/xxxx"
    ]
  },
  {
    id: 3,
    title: "Click 'Check Now'",
    description: "Our system will instantly analyze the link and show you the monetization status and key insights."
  }
];

export default function HowToUse() {
  return (
    <section>
      <div className="max-w-[800px] mx-auto my-8">
        <div className="my-4 p-4 rounded-xl bg-white shadow">
          <h2 className="text-center font-bold">
            Supported YouTube URLs
          </h2>
          <p>
            To check monetization status, make sure you're using a valid YouTube URL. Our tool supports the following formats:
          </p>
          <h3 className="font-bold">✔ YouTube Video URLs</h3>
          <p>You can enter any of these video link formats:</p>
          <ul>
            <li>https://youtu.be/xxxx</li>
            <li>https://youtube.com/watch?v=xxxx</li>
            <li>https://m.youtube.com/watch?v=xxxx</li>
            <li>https://music.youtube.com/watch?v=xxxx</li>
            <li>https://www.youtube.com/watch?v=xxxx</li>
            <li>https://www.youtube.com/live/xxxx</li>
          </ul>
          <h3 className="font-bold">✔ YouTube Channel URLs</h3>
          <p>To check a channel's monetization status, use one of these formats:</p>
          <ul>
            <li>https://www.youtube.com/@channel_username</li>
            <li>https://www.youtube.com/channel/xxxx</li>
          </ul>
          <p><b>ℹ️ Note:</b> xxxx represents the channel ID, video ID, or custom username.</p>
          <p>
            Just copy the correct YouTube link, paste it into the input box, and hit Check Now. Our tool will automatically recognize the format and analyze the channel for you.
          </p>
        </div>
      </div>
    </section>
  );
} 