import React from 'react';
import cake1 from '../../assets/cake1.png';
import cake2 from '../../assets/cake2.png';
import trangle from '../../assets/Polygon 4 (1).png';
import trangle2 from '../../assets/Polygon 4.png';
import star from '../../assets/star.png';
import boll from '../../assets/boll.png';
import image1 from '../../assets/1.png';
import image2 from '../../assets/2.png';
import image3 from '../../assets/3.png';
import image4 from '../../assets/4.png';

export default function OurService() {
  return (
    <div className="relative py-16 px-4 bg-white container mx-auto overflow-hidden">
      {/* Background elements */}
      <img src={cake1} className="absolute top-0 -left-10 md:w-40 md:h-40 z-0" alt="cake-left" />
      <img src={cake2} className="absolute top-14 rotate-90  w-20 h-20 md:w-40 md:h-40 z-0" alt="cake-right" />
     
      <img src={trangle} className="absolute bottom-20 right-8 w-20 h-20 z-0" alt="triangle-right" />
      <img src={trangle2} className="absolute top-40   right-2 md:w-20 h-20 z-0" alt="triangle-small-right" />
      <img src={boll} className="absolute bottom-0 left-96 w-32 h-32 z-0" alt="balloon-bottom" />

      {/* Services Section */}
      <h2 className="text-4xl font-bold text-center mb-6 relative z-10">Our Services</h2>
      <p className="text-center text-lg mb-8 relative z-10">
        We work hard to deliver the most amazing and successful projects for you.
      </p>
   
<div className="flex justify-center items-center">
 
  <div className="divider divider-error flex justify-center items-center w-96">
    <img className='w-5' src={star} alt="Star" />
  </div>
</div>


      <div className="space-y-12 relative z-10">
        {/* First Card: Text Left, Image Right */}
        <div className="flex flex-col  lg:flex-row items-center bg-white   rounded-lg overflow-hidden relative">
          <div className="lg:w-1/2 border  px-8 py-10 relative z-10">
          <img src={star} className="absolute  -right-0 w-10 h-10 z-0" alt="star-top-card" />
            <h3 className="text-2xl font-semibold mb-4">Mobile Application Development</h3>
            <p>
              Our team builds intuitive and user-friendly native apps for Android and iOS, enhancing user experience and driving business growth.
            </p>
          </div>
          <div className="lg:w-1/2 p-4">
            <img src={image1} alt="Mobile Application Development" className="w-full h-auto" />
          </div>
         
        </div>

        {/* Second Card: Image Left, Text Right */}
        <div className="flex flex-col lg:flex-row-reverse items-center bg-white  rounded-lg overflow-hidden relative">
          <div className="lg:w-1/2 shadow-lg border px-8 py-10 relative z-10">
          <img src={star} className="absolute  -right-0 w-10 h-10 z-0" alt="star-top-card" />
            <h3 className="text-2xl font-semibold mb-4">Web Based Application Development</h3>
            <p>
              Specialized in innovative web applications, we provide scalable, secure, and user-friendly solutions.
            </p>
          </div>
          <div className="lg:w-1/2 p-4">
            <img src={image2} alt="Web Based Application Development" className="w-full h-auto" />
          </div>
        </div>

        {/* Third Card: Text Left, Image Right */}
        <div className="flex flex-col lg:flex-row items-center bg-white rounded-lg overflow-hidden relative">
          <div className="lg:w-1/2 px-8   shadow-lg border py-10 relative z-10">
          <img src={star} className="absolute  -right-0 w-10 h-10 z-0" alt="star-top-card" />
            <h3 className="text-2xl font-semibold mb-4">Blockchain Development</h3>
            <p>
              We design intuitive UI/UX interfaces for blockchain platforms to simplify complex functions.
            </p>
          </div>
          <div className="lg:w-1/2 p-4">
            <img src={image3} alt="Blockchain Development" className="w-full h-auto" />
          </div>
          <img src={star} className="absolute bottom-0 left-8 w-10 h-10 z-0" alt="star-bottom-card" />
        </div>

        {/* Fourth Card: Image Left, Text Right */}
        <div className="flex flex-col lg:flex-row-reverse items-center bg-white  rounded-lg overflow-hidden relative">
          <div className="lg:w-1/2  shadow-lg border px-8 py-10 relative z-10">
          <img src={star} className="absolute  -right-0 w-10 h-10 z-0" alt="star-top-card" />
            <h3 className="text-2xl font-semibold mb-4">UI/UX Development</h3>
            <p>
              Delivering exceptional user experience interfaces that align with brand identity and user needs.
            </p>
          </div>
          <div className="lg:w-1/2 p-4">
            <img src={image4} alt="UI/UX Development" className="w-full h-auto" />
          </div>
         
        </div>
      </div>
    </div>
  );
}