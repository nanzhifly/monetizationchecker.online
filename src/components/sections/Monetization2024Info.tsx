import React from 'react';

// 该组件展示2024年YouTube盈利相关须知，风格与CommonReasonsNotMonetized一致
export default function Monetization2024Info() {
  return (
    <section>
      <div className="max-w-[800px] mx-auto my-8">
        <div className="card p-4 my-4">
          <h2 className="text-center font-bold">What You Need to Know About YouTube Monetization in 2024</h2>
          <p className="mb-4">
            Before you apply for monetization, make sure your channel meets these foundational requirements. These factors are essential for eligibility and long-term compliance with the YouTube Partner Program (YPP).
          </p>
          {/* 1. Country Availability */}
          <h3 className="font-bold flex items-center mb-1">📌 <span className="ml-2">1. Country Availability</span></h3>
          <ul className="list-disc pl-8 mb-4">
            <li>Your YouTube account must be registered in a region where the <b>YouTube Partner Program is available</b>.</li>
            <li>
              <a href="https://support.google.com/youtube/answer/7101720" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Check supported countries →</a>
            </li>
          </ul>
          {/* 2. Compliance With Monetization Policies */}
          <h3 className="font-bold flex items-center mb-1">📌 <span className="ml-2">2. Compliance With Monetization Policies</span></h3>
          <ul className="list-disc pl-8 mb-4">
            <li>Your channel must follow all <b>YouTube monetization policies</b>, including content, ad suitability, and community standards.</li>
          </ul>
          {/* 3. No Active Community Guidelines Strikes */}
          <h3 className="font-bold flex items-center mb-1">📌 <span className="ml-2">3. No Active Community Guidelines Strikes</span></h3>
          <ul className="list-disc pl-8 mb-4">
            <li>Channels with any <b>active Community Guidelines strikes</b> are not eligible for monetization.</li>
            <li>Review your channel status in <b>YouTube Studio &gt; Channel &gt; Status and Features</b>.</li>
          </ul>
          {/* 4. AdSense Account Linking */}
          <h3 className="font-bold flex items-center mb-1">📌 <span className="ml-2">4. AdSense Account Linking</span></h3>
          <ul className="list-disc pl-8 mb-4">
            <li>You must connect an <b>active Google AdSense account</b> to receive payments from YouTube.</li>
            <li>This can be managed during the monetization application process.</li>
          </ul>
          {/* 5. Enable Two-Factor Authentication (2FA) */}
          <h3 className="font-bold flex items-center mb-1">📌 <span className="ml-2">5. Enable Two-Factor Authentication (2FA)</span></h3>
          <ul className="list-disc pl-8 mb-4">
            <li>Enabling <b>2-Step Verification</b> on your Google account helps secure your channel and prevents unauthorized access.</li>
            <li>This is now a recommended security measure for all monetizing creators.</li>
          </ul>
          {/* Tip */}
          <h3 className="font-bold flex items-center mb-1">🔍 <span className="ml-2">Tip</span></h3>
          <p className="mb-2">
            These requirements must be met <b>before</b> submitting your application. You can use our <b>YouTube Monetization Checker</b> to verify technical eligibility and identify missing steps in advance.
          </p>
        </div>
      </div>
    </section>
  );
} 