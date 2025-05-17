import React from 'react';

// 该组件展示如何获得YouTube盈利资格，风格与CommonReasonsNotMonetized一致
export default function HowToGetMonetized() {
  return (
    <section>
      <div className="max-w-[800px] mx-auto my-8">
        <div className="my-4 p-4 rounded-xl bg-white shadow">
          <h2 className="text-center font-bold">How to Get Monetized on YouTube?</h2>
          <p className="mb-4">
            To monetize your YouTube channel effectively, follow these structured steps based on YouTube's official monetization guidelines.
          </p>
          {/* 1. Meet the Monetization Requirements */}
          <h3 className="font-bold flex items-center mb-1">📌 <span className="ml-2">1. Meet the Monetization Requirements</span></h3>
          <ul className="list-disc pl-8 mb-4">
            <li>Join the <b>YouTube Partner Program (YPP)</b> by meeting one of the following thresholds:</li>
            <ul className="list-disc pl-8 mt-2">
              <li><b>500 subscribers</b> + <b>3,000 valid public watch hours</b> in the past 12 months <b>or</b></li>
              <li><b>500 subscribers</b> + <b>3 million valid Shorts views</b> in the last 90 days</li>
            </ul>
            <li>Ensure your channel complies with <b>YouTube Community Guidelines</b> and <b>Ad-Friendly Content Policies</b>.</li>
          </ul>
          {/* 2. Create Original and Engaging Content */}
          <h3 className="font-bold flex items-center mb-1">📌 <span className="ml-2">2. Create Original and Engaging Content</span></h3>
          <ul className="list-disc pl-8 mb-4">
            <li>Focus on producing unique content that adds value. Common content types include:</li>
            <ul className="list-disc pl-8 mt-2">
              <li>Daily vlogs and lifestyle videos</li>
              <li>DIY (Do-it-yourself) and tutorial content</li>
              <li>Original music and short films</li>
              <li>YouTube Shorts, with or without remixed content</li>
            </ul>
            <li>Avoid reused or low-effort videos that may lead to monetization rejection.</li>
          </ul>
          {/* 3. Maintain a Consistent Upload Schedule */}
          <h3 className="font-bold flex items-center mb-1">📌 <span className="ml-2">3. Maintain a Consistent Upload Schedule</span></h3>
          <ul className="list-disc pl-8 mb-4">
            <li>Consistency helps grow your audience and boosts engagement. Aim for a predictable upload cadence (e.g., weekly or bi-weekly) to keep viewers returning to your channel.</li>
          </ul>
          {/* 4. Optimize for Watch Time and Retention */}
          <h3 className="font-bold flex items-center mb-1">📌 <span className="ml-2">4. Optimize for Watch Time and Retention</span></h3>
          <ul className="list-disc pl-8 mb-4">
            <li>Structure your videos to hold viewer attention:</li>
            <ul className="list-disc pl-8 mt-2">
              <li>Use clear titles and thumbnails</li>
              <li>Add chapters for longer content</li>
              <li>Keep intros short and informative</li>
            </ul>
            <li>Improving viewer retention contributes directly to monetization eligibility.</li>
          </ul>
          {/* 5. Explore Multiple Revenue Streams */}
          <h3 className="font-bold flex items-center mb-1">📌 <span className="ml-2">5. Explore Multiple Revenue Streams</span></h3>
          <ul className="list-disc pl-8 mb-4">
            <li>Once your channel is approved for monetization, consider adding:</li>
            <ul className="list-disc pl-8 mt-2">
              <li><b>Channel memberships</b></li>
              <li><b>Merchandise links</b></li>
              <li><b>Affiliate partnerships</b></li>
              <li><b>Sponsored videos and brand deals</b></li>
            </ul>
            <li>Diversifying income sources helps create a stable long-term monetization model.</li>
          </ul>
          {/* Tip */}
          <h3 className="font-bold flex items-center mb-1">🔍 <span className="ml-2">Tip</span></h3>
          <p className="mb-2">
            Use our <b>YouTube Monetization Checker</b> to track your channel's progress and get actionable feedback on meeting eligibility requirements faster.
          </p>
        </div>
      </div>
    </section>
  );
} 