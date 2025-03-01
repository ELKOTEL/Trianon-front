import React from "react";
import Link from "next/link";

const ExploreLocation = () => {
  return (
    <div className="relative h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url("/images/location.jpg")' }}>
      {/* Overlay content */}
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay for better text visibility */}
      
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">An Exceptional Location</h2>
          <p className="text-lg mb-8">
            Discover our hotel's perfect location in the heart of the city, surrounded by stunning attractions and vibrant culture.
          </p>
          <Link href="/location" className="inline-block text-[#F4E1D2] underline font-semibold text-xl">
            Explore the Location
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreLocation;
