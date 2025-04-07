import { motion } from "framer-motion";
import { PROJECTS } from "../constants";
import Title from "../../ui/Title";
import ProjectCard from "../../ui/ProjectCard";
import { projectCard } from "./animation";

const Project = () => {
  return (
    <section id="projects" className="min-h-screen flex justify-items-center">
      <div className="border-b border-neutral-900 py-24">
        <Title text={"Project"} />
        <div className="py-10 grid gap-4">
          {PROJECTS.map((project, index) => (
            <motion.div
              variants={projectCard(0.8)}
              initial="hidden"
              whileInView="visible"
              key={index}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tools={project.technologies}
                image={project.image}
                link={project.Links}
                GitHub={project.GitHub}
                liveUrl={project.URL}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
