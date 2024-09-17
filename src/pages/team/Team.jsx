import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import rock from '../../assets/rock.png';
import star from '../../assets/star.png';
import group from '../../assets/boy and girl.png';

export default function Team() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="relative w-full container mx-auto">
      <div className="flex md:flex-row items-start p-8 relative z-10">
        {/* Left Section: Images */}
        <div className="relative flex justify-center items-center w-full md:w-1/2">
          {/* Rock Image */}
          <img
            src={rock}
            alt="Rock Image"
            className="absolute top-0 left-1/4 w-12 h-12 md:w-16 md:h-16"
            data-aos="fade-up" // AOS animation
          />
          {/* Group Image */}
          <img
            src={group}
            alt="Group Image"
            className="relative z-20 w-64 h-auto"
            data-aos="fade-up" // AOS animation
          />
        </div>

        {/* Right Section: Text */}
        <div className="w-full relative md:w-1/2 flex flex-col justify-center items-start md:ml-8">
          <div className="flex items-center">
            <h2
              className="text-2xl md:text-3xl font-bold relative z-20"
              data-aos="fade-up" // AOS animation
            >
              Meet Our <br /> Team
            </h2>
            <img
              src={star}
              alt="Star Icon"
              className="w-6 h-6 ml-2 relative z-20"
              data-aos="fade-up" // AOS animation
            />
          </div>
        </div>
      </div>

      {/* Orange Background Div - Positioned behind the content */}
      <div className="absolute top-32 left-0 w-full h-40 bg-orange-500 rounded-lg z-0"></div>
    </div>
  );
}
