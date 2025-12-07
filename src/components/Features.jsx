import React, { useEffect, useRef, Suspense, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { featureSequence } from '../constants'
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
  const currentVideoIndex = useRef(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  const { setTexture, setScale } = useProductStore()

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

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: canvasRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          const progress = self.progress

          // Aggiorna stato scroll progress per la rotazione
          setScrollProgress(progress)

          // Calcola quale video mostrare
          const newIndex = Math.min(
            Math.floor(progress * featureSequence.length),
            featureSequence.length - 1
          )

          // Cambia video solo se l'indice è cambiato
          if (newIndex !== currentVideoIndex.current && videoRefs.current[newIndex]) {
            currentVideoIndex.current = newIndex
            const video = videoRefs.current[newIndex]
            video.currentTime = 0
            video.play()
            const texture = new VideoTexture(video)
            texture.colorSpace = SRGBColorSpace
            texture.needsUpdate = true
            setTexture(texture)
          }
        },
      })
    }, canvasRef)

    return () => ctx.revert()
  }, [setTexture, setScrollProgress])

  return (
    <section
      ref={sectionRef}
      className="relative bg-red-900/20 border-4 border-red-500"
    >
      {/* Canvas fisso con il modello 3D */}
      <div
        ref={canvasRef}
        className="h-screen w-full bg-blue-900/20 border-4 border-blue-500"
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

        {/* Contenuto testuale - temporaneamente nascosto per testare */}
        {/* <div className="absolute inset-0 pointer-events-none">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              ref={(el) => (contentRefs.current[index] = el)}
              className={`absolute ${feature.styles.replace('opacity-0 translate-y-5', '')}`}
            >
              <div className="flex items-start gap-4 max-w-md bg-black/60 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                <img
                  src={feature.icon}
                  alt={feature.highlight}
                  className="w-12 h-12 shrink-0"
                />
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {feature.highlight}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}

export default Features
