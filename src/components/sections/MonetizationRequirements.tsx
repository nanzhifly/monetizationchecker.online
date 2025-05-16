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

  return (
    <section>
      <div className="max-w-[800px] mx-auto my-8">
        <div className="my-4 p-4 rounded-xl bg-white shadow">
          <h2 className="text-center font-bold">
            YouTube Monetization Requirements
          </h2>
          <p>
            <b>YouTube Monetization Requirements: What's New in 2024</b><br/>
            YouTube has updated its monetization criteria to make it easier for creators to start earning. Here's a breakdown of the current eligibility requirements:
          </p>
          <h3 className="font-bold">Current Monetization Requirements</h3>
          <ol className="number-list list-decimal pl-8">
            <li><span className="font-bold">500 Subscribers:</span> Your channel must have at least 500 subscribers to be considered for monetization.</li>
            <li><span className="font-bold">3 Public Uploads in the Last 90 Days:</span> You need to upload a minimum of 3 original public videos within the past 90 days. Reused or private content does not count.</li>
            <li><span className="font-bold">3,000 Public Watch Hours (Past 12 Months):</span> Your channel must accumulate 3,000 valid watch hours from public videos over the last year.</li>
            <li><span className="font-bold">YouTube Shorts Option:</span> Alternatively, you can qualify through Shorts content by reaching 3 million public Shorts views in the last 90 days.</li>
          </ol>
          <p>
            These changes are designed to help smaller creators monetize sooner and encourage consistent, original content creation.
          </p>
          <h3 className="font-bold">Previous Requirements (Before the Update)</h3>
          <ol className="number-list list-decimal pl-8">
            <li>1,000 subscribers</li>
            <li>4,000 valid public watch hours in the past 12 months</li>
            <li>No private or hidden videos counted toward the total</li>
          </ol>
          <h3 className="font-bold">Why This Matters</h3>
          <p>
            Understanding the latest YouTube monetization rules helps you plan your content and growth strategy more effectively. Whether you're producing long-form videos or Shorts, staying up-to-date with eligibility standards is key to unlocking ad revenue and other monetization features.
          </p>
          <p>
            Use our YouTube Monetization Checker to see if your channel meets the latest criteria.
          </p>
        </div>
      </div>
    </section>
  );
}

// 新增：How the YouTube Monetization Checker Works？板块
export function HowTheCheckerWorks() {
  return (
    <section>
      <div className="max-w-[800px] mx-auto my-8">
        <div className="my-4 p-4 rounded-xl bg-white shadow">
          <h2 className="text-center font-bold">How the YouTube Monetization Checker Works?</h2>
          <p>
            Our tool evaluates whether a YouTube channel or video is monetized by analyzing both technical and public data. Here's how it functions:
          </p>
          <ol className="number-list list-decimal pl-8">
            <li><span className="font-bold">API-Based Analysis:</span> The checker uses YouTube's official APIs to gather data related to monetization features, such as ad formats, ad breaks, and viewer engagement metrics.</li>
            <li><span className="font-bold">URL & Source-Based Scanning:</span> By scanning the provided channel or video URL, the tool retrieves relevant metadata and flags signals tied to monetization status.</li>
            <li><span className="font-bold">Criteria Matching:</span> The tool cross-checks the data against YouTube Partner Program requirements to assess eligibility and potential gaps.</li>
            <li><span className="font-bold">Report Generation:</span> A clear, structured report is generated showing monetization status, audience metrics, and improvement suggestions.</li>
          </ol>
          <p>
            This automated approach saves time and helps creators quickly understand where their content stands in terms of revenue readiness.
          </p>
          <h3 className="font-bold">Benefits of Using a YouTube Monetization Checker</h3>
          <ol className="number-list list-decimal pl-8">
            <li><span className="font-bold">Stay Aligned with Policy Updates:</span> Track changes in eligibility requirements and respond quickly to YouTube's evolving monetization rules.</li>
            <li><span className="font-bold">Evaluate Potential Collaborations:</span> Check if a partner channel meets monetization standards before entering into sponsorships or content deals.</li>
            <li><span className="font-bold">Benchmark Against Successful Channels:</span> Analyze how monetized channels operate and identify areas to improve your own performance.</li>
            <li><span className="font-bold">Save Time on Manual Tracking:</span> Eliminate the need to manually monitor channel metrics—our tool handles the heavy lifting.</li>
            <li><span className="font-bold">Plan Strategically for Growth:</span> Use real-time insights to adjust your content strategy, improve monetization readiness, and set measurable goals.</li>
          </ol>
          <h3 className="font-bold">Real-World Use Cases</h3>
          <ol className="number-list list-decimal pl-8">
            <li><span className="font-bold">Content Creators:</span> Monitor your channel's growth and adjust your strategy to meet monetization requirements.</li>
            <li><span className="font-bold">YouTube Consultants & Coaches:</span> Provide data-backed guidance and support to clients looking to monetize their channels.</li>
            <li><span className="font-bold">MCNs (Multi-Channel Networks):</span> Assess and onboard monetization-ready channels more efficiently.</li>
            <li><span className="font-bold">Brand & Campaign Managers:</span> Ensure your content complies with YouTube's monetization policies before launch.</li>
            <li><span className="font-bold">Educators & Course Providers:</span> Use the tool as part of hands-on training in YouTube monetization courses or workshops.</li>
          </ol>
        </div>
      </div>
    </section>
  );
} 