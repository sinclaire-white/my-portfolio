import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col md:flex-row items-center gap-10 w-full">
        {/* Left Info */}
        <div className="flex-1 text-left">
          <h1 className="text-5xl font-bold  mb-4">Shahriyar Rahman Sifat</h1>
          <h2 className="text-2xl text-accent mb-6">Frontend Developer | React Enthusiast</h2>
          <p className="text-primary mb-6">
            Civil Engineering graduate transitioning into full-stack web development. Passionate about building meaningful digital experiences with Web3 technologies.
          </p>
          <Link
            to="contact"
            smooth
            className="bg-primary text-secondary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-accent transition-colors"
          >
            Contact Me
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://i.ibb.co/6JwSh9fv/profile-pic-1.png
"
            alt="Sifat"
            className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-accent"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
