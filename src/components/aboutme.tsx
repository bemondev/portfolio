import { motion } from "framer-motion";
type Props = {
  onBack: () => void;
}

export default function AboutSection({ onBack }: Props) {
  return (
    <motion.section
      initial={{ x: -1000, opacity: 0 }}   // entra desde abajo
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -1000, opacity: 0 }}       // sale hacia abajo
      transition={{ duration: 0.6, ease: 'anticipate' }}
      className="min-h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 0}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl text-center"
      >
        <h2 className="text-4xl font-bold mb-4">About me</h2>
        <p className="text-lg text-foreground">
        Hi! :) my name is Bernardo Montaña. I&rsquo;m an IT 
        student based in Uruguay, currently pursuing a Bachelor's Degree
        in IT at UTEC. I&rsquo;ve dabbled in development, testing,
        databases, design and cloud. I have formal
        experience as a QA Tester. I love cats, videogames, design and technology.
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