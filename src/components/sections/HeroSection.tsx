"use client";

import { useState } from 'react';
import { parseYouTubeUrl } from '@/utils/youtube/validator';
import { checkYouTubeContent, type YouTubeCheckResult } from '@/utils/youtube/api';
import { formatViewCount } from '@/utils/youtube/validator';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

export default function HeroSection() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<YouTubeCheckResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    const { type, id } = parseYouTubeUrl(url);
    
    if (type === 'invalid' || !id) {
      setError('Please enter a valid YouTube link');
      setLoading(false);
      return;
    }

    try {
      const checkResult = await checkYouTubeContent(type, id);
      setResult(checkResult);
    } catch (err) {
      setError('Check failed, please try again later');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center px-4 pt-8 pb-4 sm:pt-16 sm:pb-8 bg-white relative">
      <div className="max-w-[800px] w-full mx-auto my-1 sm:my-2">
        <div className="max-w-[800px] w-full mx-auto text-center mb-4 sm:mb-8 mt-8 sm:mt-0">
          <Image src="/logo.svg" alt="YouTube Monetization Checker Logo" width={60} height={60} className="mx-auto mt-1 mb-1 w-10 h-10 sm:w-[60px] sm:h-[60px] sm:mt-2 sm:mb-0" priority />
          <h1 className="text-center">YouTube Monetization Checker</h1>
        </div>
        <div className="max-w-[800px] w-full mx-auto">
          <div className="border-2 border-dashed border-gray-300 rounded-2xl p-1 sm:p-2">
            <div className="bg-white rounded-2xl shadow-sm p-2 sm:p-[32px] flex flex-col items-center">
              <p className="text-center mb-4 sm:mb-10">
                Enter your YouTube Channel, Video, or Shorts URL below to check if it's monetized.
              </p>

              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-2 sm:mb-4 w-full">
                <div className="flex flex-col md:flex-row gap-2 items-center w-full">
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Paste YouTube Channel/Video/Shorts URL here..."
                    className="w-full md:flex-1 px-4 h-12 sm:h-14 rounded-lg border border-gray-300 bg-transparent shadow-none text-[18px] font-semibold focus:outline-none focus:ring-2 focus:ring-red-500 min-w-0 placeholder:text-gray-500 placeholder:font-semibold placeholder:text-[18px] placeholder:normal-case"
                    required
                  />
                  <div className="hidden md:block h-8 w-px bg-gray-200 mx-1" />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full md:w-auto min-w-[120px] px-6 py-2 sm:py-3 h-12 sm:h-12 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-lg font-semibold shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-lg transform hover:scale-105 flex items-center justify-center gap-2 hover:-translate-y-0.5 border-0"
                  >
                    <MagnifyingGlassIcon className="w-5 h-5 text-white" />
                    {loading ? 'Checking...' : 'Check Now'}
                  </button>
                </div>
                <div className="text-xs text-gray-400 mt-1 sm:mt-2 text-left pl-2 select-none">
                  Example: https://youtube.com/watch?v=xxxx
                </div>
                <div className="text-xs text-gray-400 mt-0.5 sm:mt-1 text-left pl-2 select-none">
                  Your privacy is protected. We do not store any links.
                </div>
              </form>
              <div className="w-full max-w-xl mx-auto border-t border-gray-100 mb-1" />

              {error && (
                <div className="mb-8 p-4 bg-red-50 text-red-600 rounded-xl shadow font-medium">
                  {error}
                </div>
              )}

              {result && result.success && result.data && (
                <div className="card flex flex-col items-center mt-4 sm:mt-6 w-full max-w-xs sm:max-w-md mx-auto">
                  {result.data.thumbnail && (
                    <img
                      src={result.data.thumbnail}
                      alt={result.data.title || 'Thumbnail'}
                      className="w-24 h-24 sm:w-36 sm:h-36 object-cover mx-auto mb-2 sm:mb-3 rounded-xl shadow border border-gray-200"
                    />
                  )}
                  <h2 className="text-base sm:text-lg font-bold mb-2 sm:mb-4 text-gray-800 truncate w-full" title={result.data.title}>
                    {result.data.title || 'Result'}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 w-full mt-2">
                    <div className="flex flex-col items-center bg-gray-50 rounded-lg py-3 shadow-inner border border-gray-100">
                      <span className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Views</span>
                      <span className="text-2xl font-extrabold text-red-500 drop-shadow">{formatViewCount(result.data.views)}</span>
                    </div>
                    <div className="flex flex-col items-center bg-gray-50 rounded-lg py-3 shadow-inner border border-gray-100">
                      <span className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Monetization Eligibility</span>
                      <span className={`text-xl font-extrabold ${result.data.isMonetizable ? 'text-green-500' : 'text-yellow-500'} drop-shadow`}>
                        {result.data.isMonetizable ? 'Eligible' : 'Not Eligible Yet'}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}