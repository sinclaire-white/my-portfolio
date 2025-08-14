import { Link } from "react-scroll";
import SplitText from "../UI/SplitText";
const Hero = () => {
  const handleAnimationComplete = () => {};
  return (
    <section
      id="home"
      className="min-h-screen flex items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col md:flex-row items-center gap-10 w-full">
        {/* Left Info */}
        <div className="flex-1 text-left">
          <h1 className="text-5xl font-semibold  mb-4">
            Hi, I Am <br></br>
            <SplitText
              text="Shahriyar Sifat"
              className="text-5xl text-primary font-bold text-center"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </h1>
          <h2 className="text-2xl text-accent">
            Frontend Developer | React Enthusiast
          </h2>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://i.ibb.co/6JwSh9fv/profile-pic-1.png"
            alt="Sifat"
            className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-2 border-primary"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
