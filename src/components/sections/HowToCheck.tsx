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
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4">
        {/* 大卡片容器 */}
        <div className="bg-white/95 rounded-2xl shadow-2xl px-8 py-10 md:p-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            How to Check If a YouTube Channel Is Monetized?
          </h2>

          {/* Method 1: Tool */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Method 1: Use the YouTube Monetization Checker Tool</h3>
            <p className="text-lg text-gray-600 mb-6">
              Simply paste your YouTube channel URL into the tool above. Within seconds, you'll know if the channel is monetized. This online checker is the fastest and easiest way to verify monetization status — no manual steps needed.
            </p>
          </div>

          {/* Method 2: Manual Check */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Method 2: Look for Monetization Signs Manually</h3>
            <p className="text-lg text-gray-600 mb-6">
              Since November 17, 2023, YouTube removed the is_monetization_enabled tag from its source code. This means you can no longer check monetization status directly using browser tools.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              However, some signs still suggest a channel is monetized:
            </p>
            
            {/* Monetization Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {manualIndicators.map((indicator, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-red-200 transition"
                >
                  {indicator.icon}
                  <span className="text-gray-700">{indicator.text}</span>
                </div>
              ))}
            </div>
            
            <p className="text-gray-600 italic">
              These indicators don't guarantee monetization, but they strongly suggest the channel is part of the YouTube Partner Program and earning revenue.
            </p>
          </div>

          {/* Old Method */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="text-xl font-bold mb-3 text-gray-900">Old Method (No Longer Works)</h3>
            <p className="text-gray-600">
              Before November 2023, users could check if a channel was monetized by viewing the page source and searching for is_monetization_enabled. This method was slow, technical, and often inaccurate — especially when individual videos were monetized but the channel wasn't fully approved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 