"use client";
import { motion, useTransform, useScroll } from "framer-motion";
const RumeshText = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [1, -480]);
  console.log(y);

  return (
    <motion.span
      className="text-9xl -z-50 select-none fixed top-16 left-0 md:text-[150px] lg:text-[200px] font-extrabold text-opacity-5 text-black"
      style={{ WebkitWritingMode: "vertical-rl", top: y }}
    >
      Rumesh Ranaweera
    </motion.span>
  );
};

export default RumeshText;