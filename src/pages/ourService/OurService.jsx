import React from 'react';
import circel from '../../assets/cake1.png';
import circel2 from '../../assets/cake2.png';
import trangle from '../../assets/Polygon 4 (1).png';
import trangle2 from '../../assets/Polygon 4.png';
import star from '../../assets/star.png';
import image1 from '../../assets/1.png';
import image2 from '../../assets/2.png';
import image3 from '../../assets/3.png';
import image4 from '../../assets/4.png';
import boll from '../../assets/boll.png';

export default function OurService() {
  return (
    <div className="relative py-10 px-4 bg-white container mx-auto">
      {/* Background elements */}
      <img src={circel} className="absolute top-1/4 -left-1/4 w-24 h-24 z-0" alt="circle1" />
      <img src={circel2} className="absolute top-1/2 -right-1/4 w-16 h-16 z-0" alt="circle2" />
      <img src={star} className="absolute top-12 right-4 w-12 h-12 z-0" alt="star" />
      <img src={trangle} className="absolute bottom-20 -left-16 w-20 h-20 z-0" alt="triangle1" />
      <img src={trangle2} className="absolute bottom-8 right-4 w-12 h-12 z-0" alt="triangle2" />
      <img src={boll} className="absolute top-16 right-0 w-32 h-32 z-0" alt="balloon" />

      {/* Services Section */}
      <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
      <p className="text-center text-lg">We work hard to deliver the most amazing and successful projects for you.</p>
      <div className="flex justify-center items-center">
        <div className="divider divider-error flex justify-center items-center w-96">
          <img className='w-5' src={star} alt="Star" />
        </div>
      </div>

      <div className="space-y-2 relative z-0">
        {/* First Card: Text Left, Image Right */}
        <div className="flex flex-col lg:flex-row items-center relative">
          <div className="lg:w-1/2 px-8 py-10 border-2 shadow-lg overflow-hidden relative bg-white">
            {/* Background image */}
            <img src={circel} className="absolute top-0 -left-1/4 w-24 h-24 z-0" alt="circle1" />
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-10">Mobile Application Development</h3>
              <p>Our team builds intuitive and user-friendly native apps for Android and iOS, enhancing user experience and driving business growth.</p>
            </div>
          </div>
          <div className="lg:w-1/2 p-4">
            <img src={image1} alt="Mobile Application Development" className="w-full h-auto" />
          </div>
        </div>

        {/* Second Card: Image Left, Text Right */}
        <div className="flex flex-col lg:flex-row-reverse items-center relative">
          <div className="lg:w-1/2 px-8 py-10 border-2 shadow-lg overflow-hidden relative bg-white">
            {/* Background image */}
            <img src={trangle} className="absolute top-0 -right-1/4 w-20 h-20 z-0" alt="triangle1" />
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-4">Web Based Application Development</h3>
              <p>Specialized in innovative web applications, we provide scalable, secure, and user-friendly solutions.</p>
            </div>
          </div>
          <div className="lg:w-1/2 p-4">
            <img src={image2} alt="Web Based Application Development" className="w-full h-auto" />
          </div>
        </div>

        {/* Third Card: Text Left, Image Right */}
        <div className="flex flex-col lg:flex-row items-center relative">
          <div className="lg:w-1/2 px-8 py-10 border-2 shadow-lg overflow-hidden relative bg-white">
            {/* Background image */}
            <img src={boll} className="absolute bottom-0 -left-1/4 w-32 h-32 z-0" alt="balloon" />
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-4">Blockchain Development</h3>
              <p>We design intuitive UI/UX interfaces for blockchain platforms to simplify complex functions.</p>
            </div>
          </div>
          <div className="lg:w-1/2 p-4">
            <img src={image3} alt="Blockchain Development" className="w-full h-auto" />
          </div>
        </div>

        {/* Fourth Card: Image Left, Text Right */}
        <div className="flex flex-col lg:flex-row-reverse items-center relative">
          <div className="lg:w-1/2 px-8 py-10 border-2 shadow-lg overflow-hidden relative bg-white">
            {/* Background image */}
            <img src={circel2} className="absolute bottom-0 -right-1/4 w-16 h-16 z-0" alt="circle2" />
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-4">UI/UX Development</h3>
              <p>Delivering exceptional user experience interfaces that align with brand identity and user needs.</p>
            </div>
          </div>
          <div className="lg:w-1/2 p-4">
            <img src={image4} alt="UI/UX Development" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
