import { Slide } from "react-awesome-reveal";

import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="min-h-screen">
      
      
        <Navbar />
      
      <Slide direction="down" triggerOnce>
        <Hero />
      </Slide>

     
      <Slide direction="up" triggerOnce>
        <About />
      </Slide>

      <Slide direction="up" triggerOnce>
        <Education />
      </Slide>

      <Slide direction="up" triggerOnce>
        <Skills />
      </Slide>

      <Slide direction="up" triggerOnce>
        <Projects />
      </Slide>

      <Slide direction="up" triggerOnce>
        <Contact />
      </Slide>

      <Slide direction="up" triggerOnce>
        <Footer />
      </Slide>
    </div>
  );
};

export default Home;