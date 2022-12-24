import React from "react";
import { motion } from "framer-motion";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const teamMembers = [
  {
    avatar: "images/avatars/team-1.jpg",
    name: "Agus R.",
    role: "Web & UI Designer",
    detail: ["UX Design", "Web Design"],
  },
  {
    avatar: "images/avatars/team-2.jpg",
    name: "Kathrina T.",
    role: "Copywriter",
    detail: ["Sales Copy", "Copywriting"],
  },
  {
    avatar: "images/avatars/team-3.jpg",
    name: "Daniela D.",
    role: "Professional Marketer",
    detail: ["Marketing", "Business Development"],
  },
  {
    avatar: "images/avatars/team-1.jpg",
    name: "Agus R.",
    role: "Web & UI Designer",
    detail: ["UX Design", "Web Design"],
  },
  {
    avatar: "images/avatars/team-2.jpg",
    name: "Kathrina T.",
    role: "Copywriter",
    detail: ["Sales Copy", "Copywriting"],
  },
  {
    avatar: "images/avatars/team-3.jpg",
    name: "Daniela D.",
    role: "Professional Marketer",
    detail: ["Marketing", "Business Development"],
  },
];

const Freelancers = () => {
  return (
    <div className="flex justify-center mb-10">
      <motion.div
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col container mt-72 md:mt-20"
      >
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-extrabold text-gray-800 text-left">
            Explore some of our Featured Freelancers
          </h1>
          <div className="flex items-center justify-center">
            <button className="prev-btn px-3 py-2 bg-violet-100 text-violet-700 rounded text-lg font-bold mr-4">
              ←
            </button>
            <button className="next-btn px-3 py-2 bg-violet-100 text-violet-700 rounded text-lg font-bold">
              →
            </button>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          style={{ overflow: "hidden" }}
          className="w-full mt-6"
          loop
          navigation={{
            nextEl: ".prev-btn",
            prevEl: ".next-btn",
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
            1536: {
              slidesPerView: 4,
            },
          }}
        >
          {teamMembers.map((member, j) => (
            <SwiperSlide key={j}>
              <div className="slider-item bg-white p-5 rounded-lg shadow-lg my-4">
                <div className="flex flex-col">
                  <div className="flex items-center justify-start">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-12 md:w-20 rounded-full"
                    />
                    <div className="flex flex-col items-start ml-3">
                      <h2 className="text-blue-900 text-2xl">{member.name}</h2>
                      <p className=" text-gray-400">{member.role}</p>
                    </div>
                  </div>
                  <div className="flex justify-start mt-3">
                    {member.detail.map((d, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 border border-gray-400 text-gray-400 rounded mr-2"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Freelancers;
