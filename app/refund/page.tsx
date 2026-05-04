export const metadata = {
  title: 'Refund Policy | WebifyBoost',
};

export default function RefundPage() {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold display-font text-gray-900 mb-8">Refund Policy</h1>
          
          <div className="prose prose-lg prose-purple text-gray-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Digital Product Purchase</h2>
            <p className="mb-6 text-lg font-medium text-red-600 bg-red-50 p-4 rounded-lg border border-red-100">
              This is a digital product. No refunds are allowed.
            </p>
            <p className="mb-6">
              Because the products we offer are digital and cannot be returned, your purchase is considered final and non-refundable. Once you have been granted access to the AI Viral Reels Bundle and the bonus ebooks, we cannot offer you a refund or exchange.
            </p>
            <p>
              If you experience any technical issues with accessing the files, please <a href="/contact" className="text-purple-600 hover:underline">contact our support team</a> via email or WhatsApp and we will immediately assist you in getting access to your purchase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
