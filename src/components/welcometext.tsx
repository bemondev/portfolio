'use client'

import { useEffect, useState } from "react"

const phrases = [
  " Bernardo.",
  " a developer.",
  " a designer.",
  " a creator.",
  " a student.",
  " a tester.",
  " @bemondev.",
]

export default function RotatingText() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[1em] min-w-[450px] inline-block align-bottom text-chart-1">
      {phrases.map((phrase, i) => (
        <span
          key={i}
          className={`
            absolute left-0 top-0 transition-opacity duration-500 
            ${i === index ? "opacity-100" : "opacity-0"}
          `}
        >
          {phrase}
        </span>
      ))}
    </div>
  )
}