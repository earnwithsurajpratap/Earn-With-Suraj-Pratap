import { Mail, Phone } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | WebifyBoost',
};

export default function ContactPage() {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold display-font text-gray-900 mb-8">Contact Us</h1>
          
          <p className="text-gray-600 mb-10 text-lg">
            Have questions about the AI Viral Reels Bundle? We&apos;re here to help. Reach out to us via email or WhatsApp and we&apos;ll get back to you as soon as possible.
          </p>

          <div className="space-y-6">
            <a href="mailto:growth@webifyboost.in" className="flex items-center p-6 bg-gray-50 rounded-2xl hover:bg-purple-50 transition-colors group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-purple-600 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div className="ml-6">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Email Us</h3>
                <p className="text-lg text-purple-600 font-medium">growth@webifyboost.in</p>
              </div>
            </a>

            <a href="https://wa.me/918881386529" target="_blank" rel="noopener noreferrer" className="flex items-center p-6 bg-gray-50 rounded-2xl hover:bg-green-50 transition-colors group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-green-600 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div className="ml-6">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Phone / WhatsApp</h3>
                <p className="text-lg text-green-600 font-medium">+91 8881386529</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
