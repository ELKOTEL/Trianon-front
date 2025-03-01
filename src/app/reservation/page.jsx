"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Banner from "../../components/Banner";

const Reservation = () => {
  const router = useRouter();
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);

  const today = new Date().toISOString().split("T")[0];

  const handleSearch = () => {
    if (!checkInDate || !checkOutDate) {
      alert("Please select both check-in and check-out dates.");
      return;
    }

    localStorage.setItem(
      "searchParams",
      JSON.stringify({ checkInDate, checkOutDate, numAdults, numChildren })
    );

    router.push("/reservation/roomselection");
  };

  return (
    <div>
      <Banner title="Reservation" bgImage="/images/hero1.jpg" />
      <div className="bg-gradient-to-r from-[#5C4033] to-[#C79D77] min-h-screen text-white py-12">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-[#F4E1D2]">
            Book Your Stay
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-[#E2C8A4]">
            Select your dates and number of guests to find the perfect room for
            your stay.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-2xl text-[#5C4033]">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2">
                Check-in Date
              </label>
              <input
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                min={today}
                className="w-full p-3 rounded-lg border-2 border-[#E2C8A4] focus:ring-2 focus:ring-[#F4E1D2]"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2">
                Check-out Date
              </label>
              <input
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                min={checkInDate || today}
                className="w-full p-3 rounded-lg border-2 border-[#E2C8A4] focus:ring-2 focus:ring-[#F4E1D2]"
                required
              />
            </div>

            <div className="flex gap-6 mb-6">
              <div className="w-1/2">
                <label className="block text-lg font-semibold mb-2">
                  Adults
                </label>
                <input
                  type="number"
                  min="1"
                  value={numAdults}
                  onChange={(e) => setNumAdults(e.target.value)}
                  className="w-full p-3 rounded-lg border-2 border-[#E2C8A4] focus:ring-2 focus:ring-[#F4E1D2]"
                />
              </div>

              <div className="w-1/2">
                <label className="block text-lg font-semibold mb-2">
                  Children
                </label>
                <input
                  type="number"
                  min="0"
                  value={numChildren}
                  onChange={(e) => setNumChildren(e.target.value)}
                  className="w-full p-3 rounded-lg border-2 border-[#E2C8A4] focus:ring-2 focus:ring-[#F4E1D2]"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={handleSearch}
              className="w-full py-3 px-6 bg-[#F4E1D2] text-[#5C4033] font-semibold rounded-lg shadow-lg hover:bg-[#E2C8A4] transition duration-300"
            >
              Search Rooms
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
