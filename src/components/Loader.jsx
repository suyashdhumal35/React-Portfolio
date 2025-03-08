import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-white z-50">
      <div className="flex space-x-2">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="w-4 h-4 bg-orange-500 rounded-full"
            animate={{
              x: [0, 20, 40, 60, 0][i], // Moves last to first
            }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;
