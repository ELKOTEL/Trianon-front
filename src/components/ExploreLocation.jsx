import React from "react";
import Link from "next/link";

const ExploreLocation = () => {
  return (
    <div className="relative h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url("/images/location.jpg")' }}>
      {/* Overlay content */}
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay for better text visibility */}
      
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Un Emplacement Exceptionnel</h2>
          <p className="text-lg mb-8">
          Situé en plein centre de Saint-Ouen, à quelques pas de la station de métro et à proximité immédiate de la mairie, l’Hôtel Trianon bénéficie d’un emplacement stratégique, idéal pour explorer la ville. 
          </p>
          <Link href="/location" className="inline-block text-[#F4E1D2] underline font-semibold text-xl">
          Découvrir la Localisation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreLocation;
