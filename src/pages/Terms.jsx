import React from 'react';
import Legal from '../components/Legal';
import Footer from '../components/Footer';

const Terms = () => {
  return (
    <div >
      <Legal>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10 mt-10">
          <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
            Terms and Conditions
          </h1>

          <section className="space-y-8 text-gray-700 leading-relaxed text-[17px]">
            <p>
              Welcome to <span className="font-semibold">Campus Mart</span>. These Terms and Conditions govern your use of the Campus Mart platform.
              By accessing or using the platform, you agree to be bound by these terms.
            </p>

            <div>
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">1. Use of the Platform</h2>
              <p>
                Campus Mart is for student entrepreneurs in tertiary institutions to promote and sell their products or services.
                Buyers do not need to register to access listings.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">2. No Payment Handling</h2>
              <p>
                Campus Mart does not process payments. All transactions take place directly between buyers and sellers.
                We are not responsible for disputes, fraud, or damages.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">3. Seller Responsibilities</h2>
              <p>
                Sellers must provide accurate and truthful information when registering. Any fraudulent activity will result in suspension.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">4. Reporting Issues</h2>
              <p>
                Users can report sellers using the report form if they suspect scam, fake products, or any misconduct.
                The admin will review and take appropriate action.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">5. Admin Rights</h2>
              <p>
                The admin reserves the right to remove listings or users who violate these terms without prior notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">6. Changes to Terms</h2>
              <p>
                These Terms and Conditions may be updated at any time. Users are encouraged to review them periodically.
              </p>
            </div>
          </section>
        </div>
      </Legal>
      <Footer/>
    </div>
  );
};

export default Terms;
