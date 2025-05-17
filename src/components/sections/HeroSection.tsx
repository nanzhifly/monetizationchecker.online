"use client";

import { useState } from 'react';
import { parseYouTubeUrl } from '@/utils/youtube/validator';
import { checkYouTubeContent, type YouTubeCheckResult } from '@/utils/youtube/api';
import { formatViewCount } from '@/utils/youtube/validator';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

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
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-24 bg-white relative">
      <div className="max-w-[800px] w-full mx-auto my-8">
        <div className="max-w-[800px] w-full mx-auto text-center mb-8">
          <h1 className="text-center">
            YouTube Monetization Checker
          </h1>
        </div>
        <div className="max-w-[800px] w-full mx-auto">
          <div className="border-2 border-dashed border-gray-300 rounded-2xl p-2">
            <div className="bg-white rounded-2xl shadow-sm p-[32px] flex flex-col items-center">
              <p className="text-center mb-10">
                Enter your YouTube Channel, Video, or Shorts URL below to check if it's monetized.
              </p>

              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-4 w-full">
                <div className={
                  `flex flex-col md:flex-row gap-2 bg-white/90 shadow-2xl rounded-2xl p-4 items-center border-2 transition-all duration-200
                  ${loading ? 'border-red-200' : 'border-white'}
                  focus-within:border-red-400`
                }>
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Paste a YouTube video, Shorts, or channel link here..."
                    className="flex-1 px-4 py-3 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm text-lg transition h-12 min-w-0 placeholder:text-gray-400 placeholder:italic bg-transparent"
                    required
                  />
                  <div className="hidden md:block h-8 w-px bg-gray-200 mx-1" />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full md:w-auto px-8 py-3 h-12 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-lg font-semibold shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-lg min-w-[120px] transform hover:scale-105 flex items-center justify-center gap-2 hover:-translate-y-0.5 border-0"
                  >
                    <MagnifyingGlassIcon className="w-5 h-5 text-white" />
                    {loading ? 'Checking...' : 'Check Now'}
                  </button>
                </div>
                <div className="text-xs text-gray-400 mt-2 text-left pl-2 select-none">
                  Example: https://youtube.com/watch?v=xxxx
                </div>
                <div className="text-xs text-gray-400 mt-1 text-left pl-2 select-none">
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
                <div className="bg-white/95 p-6 rounded-2xl shadow-2xl max-w-md mx-auto flex flex-col items-center mt-6 border border-gray-100">
                  {result.data.thumbnail && (
                    <img
                      src={result.data.thumbnail}
                      alt={result.data.title || 'Thumbnail'}
                      className="w-36 h-36 object-cover mx-auto mb-3 rounded-xl shadow border border-gray-200"
                    />
                  )}
                  <h2 className="text-lg font-bold mb-4 text-gray-800 text-center truncate w-full" title={result.data.title}>
                    {result.data.title || 'Result'}
                  </h2>
                  <div className="grid grid-cols-2 gap-3 w-full mt-2">
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