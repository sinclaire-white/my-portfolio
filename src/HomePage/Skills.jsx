import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFirebase,} from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400 text-5xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-5xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-5xl" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-5xl" /> },
  { name: "Next.js", icon: <RiNextjsLine className="text-primary text-5xl" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">Skills & Technologies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white flex flex-col items-center justify-center gap-3 p-6 rounded-xl border-1"
            >
              {skill.icon}
              <p className="text-primary font-semibold text-lg">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
