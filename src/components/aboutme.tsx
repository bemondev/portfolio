import { motion } from "framer-motion";
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
      className="min-h-screen flex flex-col md:flex-row justify-center items-center text-center gap-8 px-4 py-10"
    >
      <motion.img
        src="/pfp.webp"
        alt="Foto de Bernardo"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-40 h-40 rounded-full shadow-lg object-cover border-foreground border-4"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-xl text-foreground"
      >
        <h2 className="text-4xl font-bold mb-4">About me</h2>
        <p className="text-lg leading-relaxed text-balance">
          Hi! :) My name is Bernardo Montaña. I&rsquo;m an IT student based in Uruguay, currently pursuing a Bachelor&rsquo;s Degree
          in IT at UTEC. I&rsquo;ve dabbled in development, testing, databases, design and cloud. I have formal
          experience as a QA Tester. I love cats, video games, design and technology.
        </p>
      </motion.div>

      <button
        onClick={onBack}
        className="absolute bottom-30 px-6 py-2 text-lg font-mono border border-foreground rounded hover:bg-foreground hover:text-background transition"
      >
        Go to Menu →
      </button>
    </motion.section>
  );
}