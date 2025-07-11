import { motion } from "framer-motion";
import RotatingText from "./welcometext";

type Props = {
  onContinue: () => void;
};

export default function Welcome({ onContinue }: Props) {
  return (
    <motion.section
      initial={{ y: -1000, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -1000, opacity: 0 }}
      transition={{ duration: 0.6, ease: 'anticipate' }}
      className="min-h-screen w-full flex flex-col justify-center items-center text-left px-4 md:px-10 relative"
    >
      <div className="flex flex-col gap-2 max-w-full">
        <motion.h1
          className="text-4xl md:text-7xl font-mono text-foreground font-bold text-left"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hello! =]
        </motion.h1>

        <motion.h1
          className="text-4xl md:text-7xl font-mono text-foreground font-bold text-left"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          I&rsquo;m{' '}
          <motion.span
            className="text-chart-1 font-bold inline-block min-w-[180px] sm:min-w-[240px] md:min-w-[300px]"
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
        className="mt-16 px-6 py-2 text-sm sm:text-lg border border-foreground rounded hover:bg-foreground hover:text-background transition"
      >
        Go to Menu ↓
      </button>
    </motion.section>
  );
}