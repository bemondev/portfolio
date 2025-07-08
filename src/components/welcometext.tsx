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
    <span className="transition-opacity duration-500">
      {phrases[index]}
    </span>
  )
}