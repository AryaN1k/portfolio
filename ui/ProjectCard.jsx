import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({
  title,
  description,
  tools,
  image,
  GitHub,
  liveUrl,
}) {
  return (
    <motion.section className="bg-white/10 backdrop-blur-md grid md:grid-cols-2 gap-4 md:gap-7 rounded-xl p-4">
      <div className="overflow-hidden md:h-1/2 md:w-3/4 flex justify-center items-center">
        <img
          src={image}
          alt={title}
          className=" object-cover rounded-xl h-auto w-full"
        />
      </div>

      <div className="flex flex-col p-2 ">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold ">{title}</h2>
          </div>
          <div className="flex items-center justify-between gap-3">
            {liveUrl && (
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition p-3 border"
                >
                  <ExternalLink className="w-5 h-5 text-white" />
                </Link>
              </motion.div>
            )}
            {GitHub && (
              <motion.div
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                className="my-3"
              >
                <Link
                  to={GitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition p-3 border"
                >
                  <Github className="w-5 h-5 text-white" />
                </Link>
              </motion.div>
            )}
          </div>
        </div>

        <div className="w-2/3 py-4">
          <p className="text-white/80 text-xl">{description}</p>
        </div>

        <div className="flex flex-wrap gap-3 ">
          {Array.isArray(tools) &&
            tools.map((tool, idx) => (
              <span
                key={idx}
                className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-xl border border-white/20"
              >
                {tool.toUpperCase()}
              </span>
            ))}
        </div>
      </div>
    </motion.section>
  );
}
