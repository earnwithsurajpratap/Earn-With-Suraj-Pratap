export const metadata = {
  title: 'Disclaimer | WebifyBoost',
};

export default function DisclaimerPage() {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold display-font text-gray-900 mb-8">Disclaimer</h1>
          
          <div className="prose prose-lg prose-purple text-gray-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Guaranteed Earnings</h2>
            <p className="mb-6">
              The AI Viral Reels Bundle and strategies provided by WebifyBoost, including all tips from Suraj Pratap, are meant for educational and content creation purposes. 
            </p>
            <p className="mb-6 font-semibold text-gray-800 bg-gray-50 p-4 rounded-lg border border-gray-200">
              There are no guaranteed earnings. All results depend entirely on user effort, consistency, understanding of social media algorithms, and market conditions.
            </p>
            <p>
              Any examples of past results or specific channel growth do not guarantee future success for your own accounts. You are solely responsible for how you utilize the content provided.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
