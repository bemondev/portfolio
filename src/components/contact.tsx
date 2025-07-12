'use client'

import { motion } from "framer-motion"
import LinkedInBadge from "./linkedinbadge"
import GitHubBadge from "./githubbadge"
import EmailBadge from "./emailbadge"

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
      className="min-h-screen flex flex-col justify-center items-center px-4 pt-12 pb-32 text-center font-mono relative"
    >
      {/* Contenido centrado */}
      <div className="flex flex-col items-center justify-center flex-grow w-full gap-10">
        <h2 className="text-3xl sm:text-4xl font-normal">Contact</h2>

        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center text-left">
          {/* Mensaje */}
          <motion.div className="px-6 self-center">
            <p className="text-lg sm:text-xl text-balance">
              If you want to get in touch, feel free to reach out via email or through my social media profiles.
            </p>
          </motion.div>

          {/* Redes sociales */}
          <motion.div className="flex gap-8 flex-wrap items-center justify-center self-center">
            <LinkedInBadge />
            <GitHubBadge />
            <EmailBadge />
          </motion.div>
        </div>
      </div>

      <button
        onClick={onBack}
        className="fixed bottom-12 left-1/2 -translate-x-1/2 px-6 py-2 text-sm sm:text-lg border border-foreground rounded hover:bg-foreground hover:text-background transition z-50 backdrop-blur"
      >
        Go to Menu ↑
      </button>
    </motion.section>
  )
}
