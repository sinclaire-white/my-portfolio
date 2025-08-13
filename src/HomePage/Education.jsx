const Education = () => {
  return (
    <section id="education" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">Education</h2>
        <div className="bg-neutral p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
          <div className="flex items-start gap-6">
            {/* Logo/Initial */}
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-accent text-secondary font-bold text-lg">
              KUET
            </div>
            {/* Details */}
            <div>
              <h3 className="text-xl font-semibold text-primary">Khulna University of Engineering & Technology</h3>
              <p className="text-primary mb-2">Bachelor of Engineering - Civil Engineering</p>
              <p className="text-primary">Feb 2019 - Jul 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
