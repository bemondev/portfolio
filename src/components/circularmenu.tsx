'use client'

import { Button } from "@/components/ui/button"
import { motion, useMotionValue } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

const options = [
  { label: "Sobre mí", href: "#about", angle: 0 },
  { label: "Proyectos", href: "#projects", angle: 90 },
  { label: "Habilidades", href: "#skills", angle: 180 },
  { label: "Contacto", href: "#contact", angle: 270 },
]

export function CircularMenu() {
    const radius = 140
  const [hoverIdx, setHoverIdx] = useState<number | null>(null)
  const centerX = useMotionValue(0)
  const centerY = useMotionValue(0)

  const handleHover = (x: number, y: number, idx: number) => {
    centerX.set(x / 3) // solo se acerca, no llega completamente
    centerY.set(y / 3)
    setHoverIdx(idx)
  }

  const resetCenter = () => {
    centerX.set(0)
    centerY.set(0)
    setHoverIdx(null)
  }

  return (
    <div className="relative w-[320px] h-[320px] mx-auto">
      {/* Líneas cruzando (X) */}
      <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 320 320">
        <line x1="0" y1="0" x2="320" y2="320" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        <line x1="320" y1="0" x2="0" y2="320" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      </svg>

      {/* Botones en círculo */}
      {options.map(({ label, href, angle }, idx) => {
        const rad = (angle * Math.PI) / 180
        const x = radius * Math.cos(rad)
        const y = radius * Math.sin(rad)

        return (
          <Link key={idx} href={href}>
            <Button
              variant="outline"
              className="absolute rounded-full w-20 h-20 text-xs bg-background/60 backdrop-blur-md border border-foreground/30 hover:scale-110 transition-transform z-10"
              style={{
                left: `calc(50% + ${x}px - 40px)`,
                top: `calc(50% + ${y}px - 40px)`,
              }}
              onMouseEnter={() => handleHover(x, y, idx)}
              onMouseLeave={resetCenter}
            >
              {label}
            </Button>
          </Link>
        )
      })}

      {/* Círculo animado central */}
      <motion.div
        className="absolute left-1/2 top-1/2 z-20 w-16 h-16 bg-primary/60 rounded-full mix-blend-screen pointer-events-none"
        style={{
          x: centerX,
          y: centerY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{ type: 'spring', stiffness: 10, damping: 200, mass: 0.5 }}
      />
    </div>
  )
}