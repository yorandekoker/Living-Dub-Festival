import Button from '../components/Button';

export default function NotFound() {
  return (
    <div className="bg-[#FFF9E6] min-h-[70vh] flex items-center justify-center py-16">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="bg-white rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-12 transform -rotate-1">
          {/* 404 */}
          <div className="font-['Luckiest_Guy'] text-8xl md:text-9xl text-[#E6392F] mb-4">
            404
          </div>

          {/* Message */}
          <h1 className="font-['Bangers'] text-4xl text-gray-800 mb-4">
            Page Not Found
          </h1>
          
          <p className="font-['Poppins'] text-lg text-gray-700 mb-8">
            Looks like you've wandered off the beaten path. This page doesn't exist, 
            but the festival vibes are still alive!
          </p>

          {/* Decorative Elements */}
          <div className="flex justify-center gap-4 mb-8 text-4xl">
            <span className="transform rotate-12">🎵</span>
            <span className="transform -rotate-12">🔊</span>
            <span className="transform rotate-6">🌿</span>
          </div>

          {/* Back Home Button */}
          <Button to="/" variant="primary">
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}