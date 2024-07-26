import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const Aboutme = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 ">
      <h2 className="text-center text-4xl my-20">About Me</h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-4">
          <div className="flex items-center justify-center">
            <motion.img
              initial={{ opacity: 0, x: -100 , rotate: -15 }}
              whileInView={{ opacity: 1, x: 0 ,rotate:0  }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl"
              src={aboutImg}
              alt=""
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start ">
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.3 }}
              className="my-2 max-w-xl p-2 lg:py-5 text-sm lg:text-base"
            >
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
