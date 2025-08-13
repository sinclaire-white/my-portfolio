import htmlImg from "../../public/html.png";
import cssImg from "../../public/css.png";
import jsImg from "../../public/js.png";
import reactImg from "../../public/react.png";
import tailwindImg from "../../public/tailwind.png";
import nodeImg from "../../public/node.png";
import mongoImg from "../../public/mongo.png";
import firebaseImg from "../../public/firebase.png";
import gitImg from "../../public/git-bash.png";
import daisyImg from "../../public/daisy.png";

const skills = [
  { name: "HTML5", image: htmlImg, color: "#f97316" }, 
  { name: "CSS3", image: cssImg, color: "#3b82f6" }, 
  { name: "JavaScript", image: jsImg, color: "#facc15" }, 
  { name: "React.js", image: reactImg, color: "#22d3ee" }, 
  { name: "Tailwind CSS", image: tailwindImg, color: "#38bdf8" }, 
  { name: "Node.js", image: nodeImg, color: "#22c55e" }, 
  { name: "MongoDB", image: mongoImg, color: "#16a34a" }, 
  { name: "Firebase", image: firebaseImg, color: "#DD2C00" }, 
  { name: "Git", image: gitImg, color: "#FF8080" }, 
  { name: "DaisyUI", image: daisyImg, color: "#1AD1A5" }, 
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="p-6 rounded-xl shadow-lg flex flex-col items-center justify-center animated-border"
              style={{ "--border-color": skill.color }}
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16 object-contain rounded-lg"
              />
              <p className="text-primary font-semibold text-lg mt-3">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


