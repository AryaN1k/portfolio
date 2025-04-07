import { TbPhoneCall } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="border-b border-neutral-900 my-20 pb-20 sm:px-8 flex justify-center items-center"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full "
        >
          <div
            className="con flex flex-col justify-center item-center p-4 rounded-2xl
            backdrop-blur-md bg-white/10 border border-white/20 shadow-lg "
          >
            <h2 className="bg-gradient-to-r from-pink-400 via-slate-200 to-purple-300 bg-clip-text text-transparent text-left lg:text-center mt-2 text-2xl sm:text-5xl px-2 sm:px-6 font-bold">
              {"Let's work Togther!"}
            </h2>
            <span className="text-sm text-left px-2 tracking-tighter sm:text-lg sm:px-6 mt-2 text-white md:text-center">
              I design and code beautifully simple things and I love what I do.
              Just simple like that!
            </span>
            <form action="">
              <div className="grid gap-7 sm:grid-cols-2 mt-5">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full bg-white/10 text-white placeholder-white/70 border border-white/20 rounded-xl px-4 py-2 focus:outline-none backdrop-blur-sm transition"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full bg-white/10 text-white placeholder-white/70 border border-white/20 rounded-xl px-4 py-2 focus:outline-none backdrop-blur-sm transition"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-white/10 text-white placeholder-white/70 border border-white/20 rounded-xl px-4 py-2 focus:outline-none backdrop-blur-sm transition"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full bg-white/10 text-white placeholder-white/70 border border-white/20 rounded-xl px-4 py-2 focus:outline-none backdrop-blur-sm transition"
                />
                <textarea
                  rows={7}
                  placeholder="Message"
                  className="w-full bg-white/10 text-white placeholder-white/70 border border-white/20 rounded-xl px-4 py-2 focus:outline-none  backdrop-blur-sm transition col-span-2"
                />
              </div>
              <button
                type="submit"
                className="text-white bg-white/10 hover:bg-purple-500/30 border border-white/20 backdrop-blur-md hover:shadow-xl transform duration-300 ease-in-out rounded-xl px-6 py-2 mt-7 focus:outline-none focus:ring-2 focus:ring-purple-300"
              >
                Submit
              </button>
            </form>
          </div>
        </motion.div>
        {/* <div className="w-full sm:w-1/4 lg:p-4 flex items-center justify-start">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-rows-2 gap-2 sm:gap-12 p-1 sm:p-5"
          >
            <div className="flex gap-3 p-2">
              <TbPhoneCall className="text-2xl rounded-full my-2 text-purple-400" />
              <div className="grid gap-1">
                <h3 className="text-2xl text-slate-300">Phone</h3>
                <span className="text-sm text-white">8923323031</span>
              </div>
            </div>
            <div className="flex gap-3 p-2">
              <MdEmail className="text-2xl my-2 text-purple-400" />
              <div className="grid gap-1">
                <h3 className="text-2xl text-slate-300">Email</h3>
                <span className="text-sm text-white">
                  aryanvats0728@gmail.com
                </span>
              </div>
            </div>
          </motion.div>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
