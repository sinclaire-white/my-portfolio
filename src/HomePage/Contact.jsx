import { FaLinkedin, FaFacebook, FaWhatsapp, FaGithub } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span>✉️</span>
                <a
                  href="mailto:shahriyarsifat2@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  shahriyarsifat2@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span>📱</span>
                <a
                  href="tel:+8801629161894"
                  className="hover:text-primary transition-colors"
                >
                  +880 1629 161894
                </a>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-primary">
              Connect With Me
            </h3>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/shahriyar-sifat-xyz"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-primary transition-colors"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://www.facebook.com/whyareyoulookingforme/"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-primary transition-colors"
              >
                <FaFacebook size={28} />
              </a>
              <a
                href="https://wa.me/8801629161894"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-primary transition-colors"
              >
                <FaWhatsapp size={28} />
              </a>
              <a
                href="https://github.com/sinclaire-white"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-primary transition-colors"
              >
                <FaGithub size={28} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-6 rounded-xl shadow-lg">
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-1 font-medium text-primary"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-primary focus:outline-none focus:ring-2 focus:ring-primary text-primary "
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 font-medium text-primary"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-primary focus:outline-none focus:ring-2 focus:ring-primary text-primary "
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-1 font-medium text-primary"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg border border-primary focus:outline-none focus:ring-2 focus:ring-primary text-primary "
                  required
                ></textarea>
              </div>
              {/* button */}
              <div className="flex justify-center">
                <button
                  className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden
                   font-semibold text-primary transition-all duration-150 ease-in-out rounded
                   border border-primary bg-transparent group hover:pl-10 hover:pr-6"
                >
                  {/* Bottom hover bar */}
                  <span
                    className="absolute bottom-0 left-0 w-full h-1 bg-primary transition-all duration-150 ease-in-out
                     group-hover:h-full"
                  ></span>

                  {/* Right icon, moves right out of view */}
                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <RiMailSendLine className="w-5 h-5 text-primary" />
                  </span>

                  {/* Left icon, hidden initially, comes in on hover */}
                  <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 duration-200 ease-out">
                    <RiMailSendLine className="w-5 h-5 text-white" />
                  </span>

                  {/* Button text */}
                  <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                    Send Message
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
