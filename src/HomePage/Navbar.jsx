import { useState } from "react";
import { Link } from "react-scroll"; 
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle"; // import it

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="w-full z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="home" smooth className="flex items-center text-primary font-bold text-xl cursor-pointer">
            {"</>"}<span className="ml-2">Sifat</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth
                className="text-primary hover:text-accent cursor-pointer transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle /> {/* Add Theme Toggle */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 px-2  rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 rounded-md text-primary hover:text-accent cursor-pointer"
                >
                  {item.label}
                </Link>
              ))}
              <ThemeToggle /> {/* Add theme toggle in mobile menu too */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
