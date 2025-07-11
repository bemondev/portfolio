'use client'

import { motion } from "framer-motion"
import ContactForm from "./contactform"
import LinkedInBadge from "./linkedinbadge"
import GitHubBadge from "./githubbadge"

type Props = {
  onBack: () => void;
};

export default function Contact({ onBack }: Props) {
  return (
    <motion.section
      initial={{ y: 1000, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 1000, opacity: 0 }}
      transition={{ duration: 0.6, ease: 'anticipate' }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 text-center font-mono"
    >
      {/* Título único */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-10">Contact</h2>

      {/* Contenido principal */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-stretch">

        {/* Formulario */}
        <motion.div className="md:col-span-1 flex justify-center px-2 sm:px-4">
          <ContactForm />
        </motion.div>

        {/* OR divisoria con línea vertical igual altura */}
        <div className="hidden md:flex flex-col items-center justify-center">
          <div className="w-px bg-foreground/30 h-full"></div>
          <span className="absolute top-1/2 -translate-y-1/2 text-foreground/60 font-semibold tracking-wider select-none px-2 bg-background">
            OR
          </span>
        </div>

        {/* Redes sociales sin border left */}
        <motion.div className="md:col-span-1 flex flex-col sm:flex-row md:flex-col items-center justify-center gap-6 w-full max-w-xs mx-auto md:mx-0 px-2 sm:px-4 pt-8 md:pt-0 md:pl-0 border-t md:border-t-0 border-foreground/20">
          <LinkedInBadge />
          <GitHubBadge />
        </motion.div>
      </div>

      {/* Botón volver */}
      <button
        onClick={onBack}
        className="mt-16 px-6 py-2 text-sm sm:text-lg border border-foreground rounded hover:bg-foreground hover:text-background transition"
      >
        Go to Menu ↑
      </button>
    </motion.section>
  )
}