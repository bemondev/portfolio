import { motion } from "framer-motion"
import { ProjectsCarousel } from "./ui/projects-carousel";

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
      {/* Espacio para el carousel*/}
      <ProjectsCarousel/>
      <button
        onClick={onBack}
        className="fixed bottom-4 md:bottom-12 left-1/2 -translate-x-1/2 px-6 py-2 text-sm sm:text-lg border border-foreground rounded hover:bg-foreground hover:text-background transition z-50 backdrop-blur"
      >
        Go to Menu ←
      </button>
    </motion.section>
  );
}