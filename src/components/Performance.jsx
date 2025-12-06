import React, { useEffect, useRef } from 'react'
import { performanceImages, performanceImgPositions } from '../constants'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Performance = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  const centralCardRef = useRef(null)
  const descriptionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: centralCardRef.current,
          start: 'top bottom',
          end: 'top center',
          scrub: 1,
        },
      })

      cardsRef.current.forEach((card, index) => {
        if (!card) return

        // Ottieni la posizione finale della card
        const finalPos = getCardPosition(performanceImages[index].id)

        // Calcola offset in vw/vh rispetto alla viewport (partendo da center: 50vw, 50vh)
        let finalX = 0
        let finalY = 0

        // Calcola offset X finale in vw
        // Su desktop riduciamo il movimento orizzontale
        const width = typeof window !== 'undefined' ? window.innerWidth : 1024
        const horizontalMultiplier = width >= 1024 ? 0.7 : 1 // Su desktop riduciamo del 30%

        if (finalPos.left) {
          // Card a sinistra: left 5% significa spostare a 5vw dalla sinistra
          // Partendo dal centro (50vw), dobbiamo andare a -45vw
          const leftValue = parseFloat(finalPos.left.replace('%', ''))
          finalX = (leftValue - 50) * horizontalMultiplier
        } else if (finalPos.right) {
          // Card a destra: dobbiamo considerare che la card ha una larghezza
          // Riduciamo il movimento per tenere le card dentro lo schermo
          const rightValue = parseFloat(finalPos.right.replace('%', ''))
          finalX = ((100 - rightValue) - 50 - 18) * horizontalMultiplier
        }

        // Calcola offset Y finale in vh
        if (finalPos.bottom) {
          // Card in basso: bottom 65% significa top al 35%, quindi 35vh dall'alto
          // Partendo dal centro (50vh), dobbiamo andare a -15vh
          const bottomValue = parseFloat(finalPos.bottom.replace('%', ''))
          finalY = (100 - bottomValue) - 50
        } else if (finalPos.top) {
          // Card in alto: top 20% significa 20vh dall'alto
          // Partendo dal centro (50vh), dobbiamo andare a -30vh
          const topValue = parseFloat(finalPos.top.replace('%', ''))
          finalY = topValue - 50
        }

        // Rotazioni fisse diverse per ogni card
        const rotations = [8, -6, 10, -8, 7, -9, 6]

        // Posizione iniziale: a 30% del percorso per far percorrere più distanza
        const startX = `${finalX * 0.3}vw`
        const startY = `${finalY * 0.3}vh`
        const endX = `${finalX}vw`
        const endY = `${finalY}vh`

        // Imposta posizione iniziale: già orientata verso destinazione
        gsap.set(card, {
          x: startX,
          y: startY,
          scale: 0.7,
          rotation: rotations[index],
        })

        // Anima verso la posizione finale
        tl.to(
          card,
          {
            x: endX,
            y: endY,
            scale: 1,
            rotation: 0,
            ease: 'power2.inOut',
            duration: 1,
          },
          index * 0.08
        )
      })

      // Trova la card più in basso (p2 ha bottom: 55)
      const lowestCard = cardsRef.current[1] // p2 è all'indice 1
      if (lowestCard && descriptionRef.current) {
        // Posiziona la descrizione sotto la card più in basso
        tl.to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            ease: 'power2.inOut',
            duration: 1,
          },
          0
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const getCardPosition = (id) => {
    const position = performanceImgPositions.find((pos) => pos.id === id)
    if (!position) return {}

    // Determina il breakpoint corrente
    const width = typeof window !== 'undefined' ? window.innerWidth : 1024
    let posData

    if (width < 768) {
      posData = position.mobile || position.desktop
    } else if (width < 1024) {
      posData = position.tablet || position.desktop
    } else {
      posData = position.desktop
    }

    const styles = {}
    if (posData.left !== undefined) styles.left = `${posData.left}%`
    if (posData.right !== undefined) styles.right = `${posData.right}%`
    if (posData.bottom !== undefined) styles.bottom = `${posData.bottom}%`
    if (posData.top !== undefined) styles.top = `${posData.top}%`

    return styles
  }

  const getCardDescription = (id) => {
    const descriptions = {
      p1: 'Potenza straordinaria per il multitasking',
      p2: 'Prestazioni grafiche di livello professionale',
      p3: 'Efficienza energetica senza compromessi',
      p4: 'Velocità fulminea in ogni operazione',
      p5: 'Rendering 3D in tempo reale',
      p6: 'Machine learning avanzato integrato',
      p7: 'Performance che ridefiniscono gli standard',
    }
    return descriptions[id] || ''
  }

  return (
    <section
      ref={sectionRef}
      className="relative h-fit bg-black overflow-hidden -mt-20"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="relative w-full h-full">
          {performanceImages.map((image, index) => {
            // Salta l'immagine centrale (indice 3) che viene renderizzata separatamente
            if (index === 3) return null

            return (
              <div
                key={image.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className="absolute top-1/2 left-1/2 w-64 md:w-80 lg:w-96"
              >
                <img
                  src={image.src}
                  alt={`Performance ${index + 1}`}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            )
          })}

          {/* Immagine fissa al centro */}
          <div
            ref={centralCardRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 md:w-96 lg:w-[28rem] z-10"
          >
            <img
              src={performanceImages[3].src}
              alt="Central performance"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
        <div
          ref={descriptionRef}
          className="absolute left-0 right-0 text-center z-20 px-4 opacity-0"
          style={{ bottom: '8%' }}
        >
          <p className="text-white text-lg md:text-xl lg:text-2xl font-semibold max-w-4xl mx-auto">
            Potenza rivoluzionaria. Efficienza senza precedenti. Performance che ridefiniscono ogni limite.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Performance
