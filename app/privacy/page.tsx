export const metadata = {
  title: 'Privacy Policy | WebifyBoost',
};

export default function PrivacyPage() {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold display-font text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg prose-purple text-gray-600">
            <p>
              At WebifyBoost, accessible from our website, one of our main priorities is the privacy of our visitors.
            </p>
            <p>
              <strong>User data is safe and not shared.</strong> We do not sell, trade, or rent Users&apos; personal identification information to others. Any information collected during the purchase process is solely used for delivering the digital product and providing customer support.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information Collection</h2>
            <p>
              We only collect information that you voluntarily provide to us when you make a purchase or contact us for support (e.g., name, email address, phone number).
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Security</h2>
            <p>
              We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information and transaction data stored on our site.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
