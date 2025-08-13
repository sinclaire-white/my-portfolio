import Carousel from "../UI/Carousel";
import civitas from "../../public/civitas.png";
import taskTango from "../../public/task-tango.png";
import forumify from "../../public/forumify.png";

const projects = [
  {
    title: "Forumify",
    description:
      "An interactive MERN stack forum platform that allows users to post, comment, vote, and engage in discussions with role-based access and membership features.",
    image: forumify,
    liveLink: "https://forumify-client.vercel.app/",
    githubLink: "https://github.com/forumify/forumify-platform",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "DaisyUI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Framer Motion",
    ],
    features: [
      "User registration and social login",
      "Role-based private routes for Users and Admins",
      "Post creation, search by tags, and sorting",
      "Commenting and reporting system",
      "Membership system with badges",
    ],
  },
  {
    title: "Civitas",
    description:
      "A full-featured, community-driven social development event platform where users can create, join, and track local events like cleanups, plantations, and donations.",
    image: civitas,
    liveLink: "https://civitas-client.vercel.app/",
    githubLink: "https://github.com/Call-for-Code/Project-Sample",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "DaisyUI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Authentication",
      "Framer Motion",
    ],
    features: [
      "Secure authentication and role-based routes",
      "Create and manage local social events",
      "Join events and track upcoming ones",
      "Sort, filter, and search events",
      "Update event functionality for creators",
    ],
  },
  {
    title: "TaskTango",
    description:
      "A freelance task marketplace platform where users can post tasks, browse tasks, bid, and manage their work opportunities seamlessly.",
    image: taskTango,
    liveLink: "https://task-tango-client.vercel.app/",
    githubLink: "https://github.com/Call-for-Code/Project-Sample",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "DaisyUI",
      "React Router",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    features: [
      "User registration and Google OAuth",
      "Add, browse, update, and delete tasks",
      "Private routes for adding and managing tasks",
      "Real-time validation with toast notifications",
      "Date picker with future date validation",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">
          Projects
        </h2>
        <div className="flex justify-center">
          <Carousel items={projects} />
        </div>
      </div>
    </section>
  );
};

export default Projects;