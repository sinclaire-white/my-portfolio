const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="text-primary text-lg">
            <p className="mb-4">
              I'm Shahriyar Rahman Sifat, a Civil Engineering graduate transitioning into full-stack web development. 
              Passionate about building meaningful digital experiences with a focus on Web3 technologies.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Proficient in <strong>React.js, Tailwind CSS, DaisyUI</strong></li>
              <li>Experience with <strong>Node.js, Express.js, MongoDB</strong></li>
              <li>Currently exploring <strong>Next.js</strong> and advanced backend development</li>
            </ul>
          </div>
          <div className="bg-accent p-6 rounded-lg text-secondary">
            <h3 className="text-xl font-semibold mb-4">Career Highlights</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Built multiple responsive web apps using MERN stack</li>
              <li>Implemented secure authentication and role-based routing</li>
              <li>Developed dynamic admin dashboards</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
