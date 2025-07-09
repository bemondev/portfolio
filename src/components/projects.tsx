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
      <h1 className="text-5xl font-mono mb-6">Projects</h1>
      <p className="text-lg max-w-xl mb-8">
        Here you can showcase your best personal and professional projects. You could include images, descriptions, and tech used.
      </p>
      <button
        onClick={onBack}
        className="absolute bottom-30 px-6 py-2 text-lg font-mono border border-foreground rounded hover:bg-foreground hover:text-background transition"
      >
        Go to Menu ←
      </button>
    </motion.section>
  );
}