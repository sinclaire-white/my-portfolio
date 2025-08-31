import { Link } from "react-scroll";
import { IoCloudDownloadOutline, IoPersonOutline } from "react-icons/io5";
import SplitText from "../UI/SplitText";

const Hero = () => {
  const handleAnimationComplete = () => {};

  return (
    <section
      id="home"
      className="flex items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 mt-12"
    >
      <div className="flex flex-col md:flex-row items-center gap-10 w-full">
        {/* Left Info */}
        <div className="flex-1 text-left">
          <h1 className="text-5xl font-semibold mb-4">
            Hi, I Am <br />
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
          <h2 className="text-2xl text-accent mb-6">
            Frontend Developer | Building Dynamic Web Experiences
          </h2>
          {/* Button Container */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start max-w-full">
            <a
              href="https://drive.google.com/uc?export=download&id=1xGjH2GoTIj-3VF77PhmSm8JtdA3QGoMN"
              download
              className="cursor-pointer font-semibold overflow-hidden relative z-10 border border-primary group px-4 sm:px-6 py-2 bg-base min-w-fit sm:min-w-[140px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <span className="relative z-10 text-primary group-hover:text-white text-base duration-500 flex items-center gap-2">
                <IoCloudDownloadOutline />
                Download CV
              </span>
              <span className="absolute w-full h-full bg-primary -left-full top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
              <span className="absolute w-full h-full bg-primary -right-full top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
            </a>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer font-semibold overflow-hidden relative z-10 border border-primary group px-4 sm:px-6 py-2 bg-base min-w-fit sm:min-w-[140px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <span className="relative z-10 text-primary group-hover:text-white text-base duration-500 flex items-center gap-2">
                <IoPersonOutline />
                Contact Me
              </span>
              <span className="absolute w-full h-full bg-primary -left-full top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
              <span className="absolute w-full h-full bg-primary -right-full top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://i.ibb.co/fVGTLCbK/profile-pic-1.webp"
            alt="Sifat"
            className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-2 border-primary"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;