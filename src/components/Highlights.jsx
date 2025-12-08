import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    // Staggered animation for cards entrance
    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section className="w-full min-h-screen bg-black text-white py-20 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-semibold mb-4">
            There has never been a better time to upgrade
          </h2>
          <h3 className="text-xl md:text-2xl text-gray-400">
            Here's what you get with the new MacBook Pro
          </h3>
        </div>

        {/* Bento Grid - 2 columns x 3 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-4 md:gap-6">
          {/* LEFT SIDE */}
          {/* Card 1: Performance - 2 rows x 1 col (left, top+middle) */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="highlight-card md:row-span-2 flex flex-col justify-end items-start"
          >
            <img
              src="/laptop.png"
              alt="Laptop"
              className="w-auto h-20 md:h-24 mb-4"
            />
            <p className="text-2xl md:text-3xl font-semibold leading-tight">
              Fly through demanding tasks<br />up to 9.8x faster
            </p>
          </div>

          {/* RIGHT SIDE */}
          {/* Card 2: Battery - 2 rows x 1 col (right, top+middle) */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="bg-zinc-900 rounded-3xl p-8 md:p-10 md:row-span-2 flex flex-col justify-center items-center text-center min-h-[250px] md:min-h-0"
          >
            <img
              src="/battery.png"
              alt="Battery"
              className="w-auto h-16 md:h-20 mb-6"
            />
            <p className="text-2xl md:text-3xl font-semibold leading-tight">
              Up to{' '}
              <span className="text-green-400">14 more hours</span>{' '}
              battery life
            </p>
            <p className="text-lg md:text-xl text-gray-500 mt-2">
              (Up to 24 hours total)
            </p>
          </div>

          {/* Card 3: Display - 1 row x 1 col (left, bottom) */}
          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="bg-zinc-900 rounded-3xl p-8 md:p-10 flex flex-col justify-center items-start min-h-[250px] md:min-h-0"
          >
            <img
              src="/sun.png"
              alt="Display"
              className="w-auto h-16 md:h-20 mb-4"
            />
            <p className="text-xl md:text-2xl font-semibold leading-tight">
              A stunning Liquid Retina XDR display
            </p>
          </div>

          {/* Card 4: Apple Intelligence - 1 row x 1 col (right, bottom) */}
          <div
            ref={(el) => (cardsRef.current[3] = el)}
            className="bg-zinc-900 rounded-3xl p-8 md:p-10 flex flex-col justify-center items-start min-h-[250px] md:min-h-0 relative"
            style={{
              background: 'linear-gradient(#18181b, #18181b) padding-box, linear-gradient(to right, #a855f7, #ec4899, #3b82f6) border-box',
              border: '2px solid transparent'
            }}
          >
            <img
              src="/ai.png"
              alt="AI"
              className="w-auto h-10 md:h-14 mb-4"
            />
            <p className="text-xl md:text-2xl font-semibold leading-tight">
              Built for{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Apple Intelligence
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
