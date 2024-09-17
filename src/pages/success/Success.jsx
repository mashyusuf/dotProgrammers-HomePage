import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import arrow from '../../assets/arrow.png';
import line from '../../assets/Line 12.png';
import boy from '../../assets/boy1.1.png';
import arrow1 from '../../assets/arrow1.png';

export default function Success() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 mt-20 mb-20">
      <h2 className="text-center text-2xl font-bold mb-8" data-aos="fade-up">
        How We Make Work Successful
      </h2>

      {/* Step 1 */}
      <div className="relative flex flex-col md:flex-row items-center space-x-6" data-aos="fade-up" data-aos-delay="100">
        <div className="flex items-start space-x-4 relative">
          <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center text-lg font-semibold text-orange-500">
            1
          </div>
          <div className="w-72">
            <h3 className="font-bold text-xl">Analyze</h3>
            <p className="text-gray-600">
              We utilize creative and customized methods that tailor our work to the client environment to maximize results.
            </p>
          </div>
        </div>

        {/* Line and Arrow */}
        <div className="absolute left-[50%] transform translate-x-12 mt-2" data-aos="fade-up" data-aos-delay="200">
          <img src={line} alt="line" className="w-10 h-auto" />
          <img src={line} alt="line" className="w-10 h-auto" />
          <img src={arrow1} alt="arrow1" className="md:w-32 w-12 h-auto mt-2" />
        </div>
      </div>

      {/* Step 2 */}
      <div className="relative flex flex-col md:flex-row-reverse items-center space-x-6 space-x-reverse mt-12" data-aos="fade-up" data-aos-delay="300">
        <div className="flex items-start space-x-4 relative">
          <div className="w-72">
            <h3 className="font-bold text-xl">Advise</h3>
            <p className="text-gray-600">
              Find out where the business needs to go and how to get there – real progress is made.
            </p>
          </div>
          <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center text-lg font-semibold text-orange-500">
            2
          </div>
        </div>

        {/* Line and Arrow */}
        <div className="absolute right-[50%] transform -translate-x-12 mt-2" data-aos="fade-up" data-aos-delay="400">
          <img src={line} alt="line" className="w-10 h-auto" />
          <img src={line} alt="line" className="w-10 h-auto" />
          <img src={arrow} alt="arrow" className="md:w-32 w-12 h-auto mt-2" />
        </div>
      </div>

      {/* Step 3 */}
      <div className="relative flex flex-col md:flex-row items-center space-x-6 mt-12" data-aos="fade-up" data-aos-delay="500">
        <div className="flex items-start space-x-4 relative">
          <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center text-lg font-semibold text-orange-500">
            3
          </div>
          <div className="w-72">
            <h3 className="font-bold text-xl">Strategy</h3>
            <p className="text-gray-600">
              We deliver business results via hands-on execution and leading teams through complex change.
            </p>
          </div>
        </div>

        {/* Line and Arrow */}
        <div className="absolute left-[50%] transform translate-x-12 mt-2" data-aos="fade-up" data-aos-delay="600">
          <img src={line} alt="line" className="w-10 h-auto" />
          <img src={line} alt="line" className="w-10 h-auto" />
          <img src={arrow1} alt="arrow1" className="md:w-32 w-12 h-auto mt-2" />
        </div>
      </div>

      {/* Step 4 */}
      <div className="relative flex flex-col md:flex-row-reverse items-center space-x-6 space-x-reverse mt-12" data-aos="fade-up" data-aos-delay="700">
        <div className="flex items-start space-x-4 relative">
          <div className="w-72">
            <h3 className="font-bold text-xl">Result</h3>
            <p className="text-gray-600">
              We provide valuable guidance and support in the development, and you run a successful business.
            </p>
          </div>
          <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center text-lg font-semibold text-orange-500">
            4
          </div>
        </div>
      </div>

      {/* Boy Image */}
      <div className="mt-12 flex justify-start" data-aos="fade-up" data-aos-delay="800">
        <img src={boy} alt="boy" className="w-60 h-auto" />
      </div>
    </div>
  );
}
