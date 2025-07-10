'use client'

import { motion } from "framer-motion"
import ContactForm from "./contactform";

type Props = {
  onBack: () => void;
};

export default function Contact({ onBack }: Props) {
  return (
    <motion.section
      initial={{ y: 1000, opacity: 0 }}   // entra desde abajo
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 1000, opacity: 0 }}       // sale hacia abajo
      transition={{ duration: 0.6, ease: 'anticipate' }}
      className="min-h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <h2 className="text-4xl font-bold mb-4">Contact</h2>
      <ContactForm></ContactForm>
      <button
        onClick={onBack}
        className="absolute bottom-30 px-6 py-2 text-lg font-mono border border-foreground rounded hover:bg-foreground hover:text-background transition"
      >
        Go to Menu ↑
      </button>
    </motion.section>
  );
}