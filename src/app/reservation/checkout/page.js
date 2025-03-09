"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Banner from "../../../components/Banner";

const Checkout = () => {
  const router = useRouter();
  const [bookingDetails, setBookingDetails] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [guestInfo, setGuestInfo] = useState({
    title: "Mr.",
    firstName: "",
    surname: "",
    phoneNumber: "",
    email: "",
    country: "",
    specialRequest: "",
  });

  useEffect(() => {
    const savedBooking = localStorage.getItem("bookingDetails");
    if (savedBooking) {
      const parsedDetails = JSON.parse(savedBooking);
      setBookingDetails(parsedDetails);
      setTotalPrice(parsedDetails.roomPrice);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGuestInfo({
      ...guestInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Guest Info:", guestInfo);
    console.log("Booking Info:", bookingDetails);
    alert("Your booking has been submitted!");
    // Redirect or send data to API here
  };

  return (
    <div>
      <Banner title="Checkout" bgImage="/images/hero1.jpg" />
      <div className="bg-gradient-to-r from-[#5C4033] to-[#C79D77] min-h-screen text-white py-12">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-[#F4E1D2]">Details and payment
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-[#E2C8A4]">
            Please review your booking details and enter your information to complete the reservation.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-[#E2C8A4]">
            Please review your booking details and enter your information to complete the reservation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-2xl text-[#5C4033]">
          {bookingDetails ? (
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-[#5C4033]">Booking Summary</h3>
              <p><strong>Room:</strong> {bookingDetails.roomName}</p>
              <p><strong>Price:</strong> ${bookingDetails.roomPrice} per night</p>
              <p><strong>Check-in:</strong> {bookingDetails.checkInDate}</p>
              <p><strong>Check-out:</strong> {bookingDetails.checkOutDate}</p>
              <p><strong>Adults:</strong> {bookingDetails.numAdults}</p>
              <p><strong>Children:</strong> {bookingDetails.numChildren}</p>
              <p className="text-xl text-[#C79D77] font-bold mt-3">Total Price: ${totalPrice}</p>
            </div>
          ) : (
            <p className="text-center text-lg text-[#5C4033]">Loading booking details...</p>
          )}

          <h3 className="text-2xl font-semibold mb-4 text-[#5C4033]">Guest Information</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-semibold mb-2">Title</label>
                <select
                  name="title"
                  value={guestInfo.title}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border-2 border-[#E2C8A4] focus:ring-2 focus:ring-[#F4E1D2]"
                >
                  <option value="Mr.">Mr.</option>
                  <option value="Ms.">Ms.</option>
                  <option value="Mrs.">Mrs.</option>
                  <option value="Dr.">Dr.</option>
                </select>
              </div>

              <div>
                <label className="block text-lg font-semibold mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={guestInfo.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 rounded-lg border-2 border-[#E2C8A4] focus:ring-2 focus:ring-[#F4E1D2]"
                />
              </div>

              <div>
                <label className="block text-lg font-semibold mb-2">Surname</label>
                <input
                  type="text"
                  name="surname"
                  value={guestInfo.surname}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 rounded-lg border-2 border-[#E2C8A4] focus:ring-2 focus:ring-[#F4E1D2]"
                />
              </div>

              <div>
                <label className="block text-lg font-semibold mb-2">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={guestInfo.phoneNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 rounded-lg border-2 border-[#E2C8A4] focus:ring-2 focus:ring-[#F4E1D2]"
                />
              </div>

              <div>
                <label className="block text-lg font-semibold mb-2">E-mail Address</label>
                <input
                  type="email"
                  name="email"
                  value={guestInfo.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 rounded-lg border-2 border-[#E2C8A4] focus:ring-2 focus:ring-[#F4E1D2]"
                />
              </div>

              <div>
                <label className="block text-lg font-semibold mb-2">Country of Residence</label>
                <select
                  name="country"
                  value={guestInfo.country}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 rounded-lg border-2 border-[#E2C8A4] focus:ring-2 focus:ring-[#F4E1D2]"
                >
                  <option value="">Select a country</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-lg font-semibold mb-2">Special Requests</label>
              <textarea
                name="specialRequest"
                value={guestInfo.specialRequest}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg border-2 border-[#E2C8A4] focus:ring-2 focus:ring-[#F4E1D2]"
              ></textarea>
            </div>

            <button
  onClick={() => router.push("/reservation/payment")}
  className="w-full py-3 px-6 bg-[#F4E1D2] text-[#5C4033] font-semibold rounded-lg shadow-lg hover:bg-[#E2C8A4] transition duration-300"
>
  Continuer au paiement
</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
