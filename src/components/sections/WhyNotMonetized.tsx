import React from 'react';

export default function WhyNotMonetized() {
  return (
    <section>
      <div className="max-w-[800px] mx-auto my-8">
        <div className="my-4 p-4 rounded-xl bg-white shadow">
          <h2 className="text-center font-bold">Why Your YouTube Channel May Not Be Monetized?</h2>
          <p>
            If your channel hasn't been approved for monetization, it may be due to not meeting YouTube's eligibility criteria or failing to comply with its policies. Below are the most common reasons:
          </p>
          <h3 className="font-bold">1. Not Meeting the Minimum Requirements</h3>
          <p>
            To join the <b>YouTube Partner Program (YPP)</b>, your channel must meet at least one of the following thresholds:
          </p>
          <ul className="list-disc pl-8">
            <li>1,000 subscribers and 4,000 valid public watch hours in the past 12 months</li>
            <li>3 million public YouTube Shorts views in the last 90 days</li>
          </ul>
          <p>
            If these requirements aren't met, your application will be automatically declined.
          </p>
          <h3 className="font-bold">2. Policy Violations</h3>
          <p>
            Even if the metrics are met, YouTube conducts a <b>manual review</b> of your content. You may be denied monetization if:
          </p>
          <ul className="list-disc pl-8">
            <li>Videos violate Community Guidelines or Ad-Friendly Content policies</li>
            <li>There is reused content without significant added value</li>
            <li>Channel activity suggests spam, misleading behavior, or inauthentic engagement</li>
          </ul>
          <h3 className="font-bold">3. Reapplication Delays</h3>
          <p>
            If your application is rejected:
          </p>
          <ul className="list-disc pl-8">
            <li>You can reapply after 30 days (for most issues)</li>
            <li>In some cases, you must wait 90 days depending on the severity of the violation</li>
            <li>Use this time to review YouTube's policies and make necessary changes to your content.</li>
          </ul>
          <h3 className="font-bold">Can a Monetized Channel Lose Its Status?</h3>
          <p>
            Yes. A previously approved channel can be <b>demonetized</b> if YouTube later determines it no longer complies with monetization policies. Regular audits may result in the removal of monetization features without prior notice.
          </p>
          <h3 className="font-bold">Recommended Next Step</h3>
          <p>
            Use our <b>YouTube Monetization Checker</b> to identify potential gaps in your channel's performance or policy alignment. It can help you determine where improvements are needed before your next application.
          </p>
        </div>
      </div>
    </section>
  );
} 