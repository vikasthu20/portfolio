import { useState } from 'react';

export default function AnimatedImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Replace these with your actual image URLs
  const images = [
    {
      id: 1,
      url: '/images/1.png',
      alt: 'Professional photo 1'
    },
    {
      id: 2,
      url: '/images/2.png',
      alt: 'Professional photo 2'
    },
    {
      id: 3,
      url: '/images/3.png',
      alt: 'Professional photo 3'
    },
    {
      id: 4,
      url: '/images/4.png',
      alt: 'Professional photo 4'
    },
    {
      id: 5,
      url: '/images/5.png',
      alt: 'Professional photo 5'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-blue-200 dark:text-blue-300">Beyond the Screen</h2>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="group relative rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:z-10"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
              }}
              onClick={() => setSelectedImage(image)}
            >
              {/* Image Container */}
              <div className="relative aspect-square bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 p-2"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white font-semibold text-lg">View Full Size</p>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/20 transform translate-x-10 -translate-y-10 rotate-45 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Full Size Image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full animate-scale-in">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-blue-400 transition-colors duration-300"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}