import React from "react";
import Slider from "react-slick"; // Import the slick carousel
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; // Add the styles

const roomData = [
  {
    id: 1,
    img: "/images/room4.jpg", // Replace with actual room images
    name: "Luxury Suite",
  },
  {
    id: 2,
    img: "/images/room2.jpg", // Replace with actual room images
    name: "Executive Room",
  },
  {
    id: 3,
    img: "/images/room3.jpg", // Replace with actual room images
    name: "Standard Room",
  },
  {
    id: 4,
    img: "/images/room1.jpg", // Replace with actual room images
    name: "Presidential Suite",
  },
];

const RoomsSection = () => {
  const settings = {
    dots: true, // Enable dots navigation below the carousel
    infinite: true, // Allow infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Show 1 slide at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed
    dotsClass: "slick-dots slick-thumb", // Custom styling for the dots
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Carousel with room images */}
      <Slider {...settings}>
        {roomData.map((room) => (
          <div key={room.id} className="relative">
            <img
              src={room.img}
              alt={room.name}
              className="w-full h-[75vh] object-cover "
            />
            <div className="absolute inset-0 bg-[#C79D77] opacity-0"></div>
          </div>
        ))}
      </Slider>

      {/* Overlay box with room description */}
      <div className="absolute top-14 left-0 w-1/3 bg-black/50 p-8 z-10 shadow-xl">
        <h3 className="text-2xl font-semibold text-white mb-4">
        Chambres Modernes
        </h3>
        <p className="text-lg text-white mb-6">
        Nos chambres allient confort, élégance et praticité pour s’adapter à tous les séjours. Que vous voyagiez seul, en couple ou en famille, chaque espace est soigneusement conçu pour offrir une expérience à la fois agréable et relaxante. Profitez d’un hébergement raffiné, pensé pour votre bien-être, dans une atmosphère chaleureuse et accueillante.
        </p>
        <a
          href="/rooms"
          className="inline-block text-white  underline font-semibold"
        >
          VOIR TOUTES LES CHAMBRES
        </a>
      </div>
    </div>
  );
};

export default RoomsSection;
