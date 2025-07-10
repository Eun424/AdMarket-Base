import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import studentImage from "../assets/images/student-b.jpeg";
import heroImage from "../assets/images/hero2.jpeg";
import admin3Image from "../assets/images/admin3.jpg";
import admin4Image from "../assets/images/admin4.jpg";
import overlayImage from "../assets/images/overlay.jpg";

const AboutUs = () => {
  return (
    <div className="text-gray-700">
      
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${overlayImage})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/70 backdrop-blur-sm px-6 py-8 rounded-md text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">About Us</h1>
            <p className="text-lg text-gray-700">
              CampusMart connects student entrepreneurs with buyers across
              universities. Discover, promote, and shop student-owned products
              on your campus!
            </p>
          </div>
        </div>
      </div>

      
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src={studentImage}
            alt="Students working together"
            className="rounded-lg shadow-lg w-full max-h-[450px] object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            What is CampusMart?
          </h2>
          <p className="text-lg mb-4 text-gray-700 leading-relaxed">
            <span className="font-semibold text-blue-800">CampusMart</span> is a
            web-based advertising platform designed for tertiary students to
            promote and sell their products and services easily.
          </p>
          <p className="text-lg text-blue-700 bg-blue-100 p-4 rounded shadow">
            Sellers can showcase items like <strong>food, tech, fashion</strong>
            , and <strong>handmade goods</strong>, while buyers can browse
            freely without signing up. It's{" "}
            <span className="font-bold text-blue-900">campus-focused</span>,
            simple, and free.
          </p>
        </div>
      </div>

      
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Story</h2>
            <p className="text-lg mb-4 text-gray-800">
              CampusMart was born from the{" "}
              <span className="text-blue-700 font-medium">
                real hustle of students
              </span>
              . We saw classmates juggling classes with small businesses —
              selling food, repairing gadgets, and more — but they lacked a good
              platform.
            </p>
            <p className="text-lg text-blue-700 bg-white p-4 rounded shadow">
              Flyers went ignored, WhatsApp statuses vanished, and students
              didn’t even know what was being sold around them. So, we created{" "}
              <span className="font-bold text-blue-900">CampusMart</span>: a
              safe, digital marketplace for students by students.
            </p>
          </div>
          <div>
            <img
              src={heroImage}
              alt="CampusMart concept"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="py-16 max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">
          Why CampusMart?
        </h2>
        <p className="max-w-2xl mx-auto mb-10 text-lg text-blue-800">
          We aim to empower student businesses with tools for visibility and
          growth. Here's why CampusMart is loved:
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          {[
            "No account needed to browse",
            "Campus-focused visibility",
            "Supports student innovation",
            "Showcase your hustle freely",
            "Quick contact with sellers",
            "Free and simple to use",
          ].map((benefit, id) => (
            <div
              key={id}
              className="bg-blue-100 p-5 rounded-lg shadow-sm hover:bg-blue-200 transition"
            >
              <h3 className="text-lg font-semibold text-blue-900">{benefit}</h3>
            </div>
          ))}
        </div>
      </div>

      
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Meet the Administrators
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
          
            <div className="bg-blue-50 p-6 rounded-lg shadow-lg text-center">
              <img
                src={admin3Image}
                alt="Eunice Asamoah"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4 shadow-md"
              />
              <h3 className="text-xl font-semibold text-blue-800">
                Eunice Asamoah
              </h3>
              <p className="text-sm text-gray-700 mt-2">
                Software Developer with a background in{" "}
                <span className="text-blue-900 font-medium">
                  Political Science and Chinese
                </span>
                . Co-creator of CampusMart, driven by a passion for tech and
                student empowerment.
              </p>
              <div className="flex justify-center gap-4 mt-4 text-2xl text-blue-600">
                <a
                  href="https://www.linkedin.com/in/eunice-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-800"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://twitter.com/eunice-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-800"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>

            
            <div className="bg-blue-50 p-6 rounded-lg shadow-lg text-center">
              <img
                src={admin4Image}
                alt="Nkunim Asaah Osei"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4 shadow-md"
              />
              <h3 className="text-xl font-semibold text-blue-800">
                Nkunim Asaah Osei
              </h3>
              <p className="text-sm text-gray-700 mt-2">
                Software Developer with a background in{" "}
                <span className="text-blue-900 font-medium">Public Health</span>
                , skilled in graphic design and software development. Co-founder
                of CampusMart.
              </p>
              <div className="flex justify-center gap-4 mt-4 text-2xl text-blue-600">
                <a
                  href="https://www.linkedin.com/in/nkunim-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-800"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://twitter.com/nkunim-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-800"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
