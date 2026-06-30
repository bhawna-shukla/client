import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import "./Projects.css";

const projects = [
  {
    title: "Personal Portfolio",
    image: "https://picsum.photos/600/400?random=1",
    description:
      "A fully responsive animated portfolio built using React with modern UI and smooth animations.",
    tech: ["React", "CSS", "JavaScript"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.vercel.app",
  },

  {
    title: "Employee Management System",
    image: "https://picsum.photos/600/400?random=2",
    description:
      "Employee CRUD application with responsive dashboard and clean user interface.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/employee",
    live: "#",
  },

  {
    title: "Data Analytics Dashboard",
    image: "https://picsum.photos/600/400?random=3",
    description:
      "Interactive dashboard using Excel, SQL and Power BI for business insights.",
    tech: ["Power BI", "Excel", "SQL"],
    github: "https://github.com/yourusername/dashboard",
    live: "#",
  },

  {
    title: "E-Commerce Website",
    image: "https://picsum.photos/600/400?random=4",
    description:
      "Modern shopping website with beautiful product cards and responsive layout.",
    tech: ["React", "Bootstrap", "MongoDB"],
    github: "https://github.com/yourusername/ecommerce",
    live: "#",
  },

  {
    title: "Todo Application",
    image: "https://picsum.photos/600/400?random=5",
    description:
      "Task management application with add, edit and delete functionality.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/yourusername/todo",
    live: "#",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">

      <motion.h1
        className="project-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
      >
        My Projects
      </motion.h1>

      <motion.p
        className="project-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: .2 }}
      >
        Some projects that showcase my skills and learning journey.
      </motion.p>

      <div className="project-container">

        {projects.map((project, index) => (

          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: .6,
              delay: index * .2,
            }}
            whileHover={{
              y: -12,
            }}
          >

            <img
              src={project.image}
              alt={project.title}
            />

            <div className="project-content">

              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <div className="tech-stack">

                {project.tech.map((tech, i) => (

                  <span key={i}>
                    {tech}
                  </span>

                ))}

              </div>

              <div className="project-buttons">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Projects;