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
    <div id="home" className="min-h-screen">
      <div className="z-[999]"> {/* Ensure Navbar is on top of everything */}
        <Slide direction="down" triggerOnce>
          <Navbar />
        </Slide>
      </div>

      {/* Main content container with top padding equal to navbar height */}
      <div className="pt-16"> 
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
    </div>
  );
};

export default Home;