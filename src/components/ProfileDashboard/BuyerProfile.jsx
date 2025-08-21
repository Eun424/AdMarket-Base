import React from 'react';
import prof from '../../assets/images/avatar.jpg';

const BuyerProfile = () => {
  return (
    <div className="space-y-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-center text-gray-800">Buyer Profile</h2>

      {/* Profile Header */}
      <div className="flex items-center justify-between p-6 rounded-2xl border border-gray-100 shadow-sm bg-white">
        <div className="flex items-center gap-4">
          <img src={prof} alt="Profile" className="w-16 h-16 object-cover rounded-full" />
          <div>
            <h2 className="text-base font-semibold text-gray-800">Eunice Asamoah</h2>
            <p className="text-sm text-gray-500">Buyer</p>
            <p className="text-sm text-gray-400">Kumasi, Ghana</p>
          </div>
        </div>
      </div>

      {/* Personal Info */}
      <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm space-y-4">
        <h3 className="text-base font-medium text-gray-700">Personal Information</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 text-sm text-gray-600">
          <div>
            <p className="font-medium text-gray-500">First Name</p>
            <p>Eunice</p>
          </div>
          <div>
            <p className="font-medium text-gray-500">Last Name</p>
            <p>Asamoah</p>
          </div>
          <div>
            <p className="font-medium text-gray-500">Email</p>
            <p>oseinkunim@gmail.com</p>
          </div>
          <div>
            <p className="font-medium text-gray-500">Phone</p>
            <p>0540502328</p>
          </div>
          <div>
            <p className="font-medium text-gray-500">Whatsapp Number</p>
            <p>0540502328</p>
          </div>
        </div>
      </div>

      {/* Delivery Info */}
      <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm space-y-4">
        <h3 className="text-base font-medium text-gray-700">Delivery Address</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 text-sm text-gray-600">
          <div>
            <p className="font-medium text-gray-500">Country</p>
            <p>Ghana</p>
          </div>
          <div>
            <p className="font-medium text-gray-500">City</p>
            <p>Kumasi</p>
          </div>
          <div className="col-span-full">
            <p className="font-medium text-gray-500">Landmark</p>
            <p>KNUST Campus</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerProfile;
