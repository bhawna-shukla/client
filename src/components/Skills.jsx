import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaBootstrap,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";

import {
  SiMongodb,
  SiMysql,
  
} from "react-icons/si";



function Skills() {
  return (
    <section id="skills" className="skills">

    <TypeAnimation
  sequence={[
    "My Tech Stack & Development Skills",
    2000,
   
    
  ]}
  wrapper="h1"
  speed={50}
  className="skill-title"
  repeat={Infinity}
/>
   

   <p className="skill-subtitle">
  These technologies help me build modern, responsive, and user-friendly web applications.
</p>


      <div className="skill-container">
       {/* HTML */}
       <motion.div
  className="skill-card"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0 }}
  viewport={{ once: false }}
  whileHover={{ scale: 1.1 }}
>
  <FaHtml5 className="icon html" />
  <h3>HTML</h3>
</motion.div>


       <motion.div
  className="skill-card"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: false }}
  whileHover={{ scale: 1.1 }}
>
  <FaCss3Alt className="icon css" />
  <h3>CSS</h3>
</motion.div>

        <motion.div
          className="skill-card"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
          whileHover={{ scale: 1.1 }}
        
        >
          <FaJs className="icon js" />
          <h3>JavaScript</h3>
        </motion.div>

        <motion.div
          className="skill-card"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: false }}
          whileHover={{ scale: 1.1 }}
         
        >
          <FaReact className="icon react" />
          <h3>React</h3>
        </motion.div>

       

<motion.div
  className="skill-card"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.8 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.1 }}
>
  <FaBootstrap className="icon bootstrap" />
  <h3>Bootstrap</h3>
</motion.div>


<motion.div className="skill-card"
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: 1 }}
viewport={{ once: true }}
whileHover={{ scale: 1.1 }}
>
  <FaPython className="icon python" />
  <h3>Python</h3>
</motion.div>

{/* 
<motion.div className="skill-card"
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
viewport={{ once: true }}
whileHover={{ scale: 1.1 }}
>
  <SiPostgresql className="icon sql" />
  <h3>SQL</h3>
</motion.div> */}

<motion.div className="skill-card"
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: 1.4 }}
viewport={{ once: true }}
whileHover={{ scale: 1.1 }}
>
  <SiMysql className="icon mysql" />
  <h3>MySQL</h3>
</motion.div>


<motion.div className="skill-card"
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: 1.6 }}
viewport={{ once: true }}
whileHover={{ scale: 1.1 }}
>
  <SiMongodb className="icon mongo" />
  <h3>MongoDB</h3>
</motion.div>


<motion.div className="skill-card"
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: 1.8 }}
viewport={{ once: true }}
whileHover={{ scale: 1.1 }}
>
  <FaGitAlt className="icon git" />
  <h3>Git</h3>
</motion.div>




<motion.div className="skill-card"
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: 2 }}
viewport={{ once: true }}
whileHover={{ scale: 1.1 }}
>
  <FaGithub className="icon github" />
  <h3>GitHub</h3>
</motion.div>

<motion.div className="skill-card"
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: 2.2 }}
viewport={{ once: true }}
whileHover={{ scale: 1.1 }}
>
  <h1 className="powerbi-icon">📊</h1>
  <h3>Power BI</h3>
</motion.div>

<motion.div className="skill-card"
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: 2.4 }}
viewport={{ once: true }}
whileHover={{ scale: 1.1 }}
>
  <h1 className="excel-icon">📗</h1>
  <h3>Excel</h3>
</motion.div>

      </div>

    </section>
  );
}

export default Skills;