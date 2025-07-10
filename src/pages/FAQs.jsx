import React from 'react';
import Legal from '../components/Legal';

const faqs = [
  {
    question: "Do I need to create an account to buy?",
    answer: "No, buyers can browse and contact sellers freely without signing up."
  },
  {
    question: "Who can sell on Campus Mart?",
    answer: "Only student entrepreneurs from tertiary institutions are allowed to register and advertise."
  },
  {
    question: "How do I contact a seller?",
    answer: "Click on a product to view the seller’s contact information, including phone number and email."
  },
  {
    question: "Is there a payment option on the site?",
    answer: "No, Campus Mart does not handle transactions. You contact the seller directly to arrange payments."
  },
  {
    question: "What if I get scammed?",
    answer: "Use the reporting form to report sellers. Admins will review and may ban abusive accounts."
  },
  {
    question: "Can I delete my seller account?",
    answer: "Yes, contact the admin or send a request via the support form."
  }
];

const FAQs = () => {
  return (
    <div>
      <Legal>
    <div className="max-w-3xl mx-auto  px-6 py-12 bg-white rounded-2xl shadow-lg mt-10 mb-20">
      <h2 className="text-3xl font-bold mb-6 text-center text-sky-700">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 border-l-4 border-blue-600">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
    </Legal>
    </div>
  );
};

export default FAQs;
