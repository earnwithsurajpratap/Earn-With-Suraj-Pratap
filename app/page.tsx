'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import { 
  CheckCircle2, Sparkles, TrendingUp, Zap, Clock, PlayCircle,
  Video, Award, Layers, ChevronRight, ShieldCheck, Gift,
  ArrowRight, Star, Plus, Minus, Download, Users, Lightbulb, Play, UserCircle
} from 'lucide-react';
import BundleSection from '@/components/BundleSection';
import AboutUs from '@/components/AboutUs';
import BonusSection from '@/components/BonusSection';
import RealGrowthProof from '@/components/RealGrowthProof';
import AnimatedCounter from '@/components/AnimatedCounter';
import CountdownTimer from '@/components/CountdownTimer';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { q: "Kya ye reels ready to upload hai?", a: "Haan, sab reels ready-to-use hain. Bas download karo aur upload karo." },
    { q: "Kya editing karni padegi?", a: "Nahi, direct upload kar sakte hain. Koi extra editing ki zarurat nahi hai." },
    { q: "Delivery kaise milegi?", a: "Payment ke turant baad Google Drive ka link automatic mil jayega life-time access ke sath." },
    { q: "Kya refund milega?", a: "Nahi, ye ek digital product hai isliye refund policy applicable nahi hai." },
    { q: "Kya beginners use kar sakte hain?", a: "Haan, ye puri tarah se beginner friendly hai. Sab kuch organized format me milega." }
  ];

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-10 md:pt-24 md:pb-12 overflow-hidden">
        {/* Colorful Gradient Backgrounds */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-gray-50">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-purple-400/30 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-400/30 blur-[120px]" />
          <div className="absolute top-[30%] right-[20%] w-[40%] h-[40%] rounded-full bg-orange-400/20 blur-[100px]" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex flex-col items-center"
          >
            {/* Blinking Urgency Banner */}
            <div className="inline-flex animate-pulse items-center space-x-2 px-4 py-2 rounded-full bg-red-100 border border-red-200 text-red-700 font-bold text-xs md:text-sm mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span>Limited Seats Only - Closing Soon!</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 display-font leading-tight max-w-6xl mx-auto">
              Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-700 to-orange-500">2.5 Lakh+ Viral Reels</span> & Grow Instantly
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-medium px-2 md:px-0">
              Ready-to-use reels for Instagram & Facebook – no editing needed. Start getting high engagement today!
            </p>

            {/* Quick Trust Badges inside Hero */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-gray-100 shadow-md text-xs md:text-sm font-bold text-gray-800"><CheckCircle2 className="w-4 h-4 text-green-500 mr-1.5" /> 700+ Channels Grown</span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-gray-100 shadow-md text-xs md:text-sm font-bold text-gray-800"><CheckCircle2 className="w-4 h-4 text-blue-500 mr-1.5" /> 90,000+ Students</span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-gray-100 shadow-md text-xs md:text-sm font-bold text-gray-800"><CheckCircle2 className="w-4 h-4 text-purple-500 mr-1.5" /> Proven Content</span>
            </div>

            {/* CTA App */}
            <div className="w-full sm:w-auto px-4 sm:px-0 flex flex-col items-center">
              <motion.a
                href="https://rzp.io/rzp/roRge6R6"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex w-full md:w-auto sm:inline-flex items-center justify-center px-6 py-4 md:px-10 md:py-5 text-lg md:text-xl font-bold text-white transition-all duration-300 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-full shadow-[0_0_30px_rgba(147,51,234,0.4)] hover:shadow-[0_0_40px_rgba(147,51,234,0.6)] focus:outline-none border-2 border-white/20 whitespace-nowrap overflow-hidden"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
                <span className="relative z-10 flex items-center">
                  Get Instant Access <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
              
              {/* Delivery Info */}
              <div className="mt-4 flex flex-col items-center justify-center text-xs md:text-sm font-medium text-gray-600 space-y-1">
                <div className="flex items-center space-x-1 text-green-600 bg-green-50 px-3 py-1 rounded-full">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Secure Payment via Razorpay</span>
                </div>
                <div className="flex items-center space-x-3 mt-2">
                  <span className="flex items-center"><Zap className="w-3 h-3 text-orange-500 mr-1" /> Instant Access</span>
                  <span className="text-gray-300">|</span>
                  <span className="flex items-center"><Download className="w-3 h-3 text-blue-500 mr-1" /> Google Drive Link</span>
                </div>
              </div>
            </div>

            {/* Timer Banner wrapper to sit below CTA */}
            <div className="mt-12 w-full max-w-sm mx-auto bg-gradient-to-tr from-purple-900 to-indigo-900 rounded-2xl p-6 shadow-2xl relative overflow-hidden border border-purple-500/30">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <Clock className="w-24 h-24 text-white" />
               </div>
               <CountdownTimer />
            </div>

          </motion.div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-6 bg-gray-900 border-y border-purple-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-800">
            <div className="text-center pt-4 sm:pt-0">
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-1"><AnimatedCounter value={250000} /></div>
              <div className="text-purple-400 text-sm font-semibold uppercase tracking-wider">Viral Reels</div>
            </div>
            <div className="text-center pt-4 sm:pt-0">
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-1"><AnimatedCounter value={90000} /></div>
              <div className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Students</div>
            </div>
            <div className="text-center pt-4 sm:pt-0">
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-1"><AnimatedCounter value={700} /></div>
              <div className="text-green-400 text-sm font-semibold uppercase tracking-wider">Channels Grown</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Bundle Section */}
      <BundleSection />

      {/* 3. About Us Section */}
      <AboutUs />

      {/* 4. Bonus Section */}
      <BonusSection />

      {/* 5. Real Growth Proof */}
      <RealGrowthProof />

      {/* 6. FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold display-font text-gray-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-purple-200 transition-colors shadow-sm">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-bold text-gray-900 text-lg pr-4">{faq.q}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-gray-50 transition-transform duration-300 ${openFaq === i ? 'rotate-180 bg-purple-50 text-purple-600' : 'text-gray-400'}`}>
                    {openFaq === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 pt-0 text-gray-600 font-medium leading-relaxed bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Bottom CTA for Mobile Only */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-40">
        <a
          href="https://rzp.io/rzp/roRge6R6"
          className="flex w-full items-center justify-center px-6 py-4 text-base font-bold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-[0_10px_25px_rgba(147,51,234,0.5)] border border-white/20 active:scale-95 transition-transform"
        >
          Get Instant Access <ChevronRight className="ml-1 w-5 h-5" />
        </a>
      </div>

    </div>
  );
}
