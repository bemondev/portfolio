'use client'

import { motion } from "framer-motion"

type Props = {
  onBack: () => void;
};

export default function Projects({ onBack }: Props) {
  return (
    <motion.section
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '100%', opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="min-h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <h1 className="text-5xl font-mono mb-6">Projects</h1>
      <p className="text-lg max-w-xl mb-8">
        Here you can showcase your best personal and professional projects. You could include images, descriptions, and tech used.
      </p>
      <button
        onClick={onBack}
        className="mt-4 px-6 py-2 text-lg font-mono border border-foreground rounded hover:bg-foreground hover:text-background transition"
      >
        Back to Menu
      </button>
    </motion.section>
  );
}