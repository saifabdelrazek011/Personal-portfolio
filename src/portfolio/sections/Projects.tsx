import React from "react";
import { PROJECTS } from "../../constants/index";
import { motion } from "framer-motion";
function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.a>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <a
                href={project.repo}
                className="mb-4 block hover:text-sky-700 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check Repo
              </a>
              {project.technologies.map((tech, index) => {
                return (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                  >
                    {tech}
                  </span>
                );
              })}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
