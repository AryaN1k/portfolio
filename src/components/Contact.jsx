import { TbPhoneCall } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="border-b border-neutral-900 my-20 pb-20 sm:px-8 ">
      <div className="flex flex-wrap-reverse gap-5">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 "
        >
          <div className="con flex flex-col justify-center item-center p-2 lg:p-4 rounded-2xl ">
            <h2 className="bg-gradient-to-r from-pink-400 via-slate-200 to-purple-300 bg-clip-text text-transparent text-left lg:text-center mt-2 text-2xl sm:text-3xl font-semibold px-2 sm:px-6">
              {"Let's work Togther!"}
            </h2>
            <span className=" text-sm text-left px-2 tracking-tighter sm:text-lg sm:px-6  mt-2">
              I design and code beautifully simple things and i love what i do.
              Just simple like that!
            </span>
            <form action="">
              <div className="grid gap-7 sm:grid-cols-2 mt-5 px-3">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="First Name"
                  className="w-full bg-black border-b border-red-400 rounded-xl px-4 py-1 focus:outline-none focus:border-cyan-600 col-span-2 sm:col-auto"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Last Name"
                  className="w-full bg-black border-b rounded-xl px-4 py-1 focus:outline-none focus:border-cyan-600 col-span-2 sm:col-auto"
                />
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email"
                  className="w-full bg-black border-b rounded-xl px-4 py-1 focus:outline-none focus:border-cyan-600 col-span-2 sm:col-auto"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Phone"
                  className="w-full bg-black border-b rounded-xl px-4 py-1 focus:outline-none focus:border-cyan-600 col-span-2 sm:col-auto"
                />
                <textarea
                  type="text"
                  name=""
                  id=""
                  rows={7}
                  placeholder="Message"
                  className="w-full bg-black border-b rounded-xl px-4 py-1 focus:outline-none focus:border-cyan-600 col-span-2"
                />
              </div>
              <button
                type="submit"
                className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm  text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900 px-4 py-1 mt-5 r m w-1/2 sm:w-1/3 ml-5"
              >
                Purple
              </button>
            </form>
          </div>
        </motion.div>
        <div className="w-full sm:w-1/4 lg:p-4 flex items-center justify-start ">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-rows-2 gap-2 sm:gap-12 p-1 sm:p-5"
          >
            <div className="flex gap-3  p-2">
              <TbPhoneCall className="text-2xl rounded-full my-2 text-purple-700" />
              <div className="grid gap-1">
                <h3 className="text-2xl text-slate-400">Phone</h3>
                <span className="text-sm">8923323031</span>
              </div>
            </div>
            <div className="flex gap-3 p-2">
              <MdEmail className="text-2xl my-2 text-purple-700" />
              <div className="grid gap-1">
                <h3 className="text-2xl  text-slate-400">Email</h3>
                <span className="text-sm">aryanvats0728@gmail.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
