import React from 'react';

export default function WhyNotMonetized() {
  return (
    <section>
      <div className="max-w-[800px] mx-auto my-8">
        <div className="my-4 p-4 rounded-xl bg-white shadow">
          <h2 className="text-center font-bold">Why Your YouTube Channel May Not Be Monetized?</h2>
          <ul className="list-none pl-0">
            {/* 1. Not Meeting the Minimum Requirements */}
            <li className="mb-6">
              <h3 className="font-bold flex items-center mb-1">📌 <span className="ml-2">1. Not Meeting the Minimum Requirements</span></h3>
              <ul className="list-disc pl-8 mb-2">
                <li>
                  To join the <b>YouTube Partner Program (YPP)</b>, your channel must meet at least one of the following thresholds:
                  <ul className="list-disc pl-8 mt-2">
                    <li><b>1,000 subscribers</b> and <b>4,000 valid public watch hours</b> in the past 12 months</li>
                    <li><b>3 million public YouTube Shorts views</b> in the last 90 days</li>
                  </ul>
                </li>
                <li>If these requirements aren't met, your application will be automatically declined.</li>
              </ul>
            </li>
            {/* 2. Policy Violations */}
            <li className="mb-6">
              <h3 className="font-bold flex items-center mb-1">📌 <span className="ml-2">2. Policy Violations</span></h3>
              <ul className="list-disc pl-8 mb-2">
                <li>Even if the metrics are met, YouTube conducts a <b>manual review</b> of your content. You may be denied monetization if:</li>
                <ul className="list-disc pl-8 mt-2">
                  <li>Videos violate <b>Community Guidelines</b> or <b>Ad-Friendly Content</b> policies</li>
                  <li>There is <b>reused content</b> without significant added value</li>
                  <li>Channel activity suggests <b>spam</b>, <b>misleading behavior</b>, or <b>inauthentic engagement</b></li>
                </ul>
              </ul>
            </li>
            {/* 3. Reapplication Delays */}
            <li className="mb-6">
              <h3 className="font-bold flex items-center mb-1">📌 <span className="ml-2">3. Reapplication Delays</span></h3>
              <ul className="list-disc pl-8 mb-2">
                <li>If your application is rejected:</li>
                <ul className="list-disc pl-8 mt-2">
                  <li>You can reapply after <b>30 days</b> (for most issues)</li>
                  <li>In some cases, you must wait <b>90 days</b> depending on the severity of the violation</li>
                  <li>Use this time to review YouTube's policies and make necessary changes to your content.</li>
                </ul>
              </ul>
            </li>
          </ul>
          {/* 其他说明部分 */}
          <h3 className="font-bold flex items-center mb-1">❓ <span className="ml-2">Can a Monetized Channel Lose Its Status?</span></h3>
          <ul className="list-disc pl-8 mb-4">
            <li>
              Yes. A previously approved channel can be <b>demonetized</b> if YouTube later determines it no longer complies with monetization policies. Regular audits may result in the removal of monetization features without prior notice.
            </li>
          </ul>
          <h3 className="font-bold flex items-center mb-1">💡 <span className="ml-2">Recommended Next Step</span></h3>
          <ul className="list-disc pl-8">
            <li>
              Use our <b>YouTube Monetization Checker</b> to identify potential gaps in your channel's performance or policy alignment. It can help you determine where improvements are needed before your next application.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
} 