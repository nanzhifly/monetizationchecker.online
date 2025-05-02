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
    <section className="py-10 bg-gradient-to-b from-white via-gray-50 to-blue-50">
      <div className="max-w-3xl mx-auto px-4">
        {/* 大卡片容器 */}
        <div className="bg-white/95 rounded-2xl shadow-2xl px-8 py-10 md:p-12">
          {/* 标题和副标题 */}
          <h2 className="text-3xl font-extrabold text-center mb-4 bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Find answers to the most common questions about our YouTube monetization checker.
          </p>

          {/* FAQ 手风琴列表 */}
          <div className="space-y-5">
            {faqs.map((item, idx) => (
              <div
                key={idx}
                className={`bg-gray-50 rounded-xl shadow group border border-gray-100 transition cursor-pointer ${openIdx === idx ? 'border-red-400 shadow-lg' : 'hover:border-blue-300 hover:shadow-md'}`}
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <div className="flex items-center justify-between px-6 py-5 select-none">
                  <span className="font-semibold text-gray-900 text-base">
                    {item.question}
                  </span>
                  <ChevronDownIcon
                    className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${openIdx === idx ? 'rotate-180 text-red-500' : ''}`}
                  />
                </div>
                {openIdx === idx && (
                  <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed whitespace-pre-line">
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