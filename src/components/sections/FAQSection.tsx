"use client";
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

// FAQ Section
// 展示常见问题，手风琴交互，卡片风格，英文界面，注释为中文
const faqs = [
  {
    question: 'How to Check If Other YouTube Channels Are Monetized',
    answer:
      'To see if a YouTube channel is monetized, visit their channel page and look for signs like a "Join" button or Super Chat features during live streams. Also, check if ads appear on their videos — if they do, it\'s a strong sign the channel is earning revenue through the YouTube Partner Program.'
  },
  {
    question: 'How to Check Your YouTube Monetization Earnings',
    answer:
      'Log in to YouTube Studio, go to the Analytics tab, and then click on Revenue to view your monetization earnings in detail. For easier tracking and more insights at a glance, you can also use our YouTube Monetization Checker Tool. It simplifies the process and gives you a clear overview of your potential income.'
  },
  {
    question: 'How to Use Keywords to Improve Your Monetization Chances',
    answer:
      'Want to boost your monetization success? Start with keyword research. Find popular and relevant keywords that match your content, then include them naturally in your video titles, descriptions, and tags. This helps your videos rank higher in search results, increases views, and leads to more watch time — all of which improve your monetization potential.'
  },
  {
    question: 'What Other Monetization Options Does YouTube Offer Besides Ads?',
    answer:
      'Besides ad revenue, YouTube provides several other ways to earn money:\n\n• Channel Memberships\n• Super Chat & Super Stickers\n• Merchandise Shelf (Product Sales)\n• YouTube Premium Revenue\n• Brand Sponsorships or Paid Promotions\n\nThese options let creators diversify their income and build multiple revenue streams from their content.'
  },
];

export default function FAQSection() {
  // 当前展开的FAQ索引
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section>
      <div className="max-w-[800px] mx-auto my-8">
        <div className="my-4 p-4 rounded-xl bg-white shadow">
          <h2 className="text-center font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 text-center">
            Find answers to the most common questions about our YouTube monetization checker.
          </p>
          <div>
            {faqs.map((item, idx) => (
              <div key={idx} className="mt-8 cursor-pointer" onClick={() => setOpenIdx(openIdx === idx ? null : idx)}>
                <div className="flex items-center justify-between select-none">
                  <span className="font-semibold text-gray-900 text-base">
                    {item.question}
                  </span>
                  <ChevronDownIcon
                    className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${openIdx === idx ? 'rotate-180 text-red-500' : ''}`}
                  />
                </div>
                {openIdx === idx && (
                  <div className="pb-2 text-gray-500 text-sm leading-relaxed whitespace-pre-line">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 