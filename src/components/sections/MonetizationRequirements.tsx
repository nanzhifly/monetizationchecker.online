import { UserGroupIcon, ClockIcon, ShieldCheckIcon, SparklesIcon, CurrencyDollarIcon, ChatBubbleLeftRightIcon, PlayCircleIcon } from '@heroicons/react/24/outline';

// Monetization Requirements Section
// 展示YouTube变现标准，主色高亮数字，卡片式布局，英文界面，注释为中文
export default function MonetizationRequirements() {
  // 变现标准要点
  const requirements = [
    {
      icon: <UserGroupIcon className="w-7 h-7 text-red-500" />,
      label: <><span className="font-bold text-red-500">1,000</span> subscribers</>,
      desc: 'You must have at least 1,000 subscribers on your channel.'
    },
    {
      icon: <ClockIcon className="w-7 h-7 text-blue-500" />,
      label: <><span className="font-bold text-blue-500">4,000</span> valid public watch hours</>,
      desc: 'Over the last 12 months.'
    },
    {
      icon: <ShieldCheckIcon className="w-7 h-7 text-green-500" />,
      label: 'Follow all YouTube policies',
      desc: 'Comply with Community Guidelines and Ad Policies.'
    },
  ];

  // 额外变现信号
  const signals = [
    {
      icon: <SparklesIcon className="w-6 h-6 text-yellow-500" />,
      text: 'A visible "Join" button'
    },
    {
      icon: <ChatBubbleLeftRightIcon className="w-6 h-6 text-pink-500" />,
      text: 'Super Chat or Super Thanks features'
    },
    {
      icon: <PlayCircleIcon className="w-6 h-6 text-green-500" />,
      text: 'Ad breaks in videos'
    },
  ];

  // 主色描边映射
  const borderColors = [
    'hover:border-red-400',
    'hover:border-blue-400',
    'hover:border-green-400',
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white via-gray-50 to-blue-50">
      <div className="max-w-3xl mx-auto px-4">
        {/* 大卡片容器 */}
        <div className="bg-white/95 rounded-2xl shadow-2xl px-8 py-10 md:p-12">
          {/* 标题和副标题 */}
          <h2 className="text-3xl font-extrabold text-center mb-4 bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            YouTube Monetization Requirements
          </h2>
          <p className="text-lg text-gray-600 text-center mb-10">
            To qualify for YouTube monetization under the YouTube Partner Program (YPP), a channel must meet these criteria:
          </p>

          {/* 变现标准要点 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {requirements.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center text-center bg-gray-50 rounded-xl shadow p-6 border border-gray-100 transition group cursor-pointer hover:shadow-2xl hover:-translate-y-1 ${borderColors[idx]}`}
              >
                {item.icon}
                <div className="mt-3 text-lg font-semibold">{item.label}</div>
                <div className="mt-1 text-gray-500 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>

          {/* 额外变现信号 */}
          <div className="mt-6">
            <div className="text-base font-semibold text-gray-700 mb-3 flex items-center justify-center gap-2">
              <CurrencyDollarIcon className="w-6 h-6 text-green-500" />
              Additional monetization signals:
            </div>
            <ul className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center">
              {signals.map((s, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2 shadow-sm transition group cursor-pointer hover:shadow-md hover:-translate-y-0.5 hover:border-green-400 border border-gray-200"
                >
                  {s.icon}
                  <span className="text-gray-700 text-sm">{s.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 