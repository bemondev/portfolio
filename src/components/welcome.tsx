import { motion } from "framer-motion";
import RotatingText from "./welcometext";

type Props = {
  onContinue: () => void;
};

export default function Welcome({ onContinue }: Props) {
  return (
    <motion.section
      initial={{ y: -1000, opacity: 0 }}   // entra desde arriba 
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -1000, opacity: 0 }}       // sale hacia arriba
      transition={{ duration: 0.6, ease: 'anticipate' }}
      className="min-h-screen min-w-screen flex flex-col justify-center align-middle items-center text-left px-10"
    >
      <div className="flex flex-col gap-1">
        <motion.h1
          className="text-5xl md:text-7xl font-mono text-foreground font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hello! =]
        </motion.h1>

        <motion.h1
          className="text-5xl md:text-7xl font-mono text-foreground font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          I&rsquo;m{' '}
          <motion.span
            className="text-chart-1 font-bold inline-block min-w-[300px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <RotatingText />
          </motion.span>
        </motion.h1>
      </div>
      <button
        onClick={onContinue}
        className="absolute bottom-30 px-6 py-2 text-lg font-mono border border-foreground rounded hover:bg-foreground hover:text-background transition"
      >
        Go to Menu ↓
      </button>
    </motion.section>
  );
}