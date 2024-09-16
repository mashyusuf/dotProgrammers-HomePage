import React from 'react';
import cartoon from '../../assets/cartoon.png';
import bg from '../../assets/Vector.png';
import boll from '../../assets/Ellipse 1.png';
import cake1 from '../../assets/cake1.png';
import cake2 from '../../assets/cake2.png';
import cake3 from '../../assets/cake3.png';
import rock from '../../assets/rock.png';
import star from '../../assets/extrude-group.png';

export default function Banner() {
  return (
    <div className="relative bg-white shadow-lg p-6 md:p-10 lg:p-16 flex  md:flex-row items-center justify-between overflow-visible">
      
      {/* Text Section */}
      <div className="text-center md:text-left max-w-lg mb-8 md:mb-0 md:mr-12">
        <h1 className="text-2xl md:text-4xl text-black lg:text-6xl font-bold leading-tight">
          Your Trusted<br />
          <span className="text-black">Partner in</span><br />
          <span className="text-black">IT Development</span>
        </h1>
        <p className="text-sm flex items-center gap-2 md:text-base lg:text-lg mt-4">
          <img src={boll} alt="" className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8" />
          Lorem ipsum dolor sit amet consectetur. Et non telus posuere auctor dignissim sit.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative w-full md:w-1/2 h-auto flex justify-center items-center overflow-visible">
        
        {/* Background Vector Image */}
        <img
          src={bg}
          alt="Background"
          className="absolute z-10 md:-top-10 left-1/4 w-40 md:w-72 lg:w-80 h-auto"
        />

        {/* Main Cartoon Image */}
        <img
          src={cartoon}
          alt="Cartoon"
          className="relative z-30 left-2 md:-top-20 -top-2 w-40 md:w-48 lg:w-72"
        />
        
        {/* Floating Images */}
        <img
          src={rock}
          alt="Rock"
          className="absolute z-20 bottom-0 left-10 top-10 w-5 md:w-10 lg:w-10"
        />
        <img src={cake1} alt="Cake 1" className="absolute  z-40 lg:top-[270px] top-40 left-32 md:left-96 lg:left-96 w-10 md:w-16 lg:w-16 overflow-visible" />
        <img src={cake2} alt="Cake 2" className="absolute z-40 md:top-10 top-2 -right-6  md:right-4 w-10 md:w-12 lg:w-16" />
        <img src={cake3} alt="Cake 3" className="absolute z-40 md:bottom-8 top-32 -right-6 md:right-8 w-10 md:w-12 lg:w-16" />
        <img src={star} alt="Star" className="absolute z-40 -top-10 md:-top-20 right-16 w-10 md:w-12 lg:w-16" />
      </div>
    </div>
  );
}
