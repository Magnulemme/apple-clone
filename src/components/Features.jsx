import React, { useEffect, useRef, Suspense, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { featureSequence, features } from '../constants'
import { useProductStore } from '../store/productStore'
import MacbookFeatures from './models/MacbookFeatures'
import StudioLights from './StudioLights'
import { VideoTexture, SRGBColorSpace } from 'three'

gsap.registerPlugin(ScrollTrigger)

// Componente che gestisce il modello con rotazione
const RotatingModel = ({ scrollProgress }) => {
  const groupRef = useRef(null)
  const { scale } = useProductStore()

  // Aggiorna rotazione ogni frame basandosi su scrollProgress
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = scrollProgress * Math.PI * 2
    }
  })

  return (
    <group ref={groupRef} scale={scale} position={[0, -0.5, 0]} rotation={[0.3, 0, 0]}>
      <MacbookFeatures />
    </group>
  )
}

const Features = () => {
  const canvasRef = useRef(null)
  const videoRefs = useRef([])
  const sectionRef = useRef(null)
  const textRefs = useRef([])
  const currentVideoIndex = useRef(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  const { setTexture, setScale } = useProductStore()
  const [isDesktop, setIsDesktop] = useState(false)

  // Monitora il resize per aggiornare isDesktop
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Precarica i video e setup texture
  useEffect(() => {
    featureSequence.forEach((feature, index) => {
      const videoElement = document.createElement('video')

      Object.assign(videoElement, {
        src: feature.videoPath,
        muted: true,
        playsInline: true,
        preload: 'auto',
        crossOrigin: 'anonymous',
        loop: true,
      })

      videoRefs.current[index] = videoElement
    })

    // Imposta la texture del primo video e inizia a riprodurlo
    if (videoRefs.current[0]) {
      videoRefs.current[0].play()
      const texture = new VideoTexture(videoRefs.current[0])
      texture.colorSpace = SRGBColorSpace
      texture.needsUpdate = true
      setTexture(texture)
    }
  }, [setTexture])

  // Gestisci la scala in base al device
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 768) {
        setScale(0.04) // mobile
      } else if (width < 1024) {
        setScale(0.045) // tablet
      } else {
        setScale(0.05) // desktop
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [setScale])

  // Setup ScrollTrigger - aggiorna scrollProgress e video
  useEffect(() => {
    if (!canvasRef.current) return

    let ctx
    let refreshTimeout

    // Aspetta che il Canvas sia montato
    const timeout = setTimeout(() => {
      ctx = gsap.context(() => {
        // Imposta la posizione iniziale di tutti i testi
        gsap.set(textRefs.current, { opacity: 0 })

        // TIMELINE UNIFICATA - gestisce sia rotazione che testi
        const isDesktopView = window.innerWidth >= 768

        const mainTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: canvasRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
            pin: true,
            id: 'features-pin',
            onUpdate: (self) => {
              // Aggiorna la rotazione del modello
              setScrollProgress(self.progress)
            }
          }
        })

        // Aggiungi animazioni testi e cambio video alla timeline principale
        features.forEach((feature, index) => {
          mainTimeline
            .call(() => {
              // Cambia video
              if (videoRefs.current[index]) {
                const video = videoRefs.current[index]
                video.currentTime = 0
                video.play()
                const texture = new VideoTexture(video)
                texture.colorSpace = SRGBColorSpace
                texture.needsUpdate = true
                setTexture(texture)
              }
            })
            .to(textRefs.current[index], {
              opacity: 1,
            })
            .to(textRefs.current[index], {
              opacity: 0,
              y: isDesktopView ? -50 : 0, // Sposta in alto solo su desktop
              ease: 'power2.in'
            })
        })

        // Refresh dopo la creazione
        refreshTimeout = setTimeout(() => ScrollTrigger.refresh(), 100)
      })
    }, 100)

    return () => {
      clearTimeout(timeout)
      clearTimeout(refreshTimeout)
      ctx?.revert()
    }
  }, [setTexture])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen"
    >
      <div
        ref={canvasRef}
        className="h-screen w-full"
      >
        <Canvas className="w-full h-full">
          <StudioLights />

          <PerspectiveCamera makeDefault position={[0, 0, 5]} />

          <Suspense fallback={null}>
            <RotatingModel scrollProgress={scrollProgress} />
          </Suspense>

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
        </Canvas>

        {/* Contenuto testuale con animazioni */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          {features.map((feature, index) => {
            // Alterna posizione sinistra/destra solo su desktop
            const isLeft = index % 2 === 0
            // Posizione verticale: fissa in alto su mobile, graduale su desktop
            const topPercentage = 20 + (index * 12) // 20%, 32%, 44%, 56%, 68% (solo desktop)

            // Emoji diverse per ogni feature
            const emojis = ['🚀', '⚡', '💎', '🎯', '🔥']
            const emoji = emojis[index % emojis.length]

            return (
              <div
                key={feature.id}
                ref={(el) => (textRefs.current[index] = el)}
                className={`absolute w-full max-w-lg px-6 md:px-8
                  left-1/2 -translate-x-1/2 md:translate-x-0
                  ${isLeft ? 'md:left-16 lg:left-20' : 'md:left-auto md:right-16 lg:right-20'}
                `}
                style={{
                  // Su mobile: tutti al 20%, su desktop: posizioni graduate
                  top: isDesktop ? `${topPercentage}%` : '20%'
                }}
              >
                <div className="space-y-3 text-center md:text-left p-6 md:p-0">
                  <h3 className="text-white text-2xl md:text-3xl font-bold">
                    {emoji} {feature.highlight}
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-md">
                    {feature.text}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
