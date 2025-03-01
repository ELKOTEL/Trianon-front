// src/app/location/page.jsx
"use client";
import React from 'react';
import Banner from "../../components/Banner"
import Map from "../../components/Map";

const Location = ({ title, bgImage }) => {
  return (
    <div>
        <Banner title="Location" bgImage="/images/hero1.jpg" />
        <div className="max-w-6xl mx-auto my-10">
        <Map/>
      </div>

    </div>
  );
};

export default Location;