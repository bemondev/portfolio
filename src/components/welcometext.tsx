'use client'

import { useEffect, useState } from "react"

const phrases = [
  " Bernardo.",
  " a designer.",
  " a developer.",
  " a student.",
  " a tester.",
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
    <div className="relative h-[1em] min-w-[450px] inline-block align-bottom">
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