// src/app/page.jsx
"use client";

import React from 'react';
import Link from 'next/link';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'; // Import default styles
import { TfiArrowCircleDown } from "react-icons/tfi";


const images = [
  {
    id: 1,
    url: '/images/hero1.jpg',
    title: "Modern rooms",
    description: "Spacious and stylish rooms offering ultimate comfort."
  },
  {
    id: 2,
    url: '/images/hero3.jpg',
    title: "Lovely location",
    description: "Located in the heart of the city with beautiful views."
  },
  {
    id: 3,
    url: '/images/hero2.jpg',
    title: "Schedule meetings",
    description: "State-of-the-art conference rooms for your business needs."
  },
];


const Hero = () => {

  return (
    <div>

      <div className='relative'>
      <div className="h-screen w-full ">        
        {/* Background image slideshow */}
        <Fade duration={3000} transitionDuration={1000} infinite arrows={false}>
          {images.map((each, index) => (
            <div
              key={index}
              className="h-screen w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${each.url})` }}
            ></div>
          ))}
        </Fade>
        
        {/* bg Overlay */}
        <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
        {/* Content Overlay */}
        <div className=" absolute inset-0 flex items-center justify-center z-10 ">
        <div className="z-10 text-center">
          <h1 className="text-5xl font-extrabold mb-6 text-[#ffdfb1]">
            Welcome to Trianon Hotel
          </h1>
          <p className="text-xl mb-6 text-[#fccd8c]">
            Experience elegance and comfort in the heart of the city
          </p>
          <Link href="/reservation">
            <button className="bg-[#F4E1D2] text-[#5C4033] font-semibold py-3 px-6 rounded-lg hover:bg-[#E2C8A4] transition duration-300">
              Book Your Stay
            </button>
          </Link>
        </div>
        </div>
      </div>
      </div>
      <div className="absolute  z-10  flex w-[70px] h-[70px]  left-[50%] -ml-[35px] -mt-[70px] animate-float ">
        <a
          href="#welcome"
          className="flex items-center  w-[70px] h-[70px] text-4xl  text-shade2 justify-center"
        >
          <TfiArrowCircleDown />
        </a>
      </div>
    </div>
  );
};

export default Hero;
