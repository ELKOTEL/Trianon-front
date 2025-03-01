// src/app/offers/page.jsx
"use client";

import React, { useState } from "react";
import Banner from "../../components/Banner";
import Link from "next/link";

const Events = () => {
  const [readMore, setReadMore] = useState(false);

  const handleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <div>
      <Banner title="Events" bgImage="/images/hero1.jpg" />
      <div className="bg-gradient-to-r from-[#5C4033] to-[#C79D77] min-h-screen text-white">
        {/* First Section: Meeting Rooms */}
        <div className="bg-[#E2C8A4]">
          <div className="max-w-2xl mx-auto py-16 text-center">
            <h2 className="text-3xl font-semibold text-[#F4E1D2] mb-6">Events Room</h2>
            <p className="text-lg text-[#5C4033] mb-6">
              The 28m² South Bank room is perfect for confidential and warm meetings
              and can be converted into a total space, the Brixton Room, of 75m². They can
              accommodate up to 18 and 40 people respectively.
            </p>
            <p className="text-lg text-[#5C4033] mb-6">
              Flexible, they adapt to the needs of each one with different arrangements
              (class, theatre, U-shape, meeting or cocktail). Our conference rooms are
              equipped with the latest technology and unlimited free Wi-Fi.
            </p>
            <p className="text-lg text-[#5C4033] mb-6">
              We also offer catering, depending on your wishes, from a quick meal by
              our caterer to a friendly meal in a nearby restaurant.
            </p>
            <div className="text-center">
              <Link
                href="#proposal_form"
                className="text-[#C79D77] underline rounded px-6 py-3 font-semibold hover:text-[#5C4033] transition duration-300"
              >
                Organize your meeting
              </Link>
            </div>
          </div>
        </div>

        {/* Second Section: Room and Equipment */}
        <div className="px-20 py-16 bg-[#C79D77]">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column: Image and Equipment List */}
            <div className="col-span-2">
              <div className="mb-6">
                <img
                  src="/images/meeting1.jpg"
                  alt="Meeting Room"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-semibold text-[#F4E1D2] mb-4">Equipment</h3>
              <div className="flex flex-col gap-10">
                <ul className="text-lg text-[#E2C8A4] flex">
                  <li className="flex-1">Free Wi-Fi without participant limit</li>
                  <li className="flex-1">Large screen two meters by two meters with direct connection to video projector</li>
                </ul>
                <ul className="text-lg text-[#E2C8A4] flex">
                  <li className="flex-1">Perfect sound system without Microphone</li>
                  <li className="flex-1">Permanent break (welcome coffee included, varied break and with the Seasons)</li>
                </ul>
                <ul className="text-lg text-[#E2C8A4] flex">
                  <li className="flex-1">Sufficient electrical connectivity</li>
                  <li className="flex-1">Access to unlimited hot drinks (coffee beans, cappuccino, various tea)</li>
                </ul>
              </div>
            </div>

            {/* Right Column: Room Arrangement */}
            <div>
              <h3 className="text-2xl font-semibold text-[#F4E1D2] mb-4">Meeting Arrangement</h3>
              <p className="text-lg text-[#E2C8A4] mb-6">Room South Bank - 28m²</p>
              <p className="text-lg text-[#E2C8A4] mb-6">18 persons + 2 speakers</p>
              <p className="text-lg text-[#E2C8A4] mb-6">
                A few minutes from the Palais des Congrès, you will find in the
                South Bank room a chic and comfortable place created by designer
                Oscar ONO.
              </p>
              <p className="text-lg text-[#E2C8A4] mb-6">
                You will work there differently in a serene and productive
                atmosphere. In quietness, you will discover a warm and friendly
                place to have your meetings, steering committees, and training sessions.
              </p>

              {readMore && (
                <p className="text-lg text-[#E2C8A4] mb-6">
                  You will work there differently in a serene and productive
                  atmosphere. In quietness, you will discover a warm and friendly
                  place to have your meetings, steering committees, and training sessions.
                </p>
              )}

              <div className="flex flex-col gap-y-2">
                <button
                  onClick={handleReadMore}
                  className="inline-block text-[#5C4033]/70 hover:text-[#5C4033] underline text-left"
                >
                  {readMore ? "SHOW LESS" : "READ MORE"}
                </button>

                <Link
                  href="#proposal_form"
                  className="text-[#5C4033]/70 underline rounded font-medium hover:text-[#5C4033] transition duration-300"
                >
                  REQUEST A PROPOSAL
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Third Section: Proposal Form */}
        <div className="bg-[#E2C8A4]" id="proposal_form">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-semibold text-[#F4E1D2] mb-6 text-center">Request a Proposal</h2>
            <p className="text-lg text-[#5C4033] mb-6  text-center">
              Fill out the form below and we will be in touch with you shortly.
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {["Company Name", "First Name*", "Last Name*", "Email*", "Telephone*", "Event Date", "Number of Persons", "Kind of Event"].map((label, index) => (
                  <div key={index}>
                    <label className="text-[#F4E1D2] text-lg">{label}</label>
                    <input
                      type={label === "Event Date" ? "date" : "text"}
                      className="w-full p-3 border-2 border-[#E2C8A4] rounded-lg focus:ring-2 focus:ring-[#F4E1D2]"
                      required
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="text-[#F4E1D2] text-lg">Your Message</label>
                <textarea
                  className="w-full p-3 border-2 border-[#E2C8A4] rounded-lg focus:ring-2 focus:ring-[#F4E1D2]"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="border border-[#C79D77] text-[#C79D77] py-3 px-6 rounded-lg font-semibold hover:bg-[#C79D77] hover:text-[#E2C8A4] transition duration-300"
                >
                  Book Your Meeting
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
