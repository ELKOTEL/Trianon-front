// src/app/contact/page.jsx
"use client";
import Banner from "../../components/Banner"

const Contact = () => {
    return (
      <div>
      <Banner title="Contact Us" bgImage="/images/hero1.jpg" />
      <div className="bg-gradient-to-r from-[#5C4033] via-[#C79D77] to-[#5C4033] py-10 text-white flex flex-col justify-center ">
        <div className="max-w-4xl mx-auto p-6 md:p-12 bg-white bg-opacity-20 rounded-lg shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="flex flex-col justify-center space-y-6">
              <h3 className="text-2xl font-semibold text-[#5C4033]">Get in Touch</h3>
              <p className="text-lg text-[#5C4033]">
                We would love to hear from you! Please reach out for any inquiries, reservations, or special requests.
              </p>
              <div>
                <p className="font-semibold text-[#5C4033]">📞 Phone:</p>
                <p>+1 (123) 456-7890</p>
              </div>
              <div>
                <p className="font-semibold text-[#5C4033]">📧 Email:</p>
                <p>contact@luxhotel.com</p>
              </div>
              <div>
                <p className="font-semibold text-[#5C4033]">🏙 Address:</p>
                <p>123 Luxury Blvd, Downtown, City, Country</p>
              </div>
            </div>
  
            {/* Contact Form */}
            <div className="space-y-6">
              <form className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-4 bg-[#5C4033] text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#C79D77]"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-4 bg-[#5C4033] text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#C79D77]"
                />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="p-4 bg-[#5C4033] text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#C79D77]"
                ></textarea>
                <button
                  type="submit"
                  className="bg-[#C79D77] text-[#5C4033] py-3 rounded-lg shadow-xl hover:bg-[#5C4033] hover:text-[#F4E1D2] transition duration-300"
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
  