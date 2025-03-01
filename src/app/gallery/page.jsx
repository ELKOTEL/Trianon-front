// src/app/gallery/page.jsx
"use client";
import React from 'react';
import Banner from "../../components/Banner"
import GalleryGrid from '@/components/GalleryGrid';

const Gallery = () => {
  return (
    <div>
    <Banner title="Gallery" bgImage="/images/hero1.jpg" />
    <div className="bg-gradient-to-r from-[#5C4033] to-[#C79D77] min-h-screen text-white py-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-lg max-w-3xl mx-auto text-[#E2C8A4]">
          Discover the elegance of our luxurious rooms and amenities in our gallery.
        </p>
      </div>
      {/* Add images or components for gallery */}
    <GalleryGrid/>


    </div>
    </div>
  );
};

export default Gallery;
