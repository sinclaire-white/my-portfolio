import Lottie from "lottie-react";
import BookLoading from "../assets/Book loading.json"


const Education = () => {
  return (
    <section id="education" className="py-20">
      <h2 className="text-4xl font-bold text-primary text-center mb-12">
            Education
          </h2>
      <div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 
        grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        
        {/* Left Column - Education List */}
        <div>
          

          <div className="space-y-8">
            {/* KUET */}
            <div className="p-6 rounded-xl shadow-lg flex items-start gap-6">
              <img
                src="https://i.ibb.co.com/20b8z1r3/images.png"
                alt="KUET Logo"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold text-primary">
                  Khulna University of Engineering & Technology
                </h3>
                <p className="text-base">Bachelor of Engineering - Civil Engineering</p>
                <p className="text-sm">2019 - 2024</p>
              </div>
            </div>

            {/* BAF Shaheen College */}
            <div className="p-6 rounded-xl shadow-lg flex items-start gap-6">
              <img
                src="https://i.ibb.co.com/GQ58fMwW/Seal-of-BAF-Shaheen-College-Dhaka-svg.png"
                alt="BAF Shaheen College Logo"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold text-primary">
                  Bangladesh Air Force Shaheen College, Dhaka
                </h3>
                <p className="text-base">Higher Secondary Certificate</p>
                <p className="text-sm">2016 - 2018</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Lottie Animation Placeholder */}
        <div className="flex justify-center items-center">
          
            {/* Lottie animation will go here */}
            <Lottie animationData={BookLoading} loop={true}></Lottie>
          
        </div>
      </div>
    </section>
  );
};

export default Education;
