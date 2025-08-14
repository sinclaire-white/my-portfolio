import { FaLinkedin, FaFacebook, FaWhatsapp, FaGithub } from "react-icons/fa";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="text-gray-300">
      <div className="border-t border-primary pt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Section 1: Branding & Description */}
            <div className="flex flex-col items-start">
              <h3 className="text-2xl font-bold text-primary">Shahriyar Rahman Sifat</h3>
              <p className="mt-2 text-sm text-gray-400 max-w-xs">
                A passionate web developer building modern and responsive web applications.
              </p>
            </div>

            {/* Section 2: Navigation Links */}
            <div className="flex flex-col items-start">
              <h4 className="text-lg font-semibold text-primary mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="hover:text-primary transition-colors duration-300 cursor-pointer"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="hover:text-primary transition-colors duration-300 cursor-pointer"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="hover:text-primary transition-colors duration-300 cursor-pointer"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="hover:text-primary transition-colors duration-300 cursor-pointer"
                  >
                    Home
                  </Link>
                </li>
              </ul>
            </div>

            {/* Section 3: Social & Contact */}
            <div className="flex flex-col items-start">
              <h4 className="text-lg font-semibold text-primary mb-3">Connect with Me</h4>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/in/shahriyar-sifat-xyz" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://github.com/sinclaire-white" target="_blank" rel="noopener noreferrer" title="GitHub" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  <FaGithub size={24} />
                </a>
                <a href="https://www.facebook.com/whyareyoulookingforme/" target="_blank" rel="noopener noreferrer" title="Facebook" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  <FaFacebook size={24} />
                </a>
                <a href="https://wa.me/8801629161894" target="_blank" rel="noopener noreferrer" title="WhatsApp" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  <FaWhatsapp size={24} />
                </a>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <FaEnvelope className="text-gray-400" />
                  <a href="mailto:shahriyarsifat2@gmail.com" className="hover:text-primary transition-colors duration-300">shahriyarsifat2@gmail.com</a>
                </p>
                <p className="flex items-center gap-2">
                  <FaPhone className="text-gray-400" />
                  <a href="tel:+8801629161894" className="hover:text-primary transition-colors duration-300">+880 1629 161894</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-secondary py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Shahriyar Rahman Sifat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;