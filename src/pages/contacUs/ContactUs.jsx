import React from 'react';
import boy from '../../assets/Group.png'; // Assuming you have the boy image in this path
import './app.css'
export default function ContactUs() {
  return (
    <div className="flex justify-center items-center p-10">
      <div className="relative bg-orange-500 p-8 rounded-xl shadow-lg max-w-3xl w-full pop-in">
        {/* Boy Image */}
        <div className="absolute -top-48 left-4">
          <img src={boy} alt="boy" className="w-28 pop-in" />
        </div>

        {/* Contact Us Button */}
        <div className="absolute -top-32 text-center flex items-center justify-center w-52 h-40 right-0 bg-orange-600 text-white rounded-full px-6 py-2 mt-4 mr-4 shadow-md pop-in">
          Contact Us
        </div>

        {/* Form Heading */}
        <h2 className="text-2xl font-bold mb-6 text-white pop-in">Let's Talk About Your Idea</h2>

        {/* Form */}
        <div className="grid grid-cols-2 gap-4 mb-4 pop-in">
          <input
            type="text"
            placeholder="Your Name"
            className="col-span-1 p-3 rounded-full border-none focus:ring-2 focus:ring-orange-700"
          />
          <input
            type="text"
            placeholder="Your Phone Number"
            className="col-span-1 p-3 rounded-full border-none focus:ring-2 focus:ring-orange-700"
          />
          <input
            type="email"
            placeholder="Email"
            className="col-span-1 p-3 rounded-full border-none focus:ring-2 focus:ring-orange-700"
          />
          <input
            type="text"
            placeholder="Subject"
            className="col-span-1 p-3 rounded-full border-none focus:ring-2 focus:ring-orange-700"
          />
        </div>

        {/* Message Input */}
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 rounded-lg border-none focus:ring-2 focus:ring-orange-700 pop-in"
        ></textarea>

        {/* Send Button */}
        <div className="flex justify-end mt-4 pop-in">
          <button className="bg-white p-4 rounded-full shadow-lg hover:bg-gray-200 transition">
            <span className="text-orange-500 text-xl">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
