// src/components/GalleryGrid.jsx
"use client";
import React, { useState } from "react";
import { FiZoomIn, FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

const images = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero1.jpg",
  "/images/hero2.jpg",
];

const GalleryGrid = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 pb-16">
        {/* First Row - 4 Equal Square Images */}
        <div className="grid grid-cols-4 gap-4">
          {images.slice(0, 4).map((src, index) => (
            <div key={index} className="aspect-square">
              <img src={src} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
            </div>
          ))}
        </div>
  
        {/* Second Row - 3 Images (Large Left, Two Smaller Right, 75vh height) */}
        <div className="grid grid-cols-4 gap-4 mt-4" style={{ height: "75vh" }}>
          <div className="col-span-2 h-full">
            <img src={images[4]} alt="Gallery 5" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="col-span-1 h-full">
            <img src={images[5]} alt="Gallery 6" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="col-span-1 h-full">
            <img src={images[6]} alt="Gallery 7" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
  
        {/* Third Row - 3 Equal Square Images */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          {images.slice(7, 10).map((src, index) => (
            <div key={index} className="aspect-square">
              <img src={src} alt={`Gallery ${index + 8}`} className="w-full h-full object-cover rounded-lg" />
            </div>
          ))}
        </div>
  
        {/* Fourth Row - 4 Equal Width Images (75vh height) */}
        <div className="grid grid-cols-4 gap-4 mt-4" style={{ height: "75vh" }}>
          {images.slice(10, 14).map((src, index) => (
            <div key={index} className="h-full">
              <img src={src} alt={`Gallery ${index + 11}`} className="w-full h-full object-cover rounded-lg" />
            </div>
          ))}
        </div>
  
        {/* Fifth Row - Like Second Row (Large Right, Two Smaller Left, 75vh height) */}
        <div className="grid grid-cols-4 gap-4 mt-4" style={{ height: "75vh" }}>
          <div className="col-span-1 h-full">
            <img src={images[14]} alt="Gallery 15" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="col-span-1 h-full">
            <img src={images[15]} alt="Gallery 16" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="col-span-2 h-full">
            <img src={images[16]} alt="Gallery 17" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
  
        {/* Sixth Row - 3 Equal Square Images */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          {images.slice(17, 20).map((src, index) => (
            <div key={index} className="aspect-square">
              <img src={src} alt={`Gallery ${index + 18}`} className="w-full h-full object-cover rounded-lg" />
            </div>
          ))}
        </div>
  
        {/* Seventh Row - Like Fourth Row (4 Equal Width Images, 75vh height) */}
        <div className="grid grid-cols-4 gap-4 mt-4" style={{ height: "75vh" }}>
          {images.slice(20, 24).map((src, index) => (
            <div key={index} className="h-full">
              <img src={src} alt={`Gallery ${index + 21}`} className="w-full h-full object-cover rounded-lg" />
            </div>
          ))}
        </div>
  
        {/* Eighth Row - Like Second Row (Large Left, Two Smaller Right, 75vh height) */}
        <div className="grid grid-cols-4 gap-4 mt-4" style={{ height: "75vh" }}>
          <div className="col-span-2 h-full">
            <img src={images[4]} alt="Gallery 5" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="col-span-1 h-full">
            <img src={images[5]} alt="Gallery 6" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="col-span-1 h-full">
            <img src={images[6]} alt="Gallery 7" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>
    );
  };
  
  export default GalleryGrid;