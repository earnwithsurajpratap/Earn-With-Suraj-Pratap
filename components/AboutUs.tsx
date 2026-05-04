'use client';
import { UserCircle } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white relative border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-tr from-purple-100 to-blue-100 rounded-full flex items-center justify-center text-purple-600 shadow-sm border border-purple-200">
            <UserCircle className="w-12 h-12" />
          </div>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold display-font text-gray-900 mb-6 tracking-tight">
          Suraj Pratap Singh
        </h2>
        <div className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-medium space-y-6 text-left md:text-center">
          <p>
            Suraj Pratap Singh is a professional digital expert with 7+ years of experience in website design, app development, stock market basics, and coding (HTML, Java, CSS). He holds a master degree in the computer field and has helped 700+ YouTube, Facebook, and Instagram channels grow and start earning online.
          </p>
          <p>
            He has worked with thousands of creators and guided them using simple and practical strategies to achieve consistent growth through viral content systems. His approach focuses on making online growth easy, even for beginners.
          </p>
          <p>
            Based in Uttar Pradesh, India, his mission is to help creators save time and grow faster using ready-to-use content and smart digital methods.
          </p>
        </div>
      </div>
    </section>
  );
}
