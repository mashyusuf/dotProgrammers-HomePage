import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import star from '../../assets/star.png';
import boy from '../../assets/boy.png';
import image1 from '../../assets/1.1.png';
import img2 from '../../assets/2.2.png';
import star3 from '../../assets/3.3.png';
import star4 from '../../assets/4.4.png';
import star5 from '../../assets/5.5.png';

export default function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className='container mx-auto'>
      {/* Image Section */}
      <div className="relative flex flex-col items-center justify-center">
        <div>
          <img
            className="w-12 h-12 absolute left-40 md:left-96"
            src={star}
            alt="Star"
            data-aos="fade-up"
          />
        </div>
        <div>
          <img
            className="w-80 h-80"
            src={boy}
            alt="Boy"
            data-aos="fade-up"
          />
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="mt-10">
        <div>
          <h1
            className='text-3xl text-center'
            data-aos="fade-up"
          >
            Our Portfolio
          </h1>
          <div className="flex justify-center items-center">
            <div className="divider divider-error flex justify-center items-center w-96">
              <img className='w-5' src={star} alt="Star" />
            </div>
          </div>
        </div>
        <div className='flex justify-center space-x-3'>
          <p data-aos="fade-up">App</p>
          <p data-aos="fade-up">Mobile App</p>
          <p data-aos="fade-up">Website Application</p>
          <p data-aos="fade-up">Website</p>
        </div>
      </div>

      {/* Portfolio Images */}
      <div className="flex flex-col mt-10 mb-10 sm:grid justify-center items-center sm:grid-cols-4 border-2 shadow-lg px-4 py-4 gap-4">
        <img
          src={image1}
          alt="Portfolio Item 1"
          className="w-60 h-60 object-cover border shadow-lg"
          data-aos="fade-up"
        />
        <img
          src={img2}
          alt="Portfolio Item 2"
          className="w-60 h-60 object-cover border shadow-lg"
          data-aos="fade-up"
        />
        <img
          src={star3}
          alt="Portfolio Item 3"
          className="w-60 h-60 object-cover border shadow-lg"
          data-aos="fade-up"
        />
        <img
          src={star4}
          alt="Portfolio Item 4"
          className="w-60 h-60 object-cover border shadow-lg"
          data-aos="fade-up"
        />
        <img
          src={star5}
          alt="Portfolio Item 5"
          className="w-60 h-60 object-cover border shadow-lg"
          data-aos="fade-up"
        />
      </div>
    </div>
  );
}
