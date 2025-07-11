'use client'

import { motion } from "framer-motion"

type Props = {
  onBack: () => void;
};

export default function Projects({ onBack }: Props) {
  return (
    <motion.section
      initial={{ x: 1000, opacity: 0 }}   // entra desde la derecha
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 1000, opacity: 0 }}       // sale hacia la derecha
      transition={{ duration: 0.6, ease: 'anticipate' }}
      className="min-h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <h2 className="text-4xl font-bold mb-4">Projects</h2>
      <p className="text-lg max-w-xl mb-8">
        Here you can showcase your best personal and professional projects. You could include images, descriptions, and tech used. (WIP)
      </p>
      <button
        onClick={onBack}
        className="mt-16 px-6 py-2 text-sm sm:text-lg border border-foreground rounded hover:bg-foreground hover:text-background transition"
      >
        Go to Menu ←
      </button>
    </motion.section>
  );
}