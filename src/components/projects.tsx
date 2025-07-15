import { motion } from "framer-motion"

type Props = {
  onBack: () => void;
};

export default function Projects({ onBack }: Props) {
  return (
    <motion.section
      initial={{ x: 1000, opacity: 0 }}   // entra desde la derecha
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 1000, opacity: 0 }}       // sale hacia la derecha
      transition={{ duration: 0.6, ease: 'anticipate' }}
      className="min-h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <h2 className="text-4xl font-normal mb-4">Projects</h2>
      <p className="text-lg max-w-xl mb-8">
        This place will have a carousel with cards to show off some of the projects I&rsquo;ve been part of and their stack or repository (WIP)
      </p>
      <button
        onClick={onBack}
        className="fixed bottom-12 left-1/2 -translate-x-1/2 px-6 py-2 text-sm sm:text-lg border border-foreground rounded hover:bg-foreground hover:text-background transition z-50 backdrop-blur"
      >
        Go to Menu ←
      </button>
    </motion.section>
  );
}