"use client";
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

// FAQ Section
// 展示常见问题，手风琴交互，卡片风格，英文界面，注释为中文
const faqs = [
  {
    question: "How can I tell if someone else's channel is monetized?",
    answer:
      'Look for signs like ads during videos, the "Join" button on the channel, and interactive features like Super Chat or Memberships.'
  },
  {
    question: 'Does this tool show how much a YouTube video earns?',
    answer:
      'We provide estimated revenue based on engagement, view count, and subscriber metrics - ideal for evaluating monetization potential.'
  },
  {
    question: 'Is this tool safe to use?',
    answer:
      "Absolutely. We do not store your input, and no YouTube login is required. It's secure and anonymous."
  },
  {
    question: 'How can I increase my monetization chances on YouTube?',
    answer:
      "Focus on long watch times, increase audience engagement, and follow YouTube's monetization guidelines closely. Optimize video titles, tags, and descriptions with relevant keywords to reach more viewers."
  },
];

export default function FAQSection() {
  // 当前展开的FAQ索引
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-blue-50">
      <div className="max-w-3xl mx-auto px-4">
        {/* 大卡片容器 */}
        <div className="bg-white/95 rounded-2xl shadow-2xl px-8 py-14 md:p-16">
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
                  <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">
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