import React from 'react';

// 该组件展示YouTube频道未获盈利的常见原因，风格与WhyNotMonetized一致
export default function CommonReasonsNotMonetized() {
  return (
    <section>
      <div className="max-w-[800px] mx-auto my-8">
        <div className="card p-4 my-4">
          <h2 className="font-bold">Common Reasons Why a YouTube Channel Is Not Monetized</h2>
          <p className="mb-4">
            If your channel has been denied monetization, it's likely due to policy violations or content practices that don't meet YouTube's standards. Below are the most common reasons:
          </p>
          {/* 1. Content Quality & Originality Issues */}
          <h3 className="font-bold flex items-center mb-1">📌 <span className="ml-2">1. Content Quality & Originality Issues</span></h3>
          <ul className="list-disc pl-8 mb-4">
            <li>Reusing <b>AI-generated</b> or <b>low-quality content</b> without adding meaningful value</li>
            <li>Uploading content from other creators without proper permission or transformation</li>
            <li>Creating <b>automated slideshow videos</b> using identical templates, text, or images</li>
          </ul>
          {/* 2. Repetitive or Misleading Content */}
          <h3 className="font-bold flex items-center mb-1">📌 <span className="ml-2">2. Repetitive or Misleading Content</span></h3>
          <ul className="list-disc pl-8 mb-4">
            <li>Looping short clips (e.g. rain sounds) for long durations without added context</li>
            <li>Publishing <b>conspiracy theories</b> or <b>misleading information</b>, especially involving sensitive topics</li>
            <li>Using <b>AI voiceovers</b> or reposting videos from other platforms without clear modification</li>
          </ul>
          {/* 3. Copyright Violations */}
          <h3 className="font-bold flex items-center mb-1">📌 <span className="ml-2">3. Copyright Violations</span></h3>
          <ul className="list-disc pl-8 mb-4">
            <li>Using <b>music, footage, or media</b> from other creators without proper licensing</li>
            <li>Relying on a <b>Fair Use disclaimer</b> does not guarantee compliance with YouTube's policies</li>
            <li>Some <b>gaming content</b> using copyrighted screen captures may be restricted</li>
          </ul>
          {/* 4. Platform Abuse or Manipulation */}
          <h3 className="font-bold flex items-center mb-1">📌 <span className="ml-2">4. Platform Abuse or Manipulation</span></h3>
          <ul className="list-disc pl-8 mb-4">
            <li>Using <b>spam tactics</b> to artificially boost views, ad clicks, or engagement</li>
            <li>Participating in <b>"sub4sub" exchanges</b> or buying followers/subscribers</li>
            <li>Repeated use of <b>clickbait</b> or misleading thumbnails/titles</li>
          </ul>
          {/* 5. Policy & Community Guideline Violations */}
          <h3 className="font-bold flex items-center mb-1">📌 <span className="ml-2">5. Policy & Community Guideline Violations</span></h3>
          <ul className="list-disc pl-8 mb-4">
            <li>Promoting or depicting <b>drugs, alcohol, firearms</b>, or <b>illegal activity</b></li>
            <li>Uploading content with <b>excessive profanity</b>, hate speech, or graphic violence</li>
            <li>Violating <b>YouTube's community guidelines</b>, including misinformation or offensive behavior</li>
            <li>Remaining <b>inactive for 6+ months</b>, which may lead to demonetization or channel removal</li>
          </ul>
          {/* What You Can Do */}
          <h3 className="font-bold flex items-center mb-1">🔍 <span className="ml-2">What You Can Do</span></h3>
          <p className="mb-2">
            Regularly review YouTube's <a href="https://support.google.com/youtube/answer/1311392" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Monetization Policies</a> and ensure your content meets their standards. If rejected, make necessary adjustments before reapplying. Use our <b>Monetization Checker</b> to help identify compliance risks in advance.
          </p>
        </div>
      </div>
    </section>
  );
} 