import React from 'react';

const Banner = ({ title, bgImage }) => {
  return (
    <div 
      className="w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black bg-opacity-50 text-white text-center p-6 rounded-lg">
        <h1 className="text-5xl font-bold">{title}</h1>
      </div>
    </div>
  );
};

export default Banner;
