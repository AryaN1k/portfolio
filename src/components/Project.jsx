import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 py-24">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        className="text-center text-4xl font-semibold my-20"
      >
        Project
      </motion.h2>
      <div className="py-10">
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center p-8 gap-5">
            <div className="w-full lg:w-1/4 ">
              <motion.img
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                height={360}
                width={360}
                src={project.image}
                alt={project.title}
                className="rounded mb-4 border"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.3 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h5 className="mb-2 font-semibold">{project.title}</h5>
              <p className="mb-2 text-neutral-400">{project.description}</p>
              <div className="w-1/2 flex gap-2 pb-4">
                <a
                  href={project.URL}
                  className=" text-purple-600 bg-neutral-900 rounded-lg px-2 py-2 text-sm"
                >
                  Demo
                </a>
                <a
                  href={project.GitHub}
                  className=" text-purple-600 bg-neutral-900 rounded-lg px-2 py-2 text-sm"
                >
                  Code
                </a>
              </div>
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="mr-2 bg-neutral-900 rounded px-2 py-2 text-sm font-medium text-purple-600"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
