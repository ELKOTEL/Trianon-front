import React from 'react';
import Link from 'next/link';


const Welcome = () => {
  return (
    <div id='welcome' className="h-screen w-full bg-[#F4E1D2] flex items-center justify-center">
      {/* Container for image and content */}
      <div className="flex items-center justify-center max-w-6xl mx-auto p-4">
        
        {/* Image on the left */}
        <div className="flex-shrink-0 w-1/3 h-[75vh] overflow-hidden">
          <img 
            src="/images/reception.jpg"  // Replace with your image path
            alt="Hotel"
            className="w-full h-full object-cover rounded-lg animate-zoomInAb"
          />
        </div>
        
        {/* Stylish content on the right */}
        <div className="w-1/2 pl-7">
          <div className="text-[#5C4033]">
            <div className="flex mb-4">
              <span className="text-yellow-500 mr-2">★</span>
              <span className="text-yellow-500 mr-2">★</span>
              <span className="text-yellow-500">★</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Welcome to the Trianon Hotel Paris</h2>
            <p className="text-xl mb-6">
              An elegant atmosphere of calm in Saint Ouen .
            </p>
            <Link href="/gallery" className="text-[#5C4033] underline font-semibold">
              EXPLORE THE HOTEL
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
