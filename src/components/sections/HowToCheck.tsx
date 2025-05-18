import { ArrowRightIcon, ClipboardDocumentCheckIcon, MagnifyingGlassIcon, VideoCameraIcon, UserGroupIcon, PlayCircleIcon, BuildingLibraryIcon, ClockIcon } from '@heroicons/react/24/outline';

// How to Check Section
// 展示如何检查YouTube频道变现状态的步骤指南，包括在线工具和手动检查两种方法
export default function HowToCheck() {
  // 手动检查的指标
  const manualIndicators = [
    {
      icon: <UserGroupIcon className="w-6 h-6 text-blue-500" />,
      text: 'The channel has a "Join" button for memberships'
    },
    {
      icon: <PlayCircleIcon className="w-6 h-6 text-red-500" />,
      text: 'Ads appear on multiple videos'
    },
    {
      icon: <BuildingLibraryIcon className="w-6 h-6 text-green-500" />,
      text: 'The channel is linked with a YouTube MCN (Multi-Channel Network) or uses a CMS'
    },
    {
      icon: <ClockIcon className="w-6 h-6 text-yellow-500" />,
      text: 'The channel has over 1,000 subscribers and 4,000 watch hours in the past 12 months'
    }
  ];

  return (
    <section>
      <div className="max-w-[800px] mx-auto my-8">
        <div className="card p-4 my-4">
          <h2 className="font-bold">
            How to Check If a YouTube Channel Is Monetized?
          </h2>
          <p>
            Checking if a YouTube channel is monetized is quick and easy with our YouTube Monetization Checker. Just follow these simple steps:
          </p>
          <ol className="list-decimal pl-6">
            <li>Open YouTube in your browser or app and copy the URL of the YouTube channel you want to check.</li>
            <li>Go to our website using any device—mobile, tablet, or desktop.</li>
            <li>Paste the channel URL into the input field at the top of the page.</li>
            <li>Click on the "Check Now" button.</li>
            <li>You'll instantly see a detailed report showing the channel's monetization status and other key metrics like total views.</li>
          </ol>
          <p>
            No sign-up or download is needed. All you need is a valid YouTube channel link, and our tool will take care of the rest.
          </p>
        </div>
      </div>
    </section>
  );
}

// 新增：How to Check If a YouTube Video Is Monetized？板块
export function HowToCheckVideoMonetization() {
  return (
    <section>
      <div className="max-w-[800px] mx-auto my-8">
        <div className="card p-4 my-4">
          <h2 className="font-bold">
            How to Check If a YouTube Video Is Monetized?
          </h2>
          <p>
            Wondering if a specific YouTube video is showing ads? Here's how to get a general idea:
          </p>
          <ol className="number-list list-decimal pl-8">
            <li><span className="font-bold">Look for Ads on the Video:</span> If you see ads before, during, or after the video, it may indicate monetization—but this isn't always the case.</li>
            <li><span className="font-bold">Check the Page Source (Advanced):</span> You can inspect the video's source code and search for keywords like <code>yt_ad</code>. If present, ads are likely enabled.</li>
            <li><span className="font-bold">Note:</span> Since late 2020, YouTube may show ads on non-monetized videos. This means ad presence doesn't always mean the creator earns from it.</li>
            <li><span className="font-bold">Consider Copyright Claims:</span> If a video contains copyrighted material, ads may appear—but the revenue could go to the copyright owner or YouTube, not the uploader.</li>
          </ol>
          <p>
            For a more reliable result, use tools like our YouTube Monetization Checker, which evaluates the video alongside the channel's monetization eligibility.
          </p>
        </div>
      </div>
    </section>
  );
}

// 新增：How to Check If a YouTube Shorts Video Is Monetized？板块
export function HowToCheckShortsMonetization() {
  return (
    <section>
      <div className="max-w-[800px] mx-auto my-8">
        <div className="card p-4 my-4">
          <h2 className="font-bold">
            Check If a YouTube Shorts Video Is Monetized
          </h2>
          <p>
            Shorts have different monetization rules than regular videos. Here's what to look for:
          </p>
          <ol className="number-list list-decimal pl-8">
            <li><span className="font-bold">YouTube Partner Program (YPP) Required:</span> Shorts can only be monetized if the creator is part of the YouTube Partner Program.</li>
            <li><span className="font-bold">Content Must Be Advertiser-Friendly:</span> Family-friendly and original content is more likely to be approved for monetization.</li>
            <li><span className="font-bold">Lower Earnings Metrics:</span> Shorts usually have lower CPM and RPM, so even monetized videos may generate minimal revenue.</li>
            <li><span className="font-bold">Revenue Sharing for Shorts (Since Feb 2023):</span> YouTube now shares ad revenue on Shorts, replacing the previous Shorts Fund. However, only compliant content is eligible.</li>
          </ol>
          <p>
            Using our YouTube Monetization Checker, you can get insights into whether a channel's Shorts are likely monetized. While not 100% precise, it gives a helpful overview.
          </p>
        </div>
      </div>
    </section>
  );
} 