"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const CTASidebar = () => {
  return (
    <div className="fixed bottom-8 right-4 flex flex-col space-y-2 z-50">
      {/* Facebook */}
      <CTAIcon
        href="https://www.facebook.com/"
        icon={<FaFacebookF />}
        bgColor="bg-[#3A4A56]"
      />
      {/* Instagram */}
      <CTAIcon
        href="https://www.instagram.com/"
        icon={<FaInstagram />}
        bgColor="bg-[#8B5E3B]"
      />
      {/* Google Map */}
      <CTAIcon
        href="https://www.google.com/maps"
        icon={<FaMapMarkerAlt />}
        bgColor="bg-[#5C4033]"
      />
      {/* Phone Call */}
      <CTAIcon
        href="tel:+123456789"
        icon={<FaPhone />}
        bgColor="bg-[#3A4A56]"
      />
      {/* Email */}
      <CTAIcon
        href="mailto:info@example.com"
        icon={<FaEnvelope />}
        bgColor="bg-[#3A4A56] text-[#5C4033]"
      />
    </div>
  );
};

const CTAIcon = ({ href, icon, bgColor }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-8 h-8 flex items-center justify-center text-white text-md rounded-lg 
        ${bgColor} 
        shadow-[4px_4px_10px_rgba(0,0,0,0.4)] 
        hover:shadow-[6px_6px_14px_rgba(0,0,0,0.6)] 
        hover:scale-110 transition-all duration-300`}
    >
      {icon}
    </a>
  );
};

export default CTASidebar;
