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
    <section>
      <div className="max-w-[800px] mx-auto my-8">
        <div className="bg-white rounded-xl shadow my-4 p-4">
          <h2 className="text-center font-bold">
            What is YouTube Monetization Checker?
          </h2>
          <p>
            YouTube Monetization Checker is a free online tool designed to help you estimate how much a YouTube channel could potentially earn. Whether you're curious about your favorite YouTuber's revenue or want to explore monetization potential for your own channel, this tool gives you a quick and easy overview.
          </p>
          <p>
            You can check the earnings potential of any public YouTube channel using just the channel URL. No need to install any extensions or apps—everything runs directly in your browser, on any device including Android, iOS, Windows, and macOS.
          </p>
          <p>
            All calculations are handled on our secure server. Simply enter the channel link and get instant insights into how well the channel is performing and whether it meets YouTube's monetization requirements.
          </p>
        </div>
      </div>
    </section>
  );
} 