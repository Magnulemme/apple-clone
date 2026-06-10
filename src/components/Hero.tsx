import { useEffect, useRef } from 'react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Modifica il playback rate al mount
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <section className="relative w-full bg-black text-white overflow-hidden">
      <div className="max-w-[1024px] mx-auto px-5 py-20">
        {/* Titolo */}
        <div className="text-center mb-8 mt-16">
          <h1 className="text-5xl md:text-7xl font-semibold mb-6">
            Macbook Pro
          </h1>
          <img
            src="/title.png"
            alt="Macbook Pro Title"
            className="mx-auto max-w-full h-auto"
          />
        </div>

        {/* Video */}
        <div className="my-12 rounded-2xl overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-auto"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* CTA e Prezzo */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 transition-colors px-8 py-3 rounded-full text-lg font-medium mb-6">
            Buy
          </button>

          <div className="text-lg md:text-xl">
            <p className="mb-2">
              From <span className="font-semibold">$1,999</span> or <span className="font-semibold">$166.58/mo.</span> for 12 months
            </p>
            <p className="text-sm text-gray-400">
              One-time payment or monthly installments
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
