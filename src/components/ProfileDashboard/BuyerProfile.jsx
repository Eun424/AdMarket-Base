import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sellerProfile } from "../../store/features/authSlice.js";

import prof from '../../assets/images/avatar.jpg';

const BuyerProfile = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector((store) => store.auth);

  // Fetch profile if it's not already in the store (after refresh)
  useEffect(() => {
    if (!profile) {
      dispatch(sellerProfile());
    }
  }, [profile, dispatch]);

  if (!profile) {
    return <p className="text-center mt-10">Loading profile...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="space-y-6 max-w-lg mx-auto">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Seller's Profile
        </h2>

        {/* Profile Header */}
        <div className="flex items-center justify-between p-6 rounded-2xl border border-gray-100 shadow-sm bg-white">
          <div className="flex items-center gap-4">
            <img
              src={profile.image || prof} 
              alt="Profile"
              className="w-16 h-16 object-cover rounded-full"
            />
            <div>
              <h2 className="text-base font-semibold text-gray-800">
                {profile.firstName} {profile.lastName}
              </h2>
              <p className="text-sm text-gray-500">{profile.role}</p>
              <p className="text-sm text-gray-400">
                {profile.city}, {profile.country}
              </p>
            </div>
          </div>
        </div>

        {/* Personal Info */}
        <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm space-y-4">
          <h3 className="text-base font-medium text-gray-700">Personal Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 text-sm text-gray-600">
            <div>
              <p className="font-medium text-gray-500">First Name</p>
              <p>{profile.firstName}</p>
            </div>
            <div>
              <p className="font-medium text-gray-500">Last Name</p>
              <p>{profile.lastName}</p>
            </div>
            <div>
              <p className="font-medium text-gray-500">Email</p>
              <p>{profile.email}</p>
            </div>
            <div>
              <p className="font-medium text-gray-500">Phone</p>
              <p>{profile.phone}</p>
            </div>
            <div>
              <p className="font-medium text-gray-500">Whatsapp Number</p>
              <p>{profile.whatsapp}</p>
            </div>
          </div>
        </div>

        {/* Delivery Info */}
        <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm space-y-4">
          <h3 className="text-base font-medium text-gray-700">Delivery Address</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 text-sm text-gray-600">
            <div>
              <p className="font-medium text-gray-500">Country</p>
              <p>{profile.country}</p>
            </div>
            <div>
              <p className="font-medium text-gray-500">City</p>
              <p>{profile.city}</p>
            </div>
            <div className="col-span-full">
              <p className="font-medium text-gray-500">Landmark</p>
              <p>{profile.landmark}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerProfile;
