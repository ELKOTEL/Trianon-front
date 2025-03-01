"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Banner from "../../../components/Banner";
import { urlFor } from "../../../lib/sanity"; // Fetch room data

const RoomSelection = () => {
  const router = useRouter();
  const [searchParams, setSearchParams] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const savedParams = localStorage.getItem("searchParams");
      if (savedParams) {
        setSearchParams(JSON.parse(savedParams));
      }
    }, 100);
  }, []);

  useEffect(() => {
    if (!searchParams) return;

    const fetchRooms = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/getRooms");
        const data = await response.json();
        setRooms(data);

        const { checkInDate, checkOutDate, numAdults, numChildren } = searchParams;
        const totalPeople = Number(numAdults) + Number(numChildren);

        const availableRooms = data.filter((room) => {
          const reservedDates = room.reservedDates || [];
          return (
            room.persons >= totalPeople &&
            !reservedDates.some((date) => isDateInRange(date, checkInDate, checkOutDate))
          );
        });

        setFilteredRooms(availableRooms);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, [searchParams]);

  const isDateInRange = (date, checkInDate, checkOutDate) => {
    if (!checkInDate || !checkOutDate) return false;
    const roomDate = new Date(date);
    return roomDate >= new Date(checkInDate) && roomDate <= new Date(checkOutDate);
  };

  const handleBookRoom = (room) => {
    if (!searchParams) return;

    localStorage.setItem(
      "bookingDetails",
      JSON.stringify({
        ...searchParams,
        roomName: room.name,
        roomPrice: room.price,
      })
    );

    router.push("/reservation/checkout");
  };

  return (
    <div>
      <Banner title="Available Rooms" bgImage="/images/hero1.jpg" />
      <div className="bg-gradient-to-r from-[#5C4033] to-[#C79D77] min-h-screen text-white py-12">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-[#F4E1D2]">Select Your Room</h2>
          {searchParams ? (
            <p className="text-lg max-w-3xl mx-auto text-[#E2C8A4]">
              🏨 <strong>Check-in:</strong> {searchParams.checkInDate} | 
              <strong> Check-out:</strong> {searchParams.checkOutDate} <br />
              👨‍👩‍👧‍👦 <strong>Guests:</strong> {searchParams.numAdults} Adults, {searchParams.numChildren} Children
            </p>
          ) : (
            <p className="text-lg text-[#E2C8A4]">Loading search details...</p>
          )}
        </div>

        <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-2xl text-[#5C4033]">
          {loading ? (
            <p className="text-center text-lg text-[#5C4033]">Loading rooms...</p>
          ) : filteredRooms.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredRooms.map((room) => (
                <div key={room._id} className="border rounded-lg shadow-lg overflow-hidden">
                  <img src={urlFor(room.images[0]).width(800).url()} alt={room.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-[#5C4033]">{room.name}</h3>
                    <p className="text-lg text-[#775A45] mt-2">{room.description}</p>
                    <p className="text-xl text-[#C79D77] font-bold mt-3">${room.price} per night</p>
                    <button
                      onClick={() => handleBookRoom(room)}
                      className="mt-4 w-full py-3 px-6 bg-[#F4E1D2] text-[#5C4033] font-semibold rounded-lg shadow-lg hover:bg-[#E2C8A4] transition duration-300"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-lg text-red-600 font-semibold">No rooms available for your selected dates.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomSelection;
