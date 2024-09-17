import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import trangle from '../../assets/Polygon 4 (1).png';
import boll from '../../assets/boll.png';
import groupImage from '../../assets/3men.png';
import rock from '../../assets/rock.png';
import star from '../../assets/star.png';

export default function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="relative py-16 px-4 bg-white container mx-auto overflow-hidden">
      {/* Background Images */}
      <img src={trangle} className="absolute top-10 left-16 w-20 h-16" alt="triangle" />
      <img src={trangle} className="absolute top-20 rotate-180 bottom-10 right-16 w-16 h-16" alt="circle" />
      <img src={trangle} className="absolute top-4 right-16 w-16 h-16" alt="circle" />
      <img src={trangle} className="absolute md:-bottom-10 bottom-0 left-12 w-20 h-20 md:w-40 md:h-40" alt="large circle" />
      <img src={groupImage} className="absolute top-4 left-8 w-40 h-40" alt="group of people" />

      {/* About Us Section */}
      <div className="relative text-center mt-24" data-aos="fade-up">
        {/* Images above the About Us text */}
        <div className="relative flex justify-center mb-6 space-x-40">
          <img className="w-10 absolute -top-" src={boll} alt="boll" />
          <img className="w-10 absolute -top-" src={rock} alt="rock" />
        </div>

        {/* About Us text */}
        <h2 className="text-4xl font-bold mb-4 relative">About Us</h2>
        <div className="flex justify-center items-center">
          <div className="divider divider-error flex justify-center items-center w-96">
            <img className="w-5" src={star} alt="Star" />
          </div>
        </div>

        {/* Images below the About Us text */}
        <div className="relative flex justify-center space-x-40 mt-6">
          <img className="w-10 absolute -bottom-6" src={boll} alt="boll" />
          <img className="w-10 absolute -bottom-6" src={trangle} alt="triangle" />
        </div>
      </div>

      {/* Our Mission and Vision Section */}
      <div className="mt-16 space-y-12">
        {/* Our Mission */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md" data-aos="fade-up">
          <h3 className="text-2xl flex justify-center font-semibold mb-4">Our Mission</h3>
          <div className="flex justify-center">
            <div className="divider w-52 text-center divider-error"></div>
          </div>
          <p>
            We aim to empower businesses through innovative technology solutions. By driving automation, we enable
            businesses to scale and reach new levels of efficiency.
          </p>
        </div>

        {/* Our Vision */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md" data-aos="fade-up">
          <h3 className="text-2xl text-center font-semibold mb-4">Our Vision</h3>
          <div className="flex justify-center">
            <div className="divider w-52 text-center divider-error"></div>
          </div>
          <p>
            Our vision is to become a global leader in technology services, delivering impactful solutions that foster
            growth and create long-term value for our clients.
          </p>
        </div>
      </div>
    </div>
  );
}
