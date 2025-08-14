import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function Carousel({ items }) {
  return (
    <div className="relative rounded-[24px] border border-[#222] p-4 w-full max-w-[900px]">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        className="w-full"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full bg-[#222] rounded-[12px] flex flex-col p-4 min-h-[600px]"> {/* Fixed height */}
              {/* Image */}
              <div className="flex-1 flex items-center justify-center p-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-lg object-contain w-full h-auto max-h-[300px]"
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}