import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center w-[140px] md:w-[200px]">
            <Link href="/" className="group flex items-center space-x-2">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-gradient-to-tr from-purple-600 via-blue-600 to-indigo-600 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-base md:text-lg font-serif">W</span>
              </div>
              <span className="text-lg md:text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-blue-800 display-font uppercase tracking-tight">
                WebifyBoost
              </span>
            </Link>
          </div>

          {/* Center: Menu (Hidden on smallest screens, visible on md+) */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            <Link href="#bundle" className="text-gray-700 hover:text-purple-600 font-bold text-sm uppercase tracking-wide transition-colors">
              Bundle
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-purple-600 font-bold text-sm uppercase tracking-wide transition-colors">
              About Us
            </Link>
          </div>

          {/* Right: CTA */}
          <div className="flex items-center justify-end w-[140px] md:w-[200px]">
            <a 
              href="https://rzp.io/rzp/roRge6R6"
              className="px-4 py-1.5 text-xs md:px-5 md:py-2 md:text-sm rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold hover:shadow-[0_0_15px_rgba(147,51,234,0.5)] transition-all transform hover:-translate-y-0.5 whitespace-nowrap border border-white/20"
            >
              Get Access
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

