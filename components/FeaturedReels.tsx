'use client';
import ImageWithFallback from './ImageWithFallback';

export default function FeaturedReels() {
  const categories = [
    {
      title: "AI Animals Reels",
      fallback: "https://picsum.photos/seed/ai_real_animal/800/1000",
      image: "/images/featured_animals.jpg"
    },
    {
      title: "Money Motivation Reels",
      fallback: "https://picsum.photos/seed/ai_real_money/800/1000",
      image: "/images/featured_money.jpg"
    },
    {
      title: "Luxury Reels",
      fallback: "https://picsum.photos/seed/ai_real_luxury/800/1000",
      image: "/images/featured_luxury.jpg"
    },
    {
      title: "Funny Reels",
      fallback: "https://picsum.photos/seed/ai_real_funny/800/1000",
      image: "/images/featured_funny.jpg"
    },
    {
      title: "Study Reels Bundle",
      fallback: "https://picsum.photos/seed/ai_real_study/800/1000",
      image: "/images/featured_study.jpg"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative border-y border-gray-100 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-100 to-blue-50 rounded-full blur-3xl opacity-50 -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-pink-100 to-orange-50 rounded-full blur-3xl opacity-50 -z-10 -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold display-font text-gray-900 mb-6 tracking-tight">
            🔥 Trending Reels Categories
          </h2>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            High-quality, viral-ready content designed to explode your reach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center items-center">
          {categories.map((cat, index) => (
            <div 
              key={index} 
              className={`group relative rounded-3xl overflow-hidden bg-white shadow-lg border border-gray-100 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${index > 2 ? 'lg:col-span-1.5' : ''}`}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <ImageWithFallback
                  src={cat.image}
                  fallbackSrc={cat.fallback}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 leading-tight drop-shadow-md">
                  {cat.title}
                </h3>
                <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full group-hover:w-24 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          @media (min-width: 1024px) {
            .grid > div:nth-child(4) {
              grid-column: 1 / span 2;
              max-width: 400px;
              margin-left: auto;
              width: 100%;
            }
            .grid > div:nth-child(5) {
              grid-column: 2 / span 2;
              max-width: 400px;
              margin-right: auto;
              width: 100%;
            }
          }
        `}} />
      </div>
    </section>
  );
}
