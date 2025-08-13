import React from "react";
// Import Swiper React components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

// Your icons
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function Carousel({ items }) {
  return (
    <div
      className="relative rounded-[24px] border border-[#222] p-4"
      style={{
        maxWidth: "900px",
        maxHeight: "550px",
        width: "100%",
        height: "100%",
      }}
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        className="w-full h-full"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full bg-[#222] rounded-[12px] flex overflow-hidden p-4">
              <div className="flex w-full h-full">
                {/* Left side: Image */}
                <div className="w-1/2 p-2 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-lg object-contain w-full h-full"
                  />
                </div>

                {/* Right side: Project details */}
                <div className="w-1/2 p-2 flex flex-col justify-between">
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
                          <FiExternalLink size={20} />
                        </a>
                        <a
                          href={item.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-primary"
                          title="GitHub Repo"
                        >
                          <FiGithub size={20} />
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
                      <ul className="list-disc list-inside text-sm text-gray-300">
                        {item.features.slice(0, 3).map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}