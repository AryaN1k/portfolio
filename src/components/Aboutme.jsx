import { motion } from "framer-motion";
import Title from "../../ui/Title";
import { lineX, lineY } from "./animation";

const Aboutme = () => {
  return (
    <section id="about" className="min-h-screen flex justify-center items-center">
      <div>
        <Title text={"About Me"} />
        <article className="grid md:grid-cols-3 gap-6 ">
          <section className="mb-8 col-span-2 max-w-4xl">
            <motion.p
              variants={lineX(0.4)}
              initial="hidden"
              whileInView="visible"
              className="mt-2 text-gray-700 text-2xl"
            >
              I’m a <strong>Front-End Developer</strong> passionate about
              crafting engaging user experiences. With expertise in{" "}
              <strong>React.js, Next.js, and UI/UX design</strong>, I build
              scalable and high-performance applications. I love working with
              animations, optimizing performance, and delivering pixel-perfect
              designs.
            </motion.p>
            <motion.p
              variants={lineX(0.6)}
              initial="hidden"
              whileInView="visible"
              className="mt-4 text-gray-700 text-2xl"
            >
              Beyond development, I stay updated with the latest industry
              trends, continuously refining my skills in{" "}
              <strong>JavaScript, TypeScript,</strong>
              and modern CSS frameworks. I enjoy collaborating with designers,
              product teams, and fellow developers to bring ideas to life while
              maintaining best practices and accessibility standards.
            </motion.p>
            <motion.p
              variants={lineX(0.8)}
              initial="hidden"
              whileInView="visible"
              className="mt-4 text-gray-700 text-2xl"
            >
              When I'm not coding, you'll find me exploring new design concepts,
              experimenting with motion effects, or contributing to open-source
              projects. I'm always excited to tackle challenging projects and
              push the boundaries of what’s possible on the web.
            </motion.p>
          </section>

          <motion.section
            variants={lineY(0.8)}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col"
          >
            <motion.section
              variants={lineY(0.8)}
              initial="hidden"
              whileInView="visible"
              className="mb-8"
            >
              <h2 className="text-3xl font-bold ">Frontend Tools</h2>
              <div className="mt-4">
                <p className="text-gray-700">
                  JavaScript(ES6+), React, Next.js, TypeScript, Redux, Redux
                  Toolkit, React Query, HTML5, Git/GitHub, React Hook Form.
                </p>
              </div>
            </motion.section>

            <motion.section
              variants={lineY(0.8)}
              initial="hidden"
              whileInView="visible"
              className="mb-8"
            >
              <h2 className="text-3xl font-bold ">Skills & Strengths</h2>
              <p className="text-gray-700">
                CSS3/SCSS/SASS, Tailwind CSS, Styled Components, Material
                UI,Aos, Framer Motion, Bootstrap, ReCharts,Swiper,GSAP.
              </p>
            </motion.section>

            <motion.section
              variants={lineY(0.8)}
              initial="hidden"
              whileInView="visible"
            >
              <h2 className="text-3xl font-bold ">Recent Projects</h2>
              <p className="text-gray-700">
                Figma, FigJam, UX Research, UI Design, Prototyping.
              </p>
            </motion.section>
          </motion.section>
          {/* </div> */}
        </article>
      </div>
    </section>
  );
};

export default Aboutme;
