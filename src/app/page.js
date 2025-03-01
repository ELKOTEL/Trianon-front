// src/app/page.jsx
"use client";

import React from 'react';
import Link from 'next/link';
import Hero from "../components/Hero"
import Welcome from "../components/Welcome"
import RoomsSection from "../components/RoomsSection"
import ExploreLocation from "../components/ExploreLocation"
import EventsSection from "../components/EventsSection"



const Home = () => {

  return (
    <div className="bg-white text-white">
      <Hero/>
      <Welcome/>
      <RoomsSection/>
      <ExploreLocation/>
      <EventsSection/>

      {/*  Section */}
      <section className="py-16 bg-[#C79D77] text-white">

      </section>
    </div>
  );
};

export default Home;
