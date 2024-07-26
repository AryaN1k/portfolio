import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Hero.jpg";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 my-20 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-left lg:pl-6 ">
            <motion.h1
              id="textone"
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-7 text-4xl md:text-5xl font-thin tracking-tight lg:mt-12 sm:text-start"
            >
              <Typewriter
                options={{
                  strings: ["Aryan Sharma"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-300 to-purple-300 bg-clip-text text-2xl  md:text-3xl tracking-tight text-transparent"
            >
              Front End Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-1 max-w-lg  font-light"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-center py-10">
            <motion.img
              className="rounded-xl hover:outline-none border-purple-600 
              hover:border-purple-600 hover:ring-purple-700 hover:ring-2 cursor-pointer"
              height={250}
              width={250}
              initial={{ x: 100, opacity: 0 , rotate : 10}}
              animate={{ x: 0, opacity: 1,rotate : 0 }}
              rotate={{}}
              transition={{ duration: 1, delay: 1.1 }}
              src={profilePic}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
