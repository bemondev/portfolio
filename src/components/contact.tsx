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
      className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-10 text-center"
    >
      {/* Contenedor de títulos */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold">Contact form</h2>
        <h2 className="text-2xl sm:text-3xl font-bold">Let&rsquo;s connect!</h2>
      </div>

      {/* Contenedor de contenido */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        
        {/* Contact Form */}
        <motion.div className="flex flex-col items-center justify-center px-2 sm:px-4">
          <ContactForm />
        </motion.div>

        {/* Socials */}
        <motion.div className="flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-foreground/30 pt-8 md:pt-0 pl-0 md:pl-12 px-2 sm:px-4">
          {/* Contenedor de botones sociales */}
          <div className="flex flex-col items-center gap-4 w-full max-w-xs">
            <LinkedInBadge />
            <GitHubBadge />
          </div>
        </motion.div>
      </div>

      {/* Botón volver */}
      <button
        onClick={onBack}
        className="absolute bottom-6 sm:bottom-10 md:bottom-24 px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-lg font-mono border border-foreground rounded hover:bg-foreground hover:text-background transition"
      >
        Go to Menu ↑
      </button>
    </motion.section>
  )
}