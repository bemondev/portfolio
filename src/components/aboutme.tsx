import { motion } from "framer-motion"

type Props = {
  onBack: () => void;
}

export default function AboutSection({ onBack }: Props) {
  return (
    <motion.section
      aria-labelledby="about-title"
      initial={{ x: -1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -1000, opacity: 0 }}
      transition={{ duration: 0.6, ease: "anticipate" }}
      className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-8 px-4 py-16"
    >
      {/* Foto de perfil */}
      <motion.img
        src="/pfp.webp"
        alt="Portrait of Bernardo"
        loading="lazy"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-40 h-40 rounded-full object-cover border-foreground border-2"
      />

      {/* Texto principal con scroll interno */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-xl text-foreground"
      >
        <h2 id="about-title" className="text-4xl font-normal mb-4 text-center md:text-left">About me</h2>

        <div className="max-h-[150px] overflow-y-scroll pr-2 custom-scrollbar">
          <p className="text-base sm:text-lg leading-relaxed sm:leading-loose text-balance text-left md:text-left">
            Hello! :) My name is Bernardo Montaña. I&rsquo;m an IT student based in Uruguay, currently pursuing a
            Bachelor&rsquo;s Degree in IT at UTEC. I&rsquo;ve explored development, testing, databases, design, and cloud computing.
          </p>

          <p className="mt-4 text-base sm:text-lg leading-relaxed sm:leading-loose text-balance text-left md:text-left">
            I have formal experience as a QA Tester and a deep interest in the intersection of technology, design, and
            user experience. I&rsquo;m passionate about learning, creating digital experiences, and — of course — I love cats
            and video games.
          </p>
        </div>
      </motion.div>

      {/* Botón de regreso */}
      <button
        onClick={onBack}
        className="fixed bottom-12 left-1/2 -translate-x-1/2 px-6 py-2 text-sm sm:text-lg border border-foreground rounded hover:bg-foreground hover:text-background transition z-50 backdrop-blur"
      >
        Go to Menu →
      </button>
    </motion.section>
  )
}
