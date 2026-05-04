import Link from 'next/link';
import { AlertCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20">
      {/* Colorful Disclaimer Banner */}
      <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-12 border-y border-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-5 max-w-5xl mx-auto">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm mb-2 shadow-inner shadow-white/20">
              <AlertCircle className="w-6 h-6 text-purple-300" />
            </div>
            <p className="text-sm md:text-base leading-relaxed text-purple-200">
              <strong className="text-white font-semibold tracking-wide">NOT AFFILIATED:</strong> This website is not affiliated with, endorsed by, or sponsored by Facebook&trade;, Meta&trade;, Google&trade;, or YouTube&trade;, nor any of their subsidiaries or associated companies. Once you leave Facebook&trade;, Instagram&trade;, or YouTube&trade;, the responsibility no longer lies with their platforms.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-purple-200">
              <strong className="text-white font-semibold tracking-wide">RESULTS DISCLAIMER:</strong> Results may vary from person to person. During this program/bundle usage, we provide necessary training, resources, and strategies to help you succeed. However, individual results depend entirely on your own effort, consistency, skills, and implementation. We do not guarantee any specific income or results.
            </p>
            <p className="text-xs md:text-sm text-purple-300/80 mt-2 leading-relaxed max-w-3xl">
              We have taken all reasonable steps to ensure that the information provided on this website is accurate and up to date. This website is intended for educational and informational purposes only.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 display-font">
                WebifyBoost
              </span>
              <p className="mt-4 text-gray-500 max-w-sm leading-relaxed">
                Premium ready-to-use digital assets and viral reels for Instagram & Facebook. Save time and grow your online presence faster.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-gray-500 hover:text-purple-600 transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-500 hover:text-purple-600 transition-colors">Contact Us</Link></li>
                <li><a href="mailto:growth@webifyboost.in" className="text-gray-500 hover:text-purple-600 transition-colors inline-block mt-2 font-medium">growth@webifyboost.in</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><Link href="/privacy" className="text-gray-500 hover:text-purple-600 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/disclaimer" className="text-gray-500 hover:text-purple-600 transition-colors">Disclaimer</Link></li>
                <li><Link href="/refund" className="text-gray-500 hover:text-purple-600 transition-colors">Refund Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} WebifyBoost. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
