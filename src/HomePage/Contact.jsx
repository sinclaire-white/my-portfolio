import { FaLinkedin, FaFacebook, FaWhatsapp, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="text-primary">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span>✉️</span>
                <a href="mailto:shahriyarsifat2@gmail.com" className="hover:text-accent transition-colors">
                  shahriyarsifat2@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span>📱</span>
                <a href="tel:+8801629161894" className="hover:text-accent transition-colors">
                  +880 1629 161894
                </a>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Connect With Me</h3>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/shahriyar-sifat-xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-primary transition-colors"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://www.facebook.com/whyareyoulookingforme/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-primary transition-colors"
              >
                <FaFacebook size={28} />
              </a>
              <a
                href="https://wa.me/8801629161894"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-primary transition-colors"
              >
                <FaWhatsapp size={28} />
              </a>
              <a
                href="https://github.com/sinclaire-white"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-primary transition-colors"
              >
                <FaGithub size={28} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-neutral p-6 rounded-xl shadow-lg">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium text-primary">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-primary focus:outline-none focus:ring-2 focus:ring-accent text-primary bg-secondary"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium text-primary">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-primary focus:outline-none focus:ring-2 focus:ring-accent text-primary bg-secondary"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-medium text-primary">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg border border-primary focus:outline-none focus:ring-2 focus:ring-accent text-primary bg-secondary"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-accent text-secondary px-4 py-2 rounded-lg font-medium hover:bg-primary hover:text-accent transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
