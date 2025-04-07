import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import { container, handWaveAnimation, hey } from "./animation";
const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen flex justify-center items-center pt-20 md:pt-0"
    >
      <div className="container grid md:grid-cols-2 mx-auto gap-6">
        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col items-left lg:pl-6 ">
            <div className="flex items-center gap-3">
              <motion.p
                variants={hey(0)}
                initial="hidden"
                animate="visible"
                className="my-1 text-white mt-2 text-2xl font-semibold italic"
              >
                Hey there ...
              </motion.p>
              <motion.div
                animate={handWaveAnimation}
                style={{ transformOrigin: "bottom right" }}
                className="col-span-3"
              >
                <img
                  src="/hand-wave.svg"
                  width={30}
                  height={30}
                  alt="hand-waving"
                />
              </motion.div>
            </div>

            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-6xl font-bold my-4 sm:text-start italic bg-gradient-to-r from-pink-300 via-slate-300 to-purple-300 bg-clip-text tracking-wider text-transparent"
            >
              I'm Aryan Sharma a Front End Developer.
            </motion.h1>
            <motion.span
              variants={container(0.7)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-300 to-purple-300 bg-clip-text text-2xl  md:text-3xl tracking-wider text-transparent font-medium italic"
            ></motion.span>
            <motion.p
              variants={container(0.7)}
              initial="hidden"
              animate="visible"
              className="my-1 max-w-lg text-white/40 text-lg"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full flex justify-center lg:justify-center ">
          <div className="w-3/4 h-3/4">
            <motion.img
              className="rounded-xl hover:outline-none -purple-600 
              hover:-purple-600 hover:ring-purple-700 hover:ring-2 cursor-pointer"
              initial={{ x: 100, opacity: 0, rotate: 10 }}
              animate={{ x: 0, opacity: 1, rotate: 0 }}
              rotate={{}}
              transition={{ duration: 1, delay: 1.1 }}
              src="/images/profile.JPG"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
