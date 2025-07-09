import { motion } from "framer-motion";
type Props = {
  onBack: () => void;
}

export default function AboutSection({ onBack }: Props) {
  return (
    <motion.section
      initial={{ x: '-100%', opacity: 0 }}         // entra desde la izquierda
      animate={{ x: 0, opacity: 1 }}               // se posiciona al centro
      exit={{ x: '-100%', opacity: 0 }}            // sale hacia la izquierda
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="min-h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 0}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl text-center"
      >
        <h2 className="text-4xl font-bold mb-4">about me</h2>
        <p className="text-lg text-foreground">
        Hi! :) my name is Bernardo Montaña. I’m an IT 
        student based in Uruguay, currently pursuing a Bachelor's Degree
        in IT at UTEC. I’ve dabbled in development, testing,
        databases, design and cloud. I have formal
        experience as a QA Tester. I love cats, videogames, design and technology.
        </p>
        <button onClick={onBack} className="mt-8 px-4 py-2 text-lg bg-foreground text-background rounded-md">
        Back </button>
      </motion.div>
    </motion.section>
  );
}