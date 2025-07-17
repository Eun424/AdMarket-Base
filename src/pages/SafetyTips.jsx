import React from 'react';
import Legal from '../components/Legal';
import Footer from '../components/Footer';

const safetyTips = [
  "Always meet in a public, well-lit place on campus.",
  "Don’t share personal or financial information with sellers.",
  "Never make full payment before receiving the product or service.",
  "Go with a friend when meeting a seller or buyer in person.",
  "Verify the identity of the person before the meetup.",
  "Report suspicious users or activity immediately using the report form.",
  "Trust your instincts—if something feels off, don’t go ahead.",
  "Use campus security or a known spot to meet up if you're unsure."
];

const SafetyTips = () => {
  return (
    <div>
      <Legal>
        <div className="max-w-3xl mx-auto px-6 py-12 bg-white rounded-2xl shadow-lg mt-10 mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-[#024658]">Safety Tips for Campus Mart Users</h2>
          <ul className="space-y-4 text-gray-700">
            {safetyTips.map((tip, index) => (
              <li
                key={index}
                className="bg-[#F0F9FF] p-4 rounded-lg border-l-4 border-[#38BDF8] shadow-sm transition-all hover:bg-[#e0f4ff]"
              >
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </Legal>
      <Footer/>
    </div>
  );
};

export default SafetyTips;
