// src/app/offers/page.jsx
"use client";

import React from 'react';
import Banner from "../../components/Banner"
import Link from 'next/link';


const Events = () => {
  return (
    <div>
    <Banner title="Events" bgImage="/images/hero1.jpg" />
    <div className="bg-gradient-to-r from-[#5C4033] to-[#C79D77] min-h-screen text-white py-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-lg max-w-3xl mx-auto text-[#E2C8A4]">
        Our conference rooms are perfect for confidential and warm meetings.
        </p>
      </div>

    </div>
    </div>
  );
};

export default Events;
