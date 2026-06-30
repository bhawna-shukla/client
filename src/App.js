import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer.jsx";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <About />
      <Footer />
    </>
  );
}

export default App;

// function App() {
//   return (
//     <div
//       style={{
//         textAlign: "center",
//         marginTop: "100px",
//         fontSize: "40px",
//         fontWeight: "bold",
//       }}
//     >
//       Hello Bhawna 👋
//     </div>
//   );
// }

// export default App;