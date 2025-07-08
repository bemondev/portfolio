'use client'

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import Link from "next/link"

type NavItem = {
  label: string;
  x: number;
  y: number;
  href: string;
};

const navItems: NavItem[] = [
  { label: 'home', x: 0, y: -200, href: '#welcome' },
  { label: 'about me', x: -240, y: 0, href: '/about' },
  { label: 'projects', x: 240, y: 0, href: '/projects' },
  { label: 'contact', x: 0, y: 200, href: '/contact' },
];

export default function Menu() {
  // Motion values para el movimiento del rombo y círculo pequeño
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  // Motion values para el rombo
  const iconX = useSpring(rawX, { stiffness: 30, damping: 10 });
  const iconY = useSpring(rawY, { stiffness: 30, damping: 10 });
  // Transformaciones para el círculo pequeño
  const smallCircleX = useTransform(iconX, value => value * 0.5);
  const smallCircleY = useTransform(iconY, value => value * 0.5);

  const MAX_OFFSET = 40; // máximo movimiento dentro del círculo grande

  const handleHover = (x: number, y: number) => {
    const distance = Math.sqrt(x * x + y * y);
    const scale = Math.min(1, MAX_OFFSET / distance);
    iconX.set(x * scale);
    iconY.set(y * scale);
  };

  const resetHover = () => {
    iconX.set(0);
    iconY.set(0);
  };

  return (
    <div className="relative w-[600px] h-[600px]">
      {/* Círculo grande (fijo) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-3 border-card-foreground rounded-full w-55 h-55 flex items-center justify-center">
        {/* Elementos móviles dentro del círculo */}
        <motion.div
          style={{ x: iconX, y: iconY }}
          className="relative w-24 h-24"
        >
          {/* Rombo que se mueve */}
          <div className="absolute inset-0 border-3 border-card-foreground rotate-45" />
          
          {/* Círculo pequeño que se mueve dentro de rombo */}
          <motion.div
            style={{ x: smallCircleX, y: smallCircleY }}
            className="absolute inset-4 border-3 border-card-foreground rounded-full "
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
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="px-4 py-2 rounded-md font-mono text-foreground text-2xl transition-colors duration-200 hover:bg-foreground/10 cursor-pointer"
          >
            <Link href={item.href}>
              {item.label}
            </Link>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
