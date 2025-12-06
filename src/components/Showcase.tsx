import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const maskImgRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    // Funzione per gestire il resize
    const handleResize = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);

      // Forza il refresh di ScrollTrigger quando cambia la dimensione
      ScrollTrigger.refresh();
    };

    // Aggiungi listener per il resize
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current || !maskImgRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      if (isDesktop) {
        // DESKTOP: Animazione completa con scroll trigger
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom bottom',
            pin: true,
            scrub: 1,
            markers: false,
            pinSpacing: true, // Mantiene lo spazio per il contenuto
          }
        });

        // Anima la maschera con scale (da 80 a 1.1)
        tl.to(maskImgRef.current, {
          scale: 1.1,
          duration: 1,
        });

        // Anima il contenuto (opacity e y)
        tl.to(contentRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
        }, '-=0.5');
      } else {
        // MOBILE/TABLET: Stato finale senza animazione
        gsap.set(maskImgRef.current, { scale: 1.1 });
        gsap.set(contentRef.current, { opacity: 1, y: 0 });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, [isDesktop]);

  return (
    <section
      ref={sectionRef}
      id="showcase"
      className="relative min-h-screen"
    >
      {/* Media container con video e maschera */}
      <div className="media relative overflow-hidden block">
        {/* Video */}
        <video
          autoPlay
          muted
          playsInline
          loop
          className="w-full h-auto object-cover object-center block"
        >
          <source src="/videos/game.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Maschera SVG sopra il video */}
        <div className="mask absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <img
            ref={maskImgRef}
            src="/mask-logo.svg"
            alt="Mask"
            className="lg:h-full min-w-full min-h-full lg:min-w-0 lg:min-h-0 w-auto h-auto object-cover lg:object-contain"
            style={{ transform: 'matrix(80, 0, 0, 80, 0, 0)' }}
          />
        </div>
      </div>

      {/* Contenuto sotto */}
      <div
        ref={contentRef}
        className="content relative z-10 my-5 lg:-mt-40 bg-black font-semibold text-xl text-gray-300 lg:opacity-0 pb-20"
        style={{ opacity: 0, transform: 'translateY(50px)' }}
      >
        <div className="wrapper container mx-auto px-5 pb-20 flex flex-col justify-center gap-20">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-semibold text-3xl lg:text-7xl text-white mb-6">
              Rocket Chip
            </h2>

            <p className="text-xl lg:text-2xl text-white mb-8 leading-relaxed">
              Introducing M4, the next generation of Apple silicon. M4 powers unprecedented performance and efficiency,
              redefining what's possible in a notebook.
            </p>

            <div className="space-y-6 mb-12">
              <p className="text-lg lg:text-xl text-gray-300">
                Built with second-generation 3-nanometer technology, M4 delivers extraordinary performance
                while maintaining incredible power efficiency. The revolutionary neural engine enables
                groundbreaking AI capabilities right on your device.
              </p>

              <p className="text-lg lg:text-xl text-gray-300">
                Advanced GPU architecture provides stunning graphics performance for everything from
                creative workflows to immersive gaming experiences. Hardware-accelerated ray tracing
                brings cinematic rendering to life.
              </p>
            </div>

            {/* Statistiche */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <p className="text-5xl md:text-6xl font-bold text-blue-400 mb-3">4x</p>
                <p className="text-base md:text-lg text-white font-medium">Faster CPU performance</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <p className="text-5xl md:text-6xl font-bold text-purple-400 mb-3">15x</p>
                <p className="text-base md:text-lg text-white font-medium">Faster ML performance</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <p className="text-5xl md:text-6xl font-bold text-green-400 mb-3">2x</p>
                <p className="text-base md:text-lg text-white font-medium">Faster graphics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
