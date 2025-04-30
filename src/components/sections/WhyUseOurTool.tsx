import { GiftIcon, BoltIcon, DevicePhoneMobileIcon, UserCircleIcon, EyeIcon } from '@heroicons/react/24/outline';

// Why Use Our Tool Section
// 展示工具优势，卡片式分栏布局，英文界面，注释为中文
export default function WhyUseOurTool() {
  // 工具优势点
  const advantages = [
    {
      icon: <GiftIcon className="w-8 h-8 text-red-500 mb-3" />,
      title: 'Completely Free',
      desc: 'No account or subscription needed. Use as often as you like.'
    },
    {
      icon: <BoltIcon className="w-8 h-8 text-blue-500 mb-3" />,
      title: 'Fast & Accurate',
      desc: 'Results delivered in seconds based on real-time data and YouTube policies.'
    },
    {
      icon: <DevicePhoneMobileIcon className="w-8 h-8 text-green-500 mb-3" />,
      title: 'Multi-Platform Support',
      desc: "We're expanding - monetization checks for TikTok, Instagram, and Facebook are also available."
    },
    {
      icon: <UserCircleIcon className="w-8 h-8 text-pink-500 mb-3" />,
      title: 'User-Friendly Design',
      desc: 'Simple input, clean layout, and mobile-friendly interface for quick checks anytime, anywhere.'
    },
    {
      icon: <EyeIcon className="w-8 h-8 text-yellow-500 mb-3" />,
      title: 'Insightful Results',
      desc: 'Not just "yes or no" - get detailed revenue signals, ad analysis, and monetization clues.'
    },
  ];

  // 主色描边映射
  const borderColors = [
    'hover:border-red-400',
    'hover:border-blue-400',
    'hover:border-green-400',
    'hover:border-pink-400',
    'hover:border-yellow-400',
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        {/* 大卡片容器 */}
        <div className="bg-white/95 rounded-2xl shadow-2xl px-8 py-14 md:p-16">
          {/* 标题和副标题 */}
          <h2 className="text-3xl font-extrabold text-center mb-4 bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Why Use Our Tool
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Discover the unique value of our tool and why it stands out from other solutions.
          </p>

          {/* 工具优势卡片分栏 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {advantages.map((item, idx) => (
              <div
                key={idx}
                className={`bg-gray-50 rounded-2xl shadow p-7 flex flex-col items-center text-center border border-gray-100 transition group cursor-pointer hover:shadow-2xl hover:-translate-y-1 ${borderColors[idx]}`}
              >
                {item.icon}
                <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-red-500 transition">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 