"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState("EN"); // Default language

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Transparent Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-50 pb-4 pt-8">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-end">
          {/* Logo (Left) */}
          <Link href="/" className="text-white text-3xl font-extrabold tracking-wider">
          <img src="/images/logo3.png"  alt=""  className="w-32 "/>
            Trianon
          </Link>

          {/* Right Section (Language, Links, Book Now) */}
          <div className="flex items-center space-x-8 ">
            <LanguageSwitcher language={language} setLanguage={setLanguage} />
            <NavLinks />
            <BookNowButton />
          </div>
        </div>
      </nav>

      {/* Scrolled Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 transform ${isScrolled ? "bg-black/90 shadow-lg translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo (Left) */}
          <Link href="/" className="text-orange-200 text-3xl font-extrabold tracking-wider">
            Trianon
          </Link>

          {/* Right Section (Language, Links, Book Now) */}
          <div className="flex items-center space-x-8">
            <LanguageSwitcher language={language} setLanguage={setLanguage} />
            <NavLinks />
            <BookNowButton />
          </div>
        </div>
      </nav>
    </>
  );
};

const NavLinks = () => (
  <div className="hidden md:flex space-x-3">
    <Link href="/" className="text-white text-lg font-medium hover:text-[#fddf57] transition duration-300 bg-black bg-opacity-25 px-3 py-1 rounded ">
      Hotel
    </Link>
    <Link href="/rooms" className="text-white text-lg font-medium hover:text-[#fddf57] transition duration-300 bg-black bg-opacity-25 px-3 py-1 rounded ">
      Rooms
    </Link>
    <Link href="/gallery" className="text-white text-lg font-medium hover:text-[#fddf57] transition duration-300 bg-black bg-opacity-25 px-3 py-1 rounded  ">
      Gallery
    </Link>
    <Link href="/events" className="text-white text-lg font-medium hover:text-[#fddf57] transition duration-300 bg-black bg-opacity-25 px-3 py-1 rounded ">
      Events
    </Link>
    <Link href="/location" className="text-white text-lg font-medium hover:text-[#fddf57] transition duration-300 bg-black bg-opacity-25 px-3 py-1 rounded ">
      Location
    </Link>
    <Link href="/contact" className="text-white text-lg font-medium hover:text-[#fddf57] transition duration-300 bg-black bg-opacity-25 px-3 py-1 rounded ">
      Contact
    </Link>
  </div>
);

const BookNowButton = () => (
  <Link
    href="/reservation"
    
    className="bg-[#C79D77] text-white rounded px-5 py-1 text-lg font-semibold border border-white hover:bg-[#fddf57] transition duration-300"
  >
    Book Now
  </Link>
);

const LanguageSwitcher = ({ language, setLanguage }) => (
  <select
    value={language}
    onChange={(e) => setLanguage(e.target.value)}
    className="bg-black bg-opacity-25 border border-white text-white px-3 py-1 text-lg rounded cursor-pointer hover:bg-white hover:text-[#A47C5B] transition duration-300"
  >
    <option value="EN" className="text-black">EN</option>
    <option value="FR" className="text-black">FR</option>
  </select>
);

export default Navbar;
