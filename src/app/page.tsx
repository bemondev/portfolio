'use client'

import Menu from "@/components/circularmenu";
import RotatingText from "@/components/welcometext";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      
      {/* Sección 1: Bienvenida */}
      <section className="h-screen flex flex-col items-center justify-center snap-start" id="welcome">
        <motion.h1
          className="text-5xl md:text-7xl font-mono text-foreground font-bold pb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        > Hi! =]
        </motion.h1>
        <motion.h1
          className="text-5xl md:text-7xl font-mono text-foreground font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          I'm
          {/* Texto que cambia (puede usar Typewriter o frases rotativas) */}
          <motion.span
          className="text-5xl md:text-7xl font-mono text-chart-1 font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <RotatingText />
        </motion.span>
        </motion.h1>
        {/* Botón para bajar */}
        <a href="#menu" className="mt-12 text-m text-foreground transition-colors duration-200 hover:bg-foreground/10 cursor-pointer rounded-md px-4 py-2">
          ↓ Scroll to menu
        </a>
      </section>

      {/* Sección 2: Menú */}
      <section
        id="menu"
        className="h-screen flex items-center justify-center snap-start"
      >
        <Menu />
      </section>
    </main>
  )
}
