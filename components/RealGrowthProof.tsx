import ImageWithFallback from './ImageWithFallback';

export default function RealGrowthProof() {
  const proofs = [
    { src: "/images/proof1.jpg", fallback: "https://picsum.photos/seed/ai_character_1/600/800", caption: "1M+ Views on Reels" },
    { src: "/images/proof2.jpg", fallback: "https://picsum.photos/seed/ai_character_2/600/800", caption: "Fast Channel Monetization" },
    { src: "/images/proof3.jpg", fallback: "https://picsum.photos/seed/ai_character_3/600/800", caption: "Massive Follower Growth" },
    { src: "/images/proof4.jpg", fallback: "https://picsum.photos/seed/ai_character_4/600/800", caption: "High Engagement Rate" },
    { src: "/images/proof5.jpg", fallback: "https://picsum.photos/seed/ai_character_5/600/800", caption: "Viral AI Shorts" },
    { src: "/images/proof6.jpg", fallback: "https://picsum.photos/seed/ai_character_6/600/800", caption: "Consistent Earning" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold display-font text-gray-900 mb-4 tracking-tight">
            Real Proof of AI Channels
          </h2>
          <p className="text-lg text-gray-600 font-medium">
            See how ordinary pages turned into viral AI character channels making money online.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {proofs.map((proof, idx) => (
            <div 
              key={idx}
              className="group relative rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-200 bg-white transform transition-all duration-500 hover:shadow-[0_10px_40px_rgba(147,51,234,0.15)] hover:-translate-y-2 w-full mx-auto max-w-sm sm:max-w-none"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <ImageWithFallback 
                  src={proof.src}
                  fallbackSrc={proof.fallback}
                  alt={proof.caption}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient for dark bottom area so text is clearly visible */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-6 left-0 right-0 text-center px-4">
                  <span className="inline-block px-6 py-2.5 rounded-xl bg-white/95 backdrop-blur-md text-gray-900 font-bold text-sm md:text-base shadow-xl transform transition-transform group-hover:scale-105 border border-white/50">
                    {proof.caption}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
