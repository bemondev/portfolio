import { motion } from "framer-motion"

type Props = {
  onBack: () => void;
}

export default function AboutSection({ onBack }: Props) {
  return (
    <motion.section
      initial={{ x: -1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -1000, opacity: 0 }}
      transition={{ duration: 0.6, ease: "anticipate" }}
      className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-8 px-4 py-10 text-center md:text-left"
    >
      <motion.img
        src="/pfp.webp"
        alt="Foto de Bernardo"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-40 h-40 rounded-full object-cover border-foreground border-4"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-xl text-foreground"
      >
        <h2 className="text-4xl font-bold mb-4">About me</h2>
        <p className="text-base sm:text-lg leading-relaxed sm:leading-loose text-balance">
          Hello! :) My name is Bernardo Montaña. I&rsquo;m an IT student based in Uruguay, currently pursuing a
          Bachelor&rsquo;s Degree in IT at UTEC. I&rsquo;ve explored development, testing, databases, design, and cloud computing.
        </p>
        <p className="mt-4 text-base sm:text-lg leading-relaxed sm:leading-loose text-balance">
          I have formal experience as a QA Tester and a deep interest in the intersection of technology, design, and
          user experience. I&rsquo;m passionate about learning, creating digital experiences, and — of course — I love cats
          and video games.
        </p>
      </motion.div>

      <button
        onClick={onBack}
        className="absolute bottom-6 sm:bottom-10 md:bottom-24 px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-lg font-mono border border-foreground rounded hover:bg-foreground hover:text-background transition"
      >
        Go to Menu →
      </button>
    </motion.section>
  )
}