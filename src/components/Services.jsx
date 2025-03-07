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
    <div id="events" className="h-screen flex flex-col items-center justify-center overflow-hidden">
      <h1 className="text-4xl font-bold mb-8 text-[#5C4033]">Nos Services</h1>
      
      {/* body */}  
      <div className='flex justify-center max-w-5xl '>  
        <div className='flex flex-col lg:flex-row gap-1 w-full'>

          <div
            className='flex flex-col flex-1   bg-shade3   bg-[#F4E1D2]'
            data-aos="fade-up"
            data-aos-delay="200"
          > 
            <div className="" >
              <img src="/images/reception2.jpeg"  alt="" className="h-[40vh] w-[30vw] rounded-tl"  />
            </div>
            <div className='p-5 pt-8 flex-1 flex flex-col gap-5 text-[#5C4033]  rounded-bl'>
              <div className=' '>
                <h1 className='text-3xl '>Réception</h1>
                <p> Un accueil chaleureux et un service personnalisé 24h/24</p>
              </div>                
            </div>
          </div>
          
          <div
            className='flex flex-col flex-1  bg-shade5  text-white bg-[#A47C5B] '
            data-aos="fade-up"
            data-aos-delay="400"
          > 
            <div>
              <img src="/images/cafe3.jpg"  alt="" className="h-[40vh] w-[30vw]"   />
            </div>
            <div className='p-5 pt-8 flex-1 flex flex-col gap-5'>
              <div className=''>
                <h1 className='text-3xl '>Cafétéria</h1>
                <p> Un espace convivial pour un café ou une collation à tout moment de la journée.</p>
              </div>                
            </div>
          </div>
          <div
            className='flex flex-col flex-1  bg-shade1  text-white '
            data-aos="fade-up"
            data-aos-delay="600"
          > 
            <div>
              <img src="/images/reception.jpg"  alt=""  className="h-[40vh] w-[30vw]  rounded-tr "  />
            </div>
            <div className='p-5 pt-8 flex-1 flex flex-col gap-5 bg-[#3A4A56] rounded-br'>
              <div className=''>
                <h1 className='text-3xl '>Événements</h1>
                <p> Organisez votre événement privé ou professionnel dans notre restaurant élégant, avec un service personnalisé. </p>
              </div>                
              <a href="/events" className=' flex w-full justify-end bg-shade7  h-10  mt-auto  underline  pr-5'>
                <h1 className=' text-white   text-lg whitespace-nowrap text-center'>Découvrir</h1>  
              </a> 
            </div>
          </div>


        </div>
      </div>  
    </div>
  );
};

export default EventsSection;
