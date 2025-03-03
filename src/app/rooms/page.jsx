"use client";
import { useEffect, useState } from "react";
import { fetchRooms, urlFor } from "../../lib/sanity"; // Fetch room data
import { FaBed, FaUser, FaRulerCombined } from "react-icons/fa"; // Room icons
import Banner from "../../components/Banner"; // Banner Component
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination ,Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    async function fetchRooms() {
      try {
        const response = await fetch("/api/getRooms"); // Fetch from API
        const data = await response.json();
        setRooms(data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    }
    fetchRooms();
  }, []);

  const handleShowMore = () => {
    setShowMore(!showMore); // Toggle the rest of amenities
  };

  const handleReadMore = () => {
    setReadMore(!readMore); // Toggle the 'Read More' content
  };

  return (
    <div>
      <Banner title="Our Rooms" bgImage="/images/hero1.jpg" />
      <div className="bg-gradient-to-r from-amber-600 to-[#C79D77] min-h-screen text-white pt-10">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <p className="text-lg max-w-2xl mx-auto text-white">
            Discover our luxurious rooms designed for the ultimate relaxation. Each room is equipped with premium amenities to make your stay unforgettable.
          </p>
        </div>

        {/* Rooms Section */}
        <div>
          {rooms.map((room, index) => (
            <div
              key={room._id}
              className={`flex flex-col gap-8 py-12 px-20 ${index % 2 === 0 ? "bg-white" : "bg-white"}`}
            >
              {/* Room Image Section (2 Images on Top) */}
              <div className="flex mb-6 relative">
                {/* Left Rectangular Image (1/3 width) */}
                <div className={`w-1/3 h-[80vh] pt-32 ${index % 2 === 0 ? "" : "order-last"}`}>
                  <div className={`bg-amber-600 h-full flex items-end pl-4 pb-4 ${index % 2 === 0 ? "pl-4" : "pr-4 justify-end"}`}>
                    <h1 className="text-[#F4E1D2] text-1 font-serif tracking-wider">Trianon Hotel</h1>
                  </div>

                  {/* Overlay box with room description */}
                  <div className={`absolute top-10 w-1/3 px-10 py-16 bg-white z-10 shadow-xl ${index % 2 === 0 ? "left-20" : "right-20"}`}>
                    <h3 className="text-2xl font-semibold text-[#5C4033] mb-4">{room.name}</h3>
                    <div className="pl-20">
                      <p className="text-lg text-[#5C4033] mb-6">
                        The Apple TV's cutting-edge technology and free Wi-Fi connection make these rooms ideal for business travelers.
                      </p>

                      {/* Expandable content (appears when 'Read More' is clicked) */}
                      {readMore && (
                        <p className="text-lg text-[#5C4033] mb-6">
                          The Apple TV's cutting-edge technology and free Wi-Fi connection make these rooms ideal for business travelers.
                          The Apple TV's cutting-edge technology and free Wi-Fi connection make these rooms ideal for business travelers.
                        </p>
                      )}

                      <div className="flex justify-between">
                        <button
                          onClick={handleReadMore}
                          className="inline-block text-[#5C4033] underline font-semibold"
                        >
                          {readMore ? "SHOW LESS" : "READ MORE"}
                        </button>
                        <a
                          href="/reservation"
                          className="inline-block text-[#5C4033] underline font-semibold"
                        >
                          BOOK NOW
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Square Image (2/3 width) */}
                <div className={`w-2/3 flex flex-col justify-between ${index % 2 === 0 ? "" : "order-first"}`}>
                <div>
                <Swiper
                  modules={[ Pagination, Autoplay]}
                  spaceBetween={10}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  className="w-full h-full shadow-xl"
                >
                  {room.images && room.images.length > 0 ? (
                    room.images.map((img, imgIndex) => (
                      <SwiperSlide key={imgIndex}>
                        <img
                          src={urlFor(img).width(800).url()}
                          alt={`Room ${room.name}`}
                          className="w-full h-full object-cover   "
                        />
                      </SwiperSlide>
                    ))
                  ) : (
                    <p>No images available</p>
                  )}
                </Swiper>
                </div>
                  {/* Room Info Icons (Persons, Bed Type, Surface) */}
                  <div className="flex gap-4 items-center text-lg pl-10 text-[#C79D77] ">
                    <div className="flex items-center gap-2">
                      <FaUser />
                      <span>{room.persons}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaBed />
                      <span>{room.bed}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaRulerCombined />
                      <span>{room.surface} sqm</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Room Details Below Images */}
              <div className="flex flex-col items-center text-center">
                {/* High-End Amenities Section */}
                <div className="text-black">
                  <h4 className="text-xl font-semibold mb-2">High-end Amenities</h4>
                  <p className="text-lg mb-4">{room.description}</p>

                  {/* Amenities List (No background, minimalist design) */}
                  <div className="grid grid-cols-2 gap-x-20 gap-y-4">
                    {room.amenities &&
                      room.amenities.slice(0, 4).map((amenity, index) => (
                        <li key={index} className="text-sm text-start">{amenity}</li>
                      ))}
                    {showMore && (
                      <div className="grid grid-cols-2 gap-x-20 gap-y-4">
                        {room.amenities.slice(4).map((amenity, index) => (
                          <li key={index} className="text-sm text-start">{amenity}</li>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* See More Equipment Link */}
                  {room.amenities && room.amenities.length > 4 && (
                    <div>
                      <button
                        className="text-[#C79D77] underline"
                        onClick={handleShowMore}
                      >
                        {showMore ? "Show Less" : "See More Equipment"}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
