import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#3a2410] text-white text-center py-10">
      <div className="max-w-4xl mx-auto px-5">

        {/* Luxury Hotel Branding */}
        <h2 className="text-3xl font-extrabold tracking-wider text-[#F4E1D2] mb-3">
        Trianon Hotel
        </h2>

        {/* Contact Info with Vertical Separators */}
        <div className="flex flex-wrap justify-center items-center text-[#F4E1D2] text-sm font-light space-x-6">
          <span>15 Bd Victor Hugo, 93400 Saint-Ouen-sur-Seine, France</span>
          <span className="w-px h-4 bg-[#F4E1D2]"></span>
          <a href="tel:+33122113300" className="hover:text-white transition duration-300">
          +33 7 71 58 89 24

          </a>
          <span className="w-px h-4 bg-[#F4E1D2]"></span>
          <a href="mailto:contact@hotelarmoniparis.com" className="hover:text-white transition duration-300">
            contact@trianonhotel.com
          </a>
        </div>

        {/* Horizontal Line */}
        <div className="w-20 mx-auto border-b border-[#F4E1D2] my-6"></div>

        {/* Privacy Policy & Terms */}
        <div className="flex justify-center space-x-6 text-[#F4E1D2] text-sm">
          <Link href="/privacy-policy" className="hover:text-white transition duration-300">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white transition duration-300">
            Terms of Service
          </Link>
        </div>

        {/* Copyright */}
        <p className="mt-4 text-xs text-[#F4E1D2]">
          © 2025 Luxury Hotel | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
