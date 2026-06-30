// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// <div className="social-icons">
//   <FaGithub />
//   <FaLinkedin />
//   <FaEnvelope />
// </div>


// function Hero() {
//   return (
//     <section id="home" className="hero">

//       <motion.div
//         className="hero-text"
//         initial={{ x: -100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <TypeAnimation
//   sequence={[
//     "Hello, I'm Bhawna",
//     2000,
//     "MERN Stack Developer",
//     2000,
//     "Data Analytics Learner",
//     2000,
//   ]}
//   wrapper="h1"
//   speed={50}
//   repeat={Infinity}
// />

//         <h2>MERN Stack Developer</h2>

//         <p>
//           BCA Graduate | Data Analytics Learner
//         </p>

//         <a href="#contact">
//           <button>RE</button>
//         </a>




//         <a href="#projects">
//           <button className="btn2">Projects</button>
//         </a>
//       </motion.div>

//       <motion.img
//         src="/profile.jpeg"
//         alt="profile"
//         className="profile"
//         animate={{ y: [0, -20, 0] }}
//         transition={{
//           duration: 3,
//           repeat: Infinity
//         }}
//       />
     

// <motion.div
//   initial={{ opacity: 0, x: -100 }}
//   animate={{ opacity: 1, x: 0 }}
//   transition={{ duration: 1 }}
// ></motion.div>

//     </section>
//   );
// }

// export default Hero;




























import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section id="home" className="hero">

      <motion.div
        className="hero-text"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <TypeAnimation
          sequence={[
            "Hello, I'm Bhawna",
            2000,
            "MERN Stack Developer",
            2000,
            "Data Analytics Learner",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
          wrapper="h1"
        />

        <p>
          BCA Graduate | MERN Developer
        </p>
        
       

        <button>Download Resume</button>

      </motion.div>

      <motion.img
        src="/profile.jpeg"
        alt="profile"
        className="profile"
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

    </section>




  );
}

export default Hero;