import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="flex justify-center items-center h-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
    >
      <div className="w-6 h-6 bg-blue-500 rounded-full animate-bounce">aasdasd</div>
    </motion.div>
  );
}
