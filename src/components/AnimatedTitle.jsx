import { motion } from "framer-motion";

const AnimatedTitle = ({ text }) => (
  <motion.h1
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-3xl font-bold mb-6"
  >
    {text}
  </motion.h1>
);

export default AnimatedTitle;
