import { CheckCircle2 } from 'lucide-react';

export default function WhyBundle() {
  const reasons = [
    "Handpicked viral and trending reels",
    "Ready-to-use (no editing required)",
    "Covers multiple niches (all categories included)",
    "Saves time and effort",
    "Helps maintain daily consistency"
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold display-font text-gray-900 mb-6 tracking-tight">
            🚀 Why This Reels Bundle?
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-y-1/2 -translate-x-1/3"></div>
          
          <div className="relative z-10">
            <ul className="space-y-6 max-w-2xl mx-auto">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-center text-lg md:text-xl text-gray-800 font-bold bg-gray-50 rounded-2xl p-4 md:p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all">
                  <span className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0 mr-4 shadow-md">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </span>
                  {reason}
                </li>
              ))}
            </ul>
            
            <div className="mt-12 text-center">
              <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-200 shadow-sm">
                <p className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 italic">
                  &quot;Simple system + ready content = faster growth&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
