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
    <section className="py-20 bg-gradient-to-b from-gray-50 via-blue-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 大卡片包裹所有步骤 */}
        <div className="bg-white/95 rounded-2xl shadow-2xl p-10 md:p-14">
          {/* 标题部分 */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              How to Use Our YouTube Monetization Checker Tool?
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Getting started takes just a few seconds. No login required.
            </p>
          </div>

          {/* 步骤展示 */}
          <div className="space-y-10">
            {steps.map((step) => (
              <div key={step.id} className="flex items-start gap-4">
                {/* 步骤编号主色圆圈 */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-pink-400 flex items-center justify-center shadow-md">
                  <span className="text-white text-2xl font-bold select-none">{step.id}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-base text-gray-600 mb-1">
                    {step.description}
                  </p>
                  {/* 支持的链接格式 */}
                  {step.supportedLinks && (
                    <ul className="mt-2 space-y-2">
                      {step.supportedLinks.map((link, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5" />
                          <span className="ml-2 text-sm text-gray-600">{link}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* 额外说明 */}
          <div className="mt-12 text-center">
            <p className="text-xs text-gray-400">
              It's 100% anonymous and secure. We do not store your input data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 