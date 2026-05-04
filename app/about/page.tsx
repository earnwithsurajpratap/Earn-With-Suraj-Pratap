export const metadata = {
  title: 'About Us | WebifyBoost',
};

export default function AboutPage() {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold display-font text-gray-900 mb-8">About Us</h1>
          
          <div className="prose prose-lg prose-purple text-gray-600">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Suraj Pratap</h2>
            <p className="leading-relaxed mb-6">
              Suraj Pratap is a digital creator and strategist who has managed and helped grow over 700+ YouTube, Facebook, and Instagram channels.
            </p>
            <p className="leading-relaxed">
              He has helped creators scale their content and build strong online presences using proven growth strategies. With the WebifyBoost AI Viral Reels Bundle, his goal is to provide aspiring creators and businesses with high-quality, ready-to-use content to bypass the tedious editing process and start seeing real growth immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
