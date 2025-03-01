"use client";
import Banner from "../../components/Banner";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <Banner title="Contact Us" bgImage="/images/hero1.jpg" />
      <div className="bg-[#F4E1D2]  py-10 text-[#5C4033] flex flex-col justify-center">
        <div className="max-w-4xl mx-auto p-6 md:p-12 bg-white bg-opacity-80 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Information */}
            <div className="flex flex-col justify-center space-y-6">
              <h3 className="text-2xl font-semibold text-[#5C4033]">Get in Touch</h3>
              <p className="text-lg">
                We would love to hear from you! Reach out for inquiries, reservations, or special requests.
              </p>

              <div className="flex items-center space-x-3">
                <FaPhone className="text-[#C79D77] text-xl" />
                <div>
                  <p className="font-semibold">Phone:</p>
                  <p>+33 7 71 58 89 24</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-[#C79D77] text-xl" />
                <div>
                  <p className="font-semibold">Email:</p>
                  <p>contact@trianonhotel.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-[#C79D77] text-xl" />
                <div>
                  <p className="font-semibold">Address:</p>
                  <p>15 Bd Victor Hugo, 93400 Saint-Ouen-sur-Seine, France</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-6">
              <form className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-4 bg-[#F4E1D2] text-[#5C4033] rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#C79D77] placeholder-[#8B5E3B]"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-4 bg-[#F4E1D2] text-[#5C4033] rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#C79D77] placeholder-[#8B5E3B]"
                />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="p-4 bg-[#F4E1D2] text-[#5C4033] rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#C79D77] placeholder-[#8B5E3B]"
                ></textarea>
                <button
                  type="submit"
                  className="bg-[#C79D77] text-white py-3 rounded-lg shadow-lg hover:bg-[#8B5E3B] transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
