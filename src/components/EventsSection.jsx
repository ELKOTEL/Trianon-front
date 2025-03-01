"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [
  "/images/meeting2.jpg",
  "/images/meeting1.jpg",
  "/images/meeting3.jpg",
];

const EventsSection = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <div id="events" className="h-screen w-full bg-[#F4E1D2] flex items-center justify-center">
      {/* Container for image and content */}
      <div className="flex items-center justify-center max-w-6xl mx-auto p-4">
        
        {/* Image Slider on the Left */}
        <div className="flex-shrink-0 w-1/2 h-[75vh] relative overflow-hidden">
          <img
            src={images[current]}
            alt="Meeting Room"
            className="w-full h-full object-cover rounded-lg transition-all duration-500"
          />
        </div>

        {/* Stylish content on the right */}
        <div className="w-1/2 pl-8 flex flex-col justify-center">
          <div className="text-[#5C4033]">
            <h2 className="text-4xl font-bold mb-4">Events Room</h2>
            <p className="text-xl mb-6">
              Our conference rooms are perfect for confidential and warm meetings. They can accommodate up to 18 and 40 people respectively. Equipped with the latest technology and unlimited free Wi-Fi, we also offer catering.
            </p>
            <Link href="/events" className="text-[#5C4033] underline font-semibold">
              EXPLORE  EVENTS ROOM
            </Link>
          </div>

          {/* Navigation Arrows Below the Text */}
          <div className="flex items-center justify-start mt-6 space-x-4">
            <button onClick={prevSlide} className="text-[#5C4033] text-2xl p-2 rounded-full  shadow-lg">
              <FaArrowLeft />
            </button>
            <button onClick={nextSlide} className="text-[#5C4033] text-2xl p-2 rounded-full  shadow-lg">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
