import {
  RiCss3Line,
  RiHtml5Line,
  RiJavascriptFill,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { motion } from "framer-motion";

const iconVariant = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Skills = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 ">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        className="text-center text-4xl my-20"
      >
        Skills
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="flex items-center justify-start lg:justify-center gap-4 flex-wrap"
      >
        <motion.div
          variants={iconVariant(0.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiHtml5Line className="text-6xl text-orange-700" />
        </motion.div>
        <motion.div
          variants={iconVariant(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiCss3Line className="text-6xl text-cyan-300" />
        </motion.div>
        <motion.div
          variants={iconVariant(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-6xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconVariant(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiJavascriptFill className="text-6xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-6xl text-cyan-300" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
