import React from 'react';

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
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-sky-800">Safety Tips for Campus Mart Users</h2>
      <ul className="space-y-4 list-disc list-inside text-gray-700">
        {safetyTips.map((tip, index) => (
          <li key={index} className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500 shadow-sm">
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SafetyTips;
