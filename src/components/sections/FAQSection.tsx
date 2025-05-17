"use client";
import React from 'react';

// FAQ Section
// 展示常见问题，全部展开，卡片风格，英文界面，注释为中文
export default function FAQSection() {
  return (
    <section>
      <div className="max-w-[800px] mx-auto my-8">
        <div className="card p-4 my-4">
          <h2 className="text-center font-bold">Frequently Asked Questions</h2>
          {/* Q1 */}
          <div className="mb-6">
            <h3 className="font-bold mb-1">Q. How can I check whether another YouTube channel is monetized or not?</h3>
            <p>You can use our <b>YouTube Monetization Checker</b> to find out if any public YouTube channel is monetized. Simply paste the channel URL into the tool, and it will analyze key metrics and monetization indicators in real time.</p>
          </div>
          {/* Q2 */}
          <div className="mb-6">
            <h3 className="font-bold mb-1">Q. How do I check YouTube monetization earnings?</h3>
            <p>To check earnings on your own channel, visit <b>YouTube Studio &gt; Analytics &gt; Revenue</b>. If you want to estimate the earnings of another channel, use our tool to evaluate subscriber count, watch time, Shorts performance, and ad eligibility.</p>
          </div>
          {/* Q3 */}
          <div className="mb-6">
            <h3 className="font-bold mb-1">Q. How can I use keywords to improve my monetization chances?</h3>
            <p>Using relevant keywords in your video titles, descriptions, and tags can increase visibility and watch time. A well-optimized channel is more likely to attract views, grow subscribers, and meet monetization requirements faster.</p>
          </div>
          {/* Q4 */}
          <div className="mb-6">
            <h3 className="font-bold mb-1">Q. What additional monetization features are available besides ads?</h3>
            <p>In addition to ad revenue, eligible creators can access several monetization features through the <b>YouTube Partner Program</b>, including:</p>
            <ul className="list-disc pl-8 mt-2">
              <li>Channel memberships</li>
              <li>Super Chat &amp; Super Thanks</li>
              <li>YouTube Premium revenue</li>
              <li>Merchandise shelf integrations</li>
              <li>Sponsored content opportunities</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 