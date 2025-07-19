'use client'

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

type MenuProps = {
  currentSection: string
  prevSection: string | null
  onSelect: (target: string) => void
}

type NavItem = {
  label: string;
  x: number;
  y: number;
  target: string;
};

const desktopItems: NavItem[] = [
  { label: 'home', x: 0, y: -200, target: 'welcome' },
  { label: 'about', x: -240, y: 0, target: 'about' },
  { label: 'projects', x: 240, y: 0, target: 'projects' },
  { label: 'contact', x: 0, y: 200, target: 'contact' },
]

const mobileItems: NavItem[] = [
  { label: 'home', x: 0, y: -110, target: 'welcome' },
  { label: 'about', x: -125, y: 0, target: 'about' },
  { label: 'projects', x: 130, y: 0, target: 'projects' },
  { label: 'contact', x: 0, y: 110, target: 'contact' },
]

const getEntryPosition = (from: string | null) => {
  switch (from) {
    case 'welcome': return { y: 1000, opacity: 0 };
    case 'about': return { x: 1000, opacity: 0 };
    case 'projects': return { x: -1000, opacity: 0 };
    case 'contact': return { y: -1000, opacity: 0 };
    default: return { opacity: 0 };
  }
}

const getExitPosition = (to: string) => {
  switch (to) {
    case 'welcome': return { y: -1000, opacity: 0 };
    case 'about': return { x: -1000, opacity: 0 };
    case 'projects': return { x: 1000, opacity: 0 };
    case 'contact': return { y: 1000, opacity: 0 };
    default: return { opacity: 0 };
  }
}

export default function Menu({ currentSection, prevSection, onSelect }: MenuProps) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const iconX = useSpring(rawX, { stiffness: 30, damping: 10 });
  const iconY = useSpring(rawY, { stiffness: 30, damping: 10 });
  const smallCircleX = useTransform(iconX, value => value * 0.5);
  const smallCircleY = useTransform(iconY, value => value * 0.5);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navItems = isMobile ? mobileItems : desktopItems;
  const MAX_OFFSET = 40;

  const handleHover = (x: number, y: number) => {
    if (isMobile) return;
    const distance = Math.sqrt(x * x + y * y);
    const scale = Math.min(1, MAX_OFFSET / distance);
    rawX.set(x * scale);
    rawY.set(y * scale);
  };

  const resetHover = () => {
    if (isMobile) return;
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.section
      initial={getEntryPosition(prevSection)}
      animate={{ x: 0, y: 0, opacity: 1 }}
      exit={getExitPosition(currentSection)}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <div className={`relative ${isMobile ? 'w-[300px] h-[300px]' : 'w-[600px] h-[600px]'}`}>
        {/* Círculo grande */}
        <div
          aria-hidden="true"
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-3 border-card-foreground rounded-full ${isMobile ? 'w-38 h-38' : 'w-55 h-55'} flex items-center justify-center`}>
          {/* Centro animado */}
          <motion.div
            style={{ x: iconX, y: iconY }}
            aria-hidden="true"
            className={isMobile ? 'w-14 h-14 relative' : 'w-24 h-24 relative'}
          >
            {/* Rombo */}
            <div
              aria-hidden="true"
              className="absolute inset-0 border-3 border-card-foreground rotate-45" />
            {/* Círculo pequeño */}
            <motion.div
              aria-hidden="true"
              style={{ x: smallCircleX, y: smallCircleY }}
              className="absolute inset-4 border-3 border-card-foreground rounded-full"
            />
          </motion.div>
        </div>

        {/* Nav Items */}
        {navItems.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ opacity: 1, x: item.x, y: item.y }}
            transition={{ delay: 0.3 + i * 0.2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            onMouseEnter={() => handleHover(item.x, item.y)}
            onMouseLeave={resetHover}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`px-1 py-2 rounded-md  text-foreground ${isMobile ? 'text-xl' : 'text-2xl'} transition-colors duration-200 hover:bg-foreground/10 cursor-pointer`}
              onClick={() => onSelect(item.target)}
            >
              {item.label}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}