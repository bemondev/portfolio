'use client'

import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

type Props = {
  onBack: () => void;
}

export default function AboutSection({ onBack }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrolledDown, setScrolledDown] = useState(false)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const handleScroll = () => {
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 10
      setScrolledDown(atBottom)
    }

    el.addEventListener("scroll", handleScroll)
    return () => el.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScrollClick = () => {
    const el = scrollRef.current
    if (!el) return
    const target = scrolledDown ? 0 : el.scrollHeight
    el.scrollTo({ top: target, behavior: "smooth" })
  }

  return (
    <motion.section
      aria-labelledby="about-title"
      initial={{ x: -1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -1000, opacity: 0 }}
      transition={{ duration: 0.6, ease: "anticipate" }}
      className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-2 md:gap-8 px-4 py-16"
    >
      {/* Foto de perfil */}
      <motion.img
        src="/pfp-bm.png"
        alt="Portrait of Bernardo"
        loading="lazy"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-50 h-50 rounded-full object-cover border-foreground bg-chart-1 border-2"
      />

      {/* Contenedor del texto */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative max-w-xl text-foreground"
      >
        <h2 id="about-title" className="text-4xl font-normal mb-4 text-center md:text-left">About me</h2>
        <div
          ref={scrollRef}
          className="max-h-[150px] overflow-y-scroll scroll-smooth scrollbar-thin scrollbar-thumb-chart-1 scrollbar-track-background transition-opacity duration-300 pr-2"
        >
          <p className="text-lg max-w-xl mb-8 leading-relaxed sm:leading-loose text-balance text-left md:text-left">
            Hello! :) My name is Bernardo Montaña. I&rsquo;m an IT student based in Uruguay, currently pursuing a
            Bachelor&rsquo;s Degree in IT at UTEC. I&rsquo;ve explored development, testing, databases, design, and cloud computing.
          </p>
          <p className="mt-4 text-lg max-w-xl leading-relaxed sm:leading-loose text-balance text-left md:text-left">
            I have formal experience as a QA Tester and a deep interest in the intersection of technology, design, and
            user experience. I&rsquo;m passionate about learning, creating digital experiences, and — of course — I love cats
            and video games.
          </p>
        </div>
      </motion.div>
      <button
        onClick={handleScrollClick}
        className="bg-background border border-foreground rounded-full p-2 hover:bg-foreground hover:text-background transition mt-0 md:mt-14"
        aria-label={scrolledDown ? "Scroll to top" : "Scroll to bottom"}
      >
        {scrolledDown ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      <button
        onClick={onBack}
        className="fixed bottom-4 md:bottom-12 left-1/2 -translate-x-1/2 px-6 py-2 text-sm sm:text-lg border border-foreground rounded hover:bg-foreground hover:text-background transition z-50 backdrop-blur"
      >
        Go to Menu →
      </button>
    </motion.section>
  )
}
