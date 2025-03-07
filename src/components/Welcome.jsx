import React from 'react';
import {useState } from "react";
import Link from 'next/link';


const Welcome = () => {
    const [readMore, setReadMore] = useState(false);
    const handleReadMore = () => {
      setReadMore(!readMore); // Toggle the 'Read More' content
    };
  return (
    <div id='welcome' className=" min-h-screen  w-full bg-[#F4E1D2] flex items-center justify-center">
      {/* Container for image and content */}
      <div className="flex items-start justify-center max-w-6xl mx-auto lp-4 py-20 ">
        
        {/* Image on the left */}
        <div className="flex-shrink-0 w-[40%] h-[85vh] overflow-hidden rounded-lg ">
          <img 
            src="/images/reception.jpg"  // Replace with your image path
            alt="Hotel"
            className="w-full h-full object-cover animate-zoomInAb"
          />
        </div>
        
        {/* Stylish content on the right */}
        <div className="w-1/2 pl-7 pt-28">
          <div className="text-[#5C4033]">
            {/* <div className="flex mb-4">
              <span className="text-yellow-500 mr-2">★</span>
              <span className="text-yellow-500 mr-2">★</span>
              <span className="text-yellow-500">★</span>
            </div> */}
            <h2 className="text-4xl font-bold mb-4">Vivez l'expérience inoubliable du Trianon Hotel à Paris.</h2>
            <p className="text-md mb-6">
              Une atmosphère élégante de calme à Saint-Ouen.
            </p>
            <p className="text-md mb-6">
            l'Hôtel Trianon vous offre une hospitalité exceptionnelle, un cadre agréable et un service attentif ,
            Réservez dès maintenant et laissez-vous séduire par l'élégance et le confort du Trianon !
            </p>
                                  {/* Expandable content (appears when 'Read More' is clicked) */}
                                  {readMore && (
                                    <div>
            <h2 className="text-2xl font-bold mb-4">Pourquoi "Trianon" ?</h2>
            <p className="text-md mb-6">
            Le nom Trianon évoque à la fois l’élégance et l’histoire. Inspiré du célèbre domaine de Versailles, le Trianon est synonyme de raffinement, de sérénité et de prestige. En séjournant chez nous, vous profitez d’un havre de paix au cœur de la ville, où chaque détail est pensé pour votre bien-être.
            Hôtel Trianon – Votre confort, notre priorité.
            </p>
                                    </div>
                      )}

            <button onClick={handleReadMore} className="text-[#5C4033] underline font-semibold">
            {readMore ? "SHOW LESS" : "LIRE LA SUITE"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
