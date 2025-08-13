const projects = [
  {
    title: "Civitas",
    description:
      "Community-driven social development event platform for local events like cleanups and donations.",
    technologies: ["React.js", "Tailwind CSS", "DaisyUI", "Node.js", "Express.js", "MongoDB"],
    link: "https://civitas-client.vercel.app/",
  },
  {
    title: "Forumify",
    description:
      "Full-featured discussion forum with posts, comments, voting system and admin dashboard.",
    technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-neutral rounded-xl shadow-lg overflow-hidden p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">{project.title}</h3>
                <p className="text-primary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-accent text-secondary text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-secondary px-4 py-2 rounded-lg font-medium text-center hover:bg-primary hover:text-accent transition-colors"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
