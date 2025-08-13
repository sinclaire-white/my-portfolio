const Footer = () => {
  return (
    <footer className="bg-primary text-secondary py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>© {new Date().getFullYear()} Shahriyar Rahman Sifat. All rights reserved.</p>
        <p className="mt-2 text-accent">Built with React and Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
