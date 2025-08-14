

const skills = [
  { name: "HTML5", image: "/html.png", color: "#f97316" }, 
  { name: "CSS3", image: "/css.png", color: "#3b82f6" }, 
  { name: "JavaScript", image: "/js.png", color: "#facc15" }, 
  { name: "React.js", image: "/react.png", color: "#22d3ee" }, 
  { name: "Tailwind CSS", image: "/tailwind.png", color: "#38bdf8" }, 
  { name: "Node.js", image: "/node.png", color: "#22c55e" }, 
  { name: "MongoDB", image: "/mongo.png", color: "#16a34a" }, 
  { name: "Firebase", image: "/firebase.png", color: "#DD2C00" }, 
  { name: "Git", image: "/git-bash.png", color: "#FF8080" }, 
  { name: "DaisyUI", image: "/daisy.png", color: "#1AD1A5" }, 
];

const Skills = () => {
  return (
    <section id="skills" className="mb-12">
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