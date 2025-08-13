import Lottie from "lottie-react";
import person from "../assets/Person.json";
import { TbHandFingerDown } from "react-icons/tb";
const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Lottie Animation */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="max-w-sm w-full">
              <Lottie animationData={person} loop={true} />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-lg">
            <p className="mb-6 leading-relaxed text-justify">
              I am on my journey to becoming a full-stack web developer. I
              completed my graduation in Civil Engineering, but I never felt
              truly passionate about it. After graduation, I was unsure of my
              path until one of my relatives introduced me to web development.
              She gave me a short course on HTML and CSS, and I instantly found
              it exciting. Soon after, I enrolled in the Programming Hero
              Level-1 course and successfully completed it. Along the way, I
              also developed a strong interest in Web3 technologies. My dream is
              to contribute to a major project in the Web3 space one day.
            </p>

            <div>
              <p>
                Currently I am{" "}
                <TbHandFingerDown className="inline text-primary text-xl" />
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Proficient in <strong>React.js, Tailwind CSS, DaisyUI</strong>
                </li>
                <li>
                  Experienced with <strong>Node.js, Express.js, MongoDB</strong>
                </li>
                <li>
                  Exploring <strong>Next.js</strong> and advanced
                  backend development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
