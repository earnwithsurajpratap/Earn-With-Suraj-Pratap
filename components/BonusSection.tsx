import { CheckCircle2, Gift } from 'lucide-react';

export default function BonusSection() {
  const bonuses = [
    'Social Media Planner',
    'Instagram Marketing Ebook',
    'Canva Course',
    'ChatGPT Tips Ebook',
    '500+ Bonus Reels',
    'Content Ideas Pack'
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 font-bold text-sm mb-4 shadow-sm border border-yellow-200">
            <Gift className="w-4 h-4 mr-2" /> FREE BONUSES INCLUDED
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold display-font text-gray-900 tracking-tight">
            🎁 Bonus You Will Get
          </h2>
        </div>

        <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-black rounded-3xl p-8 md:p-12 border border-purple-500/30 shadow-[0_0_50px_rgba(147,51,234,0.2)] text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Gift className="w-64 h-64" />
          </div>
          <div className="relative z-10 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {bonuses.map((item, i) => (
                <div key={i} className="flex flex-col items-center justify-center text-center text-indigo-50 font-bold bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm shadow-xl hover:bg-white/10 transition-colors h-full">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0 mb-4 shadow-inner">
                    <CheckCircle2 className="w-6 h-6 text-black" />
                  </div>
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
