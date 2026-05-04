'use client';
import { motion } from 'motion/react';
import { Sparkles, TrendingUp, Zap, Star, LayoutList, Rocket, CheckCircle2, ChevronRight, Gift } from 'lucide-react';

export default function BundleSection() {
  return (
    <section id="content" className="py-16 md:py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold display-font text-gray-900 mb-6 tracking-tight">
            🔥 Complete Viral Reels Bundle
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Everything you need to grow fast and go viral across platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Box 1: Premium Reels */}
          <div className="bg-white rounded-3xl p-8 border border-purple-100 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-purple-600 group-hover:to-purple-700 group-hover:text-white transition-all text-purple-600 shadow-sm">
              <Sparkles className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-extrabold text-gray-900 mb-5">✨ Premium Reels</h3>
            <ul className="space-y-3">
              {['Anime Reels Bundle', 'AI Miniature Reels', 'AI Animals Reels', '4K Ultra HD Reels', 'Mad Scientist Voice Reels'].map((item, i) => (
                <li key={i} className="flex items-start text-gray-600 font-medium">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-purple-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Box 2: Motivation Reels */}
          <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white transition-all text-blue-600 shadow-sm">
              <TrendingUp className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-extrabold text-gray-900 mb-5">💰 Motivation Reels</h3>
            <ul className="space-y-3">
              {['Money Motivation Bundle', '1400+ Motivational Reels', '1300+ Motivational Reels', '1000+ Motivational Reels'].map((item, i) => (
                <li key={i} className="flex items-start text-gray-600 font-medium">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Box 3: Viral Categories */}
          <div className="bg-white rounded-3xl p-8 border border-orange-100 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group lg:row-span-2">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-500 group-hover:to-orange-600 group-hover:text-white transition-all text-orange-500 shadow-sm">
              <Zap className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-extrabold text-gray-900 mb-5">🔥 Viral Categories</h3>
            <ul className="space-y-3">
              {[
                '10000+ Luxury Reels', '500+ Luxury Reels', '1000+ Wood Work Reels', '2000+ Tools Reels',
                '1000+ Tips & Tricks Reels', '1000+ Satisfying Reels', '1400+ Funny Reels', '1000+ Comedy Reels',
                '3500+ Shark Tank Reels', '500+ Omegle Reels', '3000+ Useful Gadgets Reels', '1000+ Emotional Reels',
                '1500+ AI Doctor Reels', '2000+ Gym Reels', '500+ AI Business Reels'
              ].map((item, i) => (
                <li key={i} className="flex items-start text-gray-600 font-medium">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-orange-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Box 4: Extra */}
          <div className="bg-white rounded-3xl p-8 border border-indigo-100 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group md:col-span-2 lg:col-span-2">
            <div className="w-14 h-14 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-indigo-600 group-hover:to-indigo-700 group-hover:text-white transition-all text-indigo-600 shadow-sm">
              <Rocket className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-extrabold text-gray-900 mb-5">🚀 Extra Reels</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {['Cars Reels', 'Shayari Reels', 'More Motivational Reels', 'AI Hindi Kahani Bundle', 'Study Reels Bundle', 'Superhero Reels'].map((item, i) => (
                <div key={i} className="flex items-start text-gray-600 font-medium">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-indigo-500 flex-shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
            <motion.a
                href="https://rzp.io/rzp/roRge6R6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white transition-all bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-full shadow-[0_0_30px_rgba(147,51,234,0.4)] border border-white/20 hover:shadow-[0_0_40px_rgba(147,51,234,0.6)] focus:outline-none"
              >
                Get Instant Access <ChevronRight className="ml-2 w-5 h-5" />
              </motion.a>
        </div>
      </div>
    </section>
  );
}
