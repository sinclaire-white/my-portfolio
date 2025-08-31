import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

import 'swiper/css';
import 'swiper/css/pagination';

const projects = [
  {
    title: 'Forumify',
    description:
      'An interactive MERN stack forum platform that allows users to post, comment, vote, and engage in discussions with role-based access and membership features.',
    image: '/forumify.png',
    liveLink: 'https://forumify-client.vercel.app/',
    githubLink: 'https://github.com/forumify/forumify-platform',
    technologies: [
      'React.js',
      'Tailwind CSS',
      'DaisyUI',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'Framer Motion',
    ],
    features: [
      'User registration and social login',
      'Role-based private routes for Users and Admins',
      'Post creation, search by tags, and sorting',
      'Commenting and reporting system',
      'Membership system with badges',
    ],
  },
  {
    title: 'Civitas',
    description:
      'A full-featured, community-driven social development event platform where users can create, join, and track local events like cleanups, plantations, and donations.',
    image: '/civitas.png',
    liveLink: 'https://civitas-client.vercel.app/',
    githubLink: 'https://github.com/Call-for-Code/Project-Sample',
    technologies: [
      'React.js',
      'Tailwind CSS',
      'DaisyUI',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Firebase Authentication',
      'Framer Motion',
    ],
    features: [
      'Secure authentication and role-based routes',
      'Create and manage local social events',
      'Join events and track upcoming ones',
      'Sort, filter, and search events',
      'Update event functionality for creators',
    ],
  },
  {
    title: 'TaskTango',
    description:
      'A freelance task marketplace platform where users can post tasks, browse tasks, bid, and manage their work opportunities seamlessly.',
    image: '/task-tango.png',
    liveLink: 'https://task-tango-client.vercel.app/',
    githubLink: 'https://github.com/Call-for-Code/Project-Sample',
    technologies: [
      'React.js',
      'Tailwind CSS',
      'DaisyUI',
      'React Router',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
    ],
    features: [
      'User registration and Google OAuth',
      'Add, browse, update, and delete tasks',
      'Private routes for adding and managing tasks',
      'Real-time validation with toast notifications',
      'Date picker with future date validation',
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">
          Projects
        </h2>
        <div className="flex justify-center">
          <div className="relative rounded-3xl border border-[#222] bg-[#222] p-6 sm:p-8 w-full pb-12">
            <Swiper
              modules={[Autoplay, Pagination]}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              spaceBetween={30}
              slidesPerView={1}
              className="w-full carousel-swiper"
            >
              {projects.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full rounded-xl flex flex-col p-4 min-h-[36rem]">
                    {/* Image */}
                    <div className="flex-1 flex items-center justify-center p-2">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="rounded-lg object-contain w-full h-auto max-h-72"
                      />
                    </div>

                    {/* Project details */}
                    <div className="flex-1 flex flex-col p-2 mt-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-primary">
                            {item.title}
                          </h3>
                          <div className="flex gap-2">
                            <a
                              href={item.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white hover:text-primary"
                              title="Live Demo"
                            >
                              <FiExternalLink className="text-xl" />
                            </a>
                            <a
                              href={item.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white hover:text-primary"
                              title="GitHub Repo"
                            >
                              <FiGithub className="text-xl" />
                            </a>
                          </div>
                        </div>
                        <p className="text-sm text-gray-300 mb-4">
                          {item.description}
                        </p>
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-primary mb-1">
                            Technologies Used:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {item.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="bg-gray-700 text-xs text-white px-2 py-1 rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-1">
                            Core Features:
                          </h4>
                          <ul className="list-inside text-sm text-gray-300">
                            {item.features.slice(0, 3).map((feature, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;