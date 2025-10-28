import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page load - hide after a short delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-300"
      style={{ opacity: isLoading ? 1 : 0 }}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Logo/Spinner */}
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
          </div>
          <div className="absolute inset-0 rounded-full border-4 border-red-600 border-t-transparent animate-spin" />
        </div>
        {/* Loading Text */}
        <p className="text-gray-600 font-medium">Loading SGS Locations...</p>
      </div>
    </div>
  );
}
