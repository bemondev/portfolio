'use client'

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Welcome from "@/components/welcome"
import Menu from "@/components/circularmenu"
import AboutSection from "@/components/aboutme"
import Projects from "@/components/projects"
import Contact from "@/components/contact"

export default function HomeClient() {
  const [section, setSection] = useState("welcome")
  const [direction, setDirection] = useState("down")
  const [prevSection, setPrevSection] = useState<string | null>(null)

  const getDirectionTo = (from: string, to: string): string => {
    const directions: Record<string, Record<string, string>> = {
      menu: {
        about: "left",
        projects: "right",
        contact: "down",
        welcome: "up",
      },
      about: { menu: "right" },
      projects: { menu: "left" },
      contact: { menu: "up" },
      welcome: { menu: "down"},
    }
    return directions[from]?.[to] || "down"
  }

  const handleNav = (target: string) => {
    setDirection(getDirectionTo(section, target))
    setPrevSection(section)
    setSection(target)
  }

  const variants = {
    enter: (dir: string) => {
      if (dir === "left") return { x: 1000, opacity: 0 }
      if (dir === "right") return { x: -1000, opacity: 0 }
      if (dir === "up") return { y: 1000, opacity: 0 }
      return { y: -1000, opacity: 0 }
    },
    center: { x: 0, y: 0, opacity: 1 },
    exit: (dir: string) => {
      if (dir === "left") return { x: 1000, opacity: 0 }
      if (dir === "right") return { x: -1000, opacity: 0 }
      if (dir === "up") return { y: 1000, opacity: 0 }
      return { y: -1000, opacity: 0 }
    },
  }

  const renderSection = () => {
    switch (section) {
      case "welcome":
        return <Welcome onContinue={() => handleNav("menu")} />
      case "menu":
        return (
          <Menu
            currentSection={section}
            prevSection={prevSection}
            onSelect={handleNav}
          />
        )
      case "about":
        return <AboutSection onBack={() => handleNav("menu")} />
      case "projects":
        return <Projects onBack={() => handleNav("menu")} />
      case "contact":
        return <Contact onBack={() => handleNav("menu")} />
    }
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={section}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6 }}
          className="absolute w-full h-full"
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}