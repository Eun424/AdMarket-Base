import React from 'react';
import advert from '../assets/images/advert.jpg';

const AboutUs = () => {
  return (
    <div>
      
      <div className="my-8">
        <h2 className="text-2xl font-bold text-blue-900 underline text-center">
          About Us
        </h2>
      </div>

      <div className="min-h-screen bg-white text-gray-700 p-6 md:p-12 flex items-center justify-center">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8">
          
          
          <div className="w-full md:w-1/2">
            <img
              src={advert}
              alt="Students advertising CampusMart"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          
          <div className="w-full md:w-1/2">
        
            <div className="flex items-center gap-3 mb-6">
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                className="fill-blue-900"
              >
                <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
              </svg>
              <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
                CampusMart
              </h1>
            </div>

            
            <p className="text-lg mb-4">
              <strong>CampusMart</strong> is a web-based advertising platform designed specifically for tertiary students.
              It empowers student entrepreneurs to advertise and promote their products and services, 
              while other students or individuals can browse and contact sellers freely without creating an account.
            </p>

            <p className="text-lg mb-4">
              The platform provides a simple and efficient way for sellers (students) to showcase what they offer, 
              and for buyers to easily discover and connect with them on campus or across universities.
            </p>

            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-md shadow-sm">
              <h2 className="text-xl font-semibold text-blue-900 mb-1">Why CampusMart?</h2>
              <p className="text-base text-blue-800">
                We believe in student innovation and hustle. CampusMart is built to support that spirit by connecting
                student sellers and buyers in the easiest way possible—right on campus.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
