'use client'

import { motion } from "framer-motion"

type Props = {
  onBack: () => void;
};

export default function Contact({ onBack }: Props) {
  return (
    <motion.section
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '100%', opacity: 0 }}
      transition={{ duration: 0.6}}
      className="min-h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <h1 className="text-5xl font-mono mb-6">Contact</h1>
      <p className="text-lg max-w-xl mb-8">
        Let people know how to reach you: via email, social media, or a contact form.
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