import { GiftIcon, BoltIcon, UserCircleIcon, EyeIcon } from '@heroicons/react/24/outline';

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
    'hover:border-pink-400',
    'hover:border-yellow-400',
  ];

  return (
    <section>
      <div className="max-w-[800px] mx-auto my-8">
        <div className="card p-4 my-4">
          <h2 className="font-bold">
            Why Use Our YouTube Monetization Checker Tool?
          </h2>
          <p>
            Our YouTube Monetization Checker is designed to make it easy for anyone to explore the monetization status and potential earnings of any public YouTube channel. Here's why it's worth using:
          </p>
          <ol className="number-list list-decimal pl-8">
            <li><span className="font-bold">Fast and Easy to Use:</span> Just enter the YouTube channel URL—no account, login, or installation required. Get results in seconds.</li>
            <li><span className="font-bold">Supports All Devices:</span> Whether you're on a phone, tablet, or desktop, our tool works seamlessly on Android, iOS, Windows, and macOS.</li>
            <li><span className="font-bold">Real-Time Data:</span> Instantly see if a channel meets YouTube's monetization criteria and get basic performance insights like view count.</li>
            <li><span className="font-bold">No Downloads or Extensions Needed:</span> Everything runs in your browser. You don't need to install anything.</li>
            <li><span className="font-bold">Great for Creators and Viewers:</span> Whether you're a creator checking your own progress, or just curious about another channel, this tool is built for everyone.</li>
            <li><span className="font-bold">Completely Free:</span> You can use our checker as often as you like—there are no hidden fees or subscription plans.</li>
          </ol>
          <p>
            With our YouTube Monetization Checker, you get a simple, no-hassle way to assess whether a channel is eligible for monetization and how it's performing overall.
          </p>
        </div>
      </div>
    </section>
  );
} 