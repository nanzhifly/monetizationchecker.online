"use client";

import { useState } from 'react';
import { parseYouTubeUrl } from '@/utils/youtube/validator';
import { checkYouTubeContent, type YouTubeCheckResult } from '@/utils/youtube/api';
import { formatViewCount } from '@/utils/youtube/validator';

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
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-24 bg-gradient-to-b from-white via-gray-50 to-blue-50">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
          YouTube Monetization Checker
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-10 font-medium">
          Quickly check if your YouTube content meets monetization requirements
        </p>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-10">
          <div className="flex flex-col md:flex-row gap-4 bg-white/80 shadow-lg rounded-2xl p-4 md:p-2 items-center">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter a YouTube video, Shorts, or channel link"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent shadow-sm text-lg transition"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 bg-red-500 hover:bg-red-700 text-white rounded-lg font-semibold shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-lg min-w-[140px]"
            >
              {loading ? 'Checking...' : 'Check Now'}
            </button>
          </div>
        </form>

        {error && (
          <div className="mb-8 p-4 bg-red-50 text-red-600 rounded-xl shadow font-medium">
            {error}
          </div>
        )}

        {result && result.success && result.data && (
          <div className="bg-white/90 p-5 rounded-2xl shadow-xl max-w-md mx-auto flex flex-col items-center mt-6 border border-gray-100">
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
    </section>
  );
} 