import { CheckCircleIcon, ChartBarIcon, CurrencyDollarIcon, LightBulbIcon } from '@heroicons/react/24/outline';

// Core Features Section
// 该组件展示工具的核心亮点，采用三栏卡片式布局，英文界面，注释为中文
export default function CoreFeatures() {
  // 核心功能卡片内容
  const features = [
    {
      icon: <CheckCircleIcon className="w-10 h-10 text-red-500 mb-4" />,
      title: 'Monetization Status Detection',
      desc: 'Instantly determine whether a channel or video is monetized and running ads.'
    },
    {
      icon: <CurrencyDollarIcon className="w-10 h-10 text-green-500 mb-4" />,
      title: 'Revenue Estimation',
      desc: 'Get an estimated earning potential based on views, likes, subscribers, and engagement rate.'
    },
    {
      icon: <ChartBarIcon className="w-10 h-10 text-blue-500 mb-4" />,
      title: 'Ad Performance Overview',
      desc: 'See whether ads are displayed, and understand the overall monetization activity of the content.'
    },
    {
      icon: <LightBulbIcon className="w-10 h-10 text-yellow-500 mb-4" />,
      title: 'Channel Financial Insight',
      desc: 'Access simplified financial metrics to help content creators evaluate and improve their monetization strategy.'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        {/* 大卡片容器 */}
        <div className="bg-white/95 rounded-2xl shadow-2xl px-8 py-14 md:p-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            What is the YouTube Monetization Checker?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-14 max-w-2xl mx-auto">
            Our tool helps you quickly find out if any YouTube channel or video is eligible for monetization — no sign-up needed, no delay.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-2xl hover:border-red-400 transition group cursor-pointer"
              >
                {f.icon}
                <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-red-500 transition">
                  {f.title}
                </h3>
                <p className="text-gray-500 text-base leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 