import React from 'react';

const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-gray-700">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">Terms and Conditions</h1>
      <p className="mb-4">
        Welcome to Campus Mart. These Terms and Conditions govern your use of the Campus Mart platform.
        By accessing or using the platform, you agree to be bound by these terms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Use of the Platform</h2>
      <p className="mb-4">
        Campus Mart is for student entrepreneurs in tertiary institutions to promote and sell their products or services.
        Buyers do not need to register to access listings.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. No Payment Handling</h2>
      <p className="mb-4">
        Campus Mart does not process payments. All transactions take place directly between buyers and sellers.
        We are not responsible for disputes, fraud, or damages.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Seller Responsibilities</h2>
      <p className="mb-4">
        Sellers must provide accurate and truthful information when registering. Any fraudulent activity will result in suspension.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Reporting Issues</h2>
      <p className="mb-4">
        Users can report sellers using the report form if they suspect scam, fake products, or any misconduct.
        The admin will review and take appropriate action.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Admin Rights</h2>
      <p className="mb-4">
        The admin reserves the right to remove listings or users who violate these terms without prior notice.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Changes to Terms</h2>
      <p className="mb-4">
        These Terms and Conditions may be updated at any time. Users are encouraged to review them periodically.
      </p>
    </div>
  );
};

export default Terms;
