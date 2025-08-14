import React, { useState } from 'react';
import prof from '../../assets/images/avatar.jpg';
import { AiTwotoneEdit } from 'react-icons/ai';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    firstName: 'Eunice',
    lastName: 'Asamoah',
    email: 'oseinkunim@gmail.com',
    phone: '0540502328',
    whatsapp: '0540502328',
    bio: 'A student',
    country: 'Ghana',
    campus: 'KNUST',
    city: 'Kumasi',
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    // TODO: Add API call or Redux dispatch to update backend
    console.log('Updated data:', formData);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Optionally: Reset formData if needed
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800">My Profile</h2>

      {/* Profile Header */}
      <div className="flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex items-center gap-4">
          <img src={prof} alt="" className="w-16 h-16 object-cover rounded-full" />
          <div>
            <h2 className="text-base font-semibold text-gray-800">{formData.firstName} {formData.lastName}</h2>
            <p className="text-sm text-gray-500">Seller</p>
            <p className="text-sm text-gray-400">{formData.city}, {formData.country}</p>
          </div>
        </div>
      </div>

      {/* Personal Info */}
      <div className="p-6 bg-white rounded-2xl border-gray-100 border shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-medium text-gray-700">Personal Information</h3>
          {isEditing ? (
            <div className="space-x-3">
              <button onClick={handleSave} className="text-sm text-green-600 hover:underline">Save</button>
              <button onClick={handleCancel} className="text-sm text-gray-600 hover:underline">Cancel</button>
            </div>
          ) : (
            <button onClick={() => setIsEditing(true)} className="text-sm flex items-center gap-1 text-blue-600 hover:underline">
              Edit <AiTwotoneEdit size={16} />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 text-sm text-gray-600">
          {[
            { label: 'First Name', key: 'firstName' },
            { label: 'Last Name', key: 'lastName' },
            { label: 'Email', key: 'email' },
            { label: 'Phone', key: 'phone' },
            { label: 'Whatsapp Number', key: 'whatsapp' },
            { label: 'Bio', key: 'bio' },
          ].map(({ label, key }) => (
            <div key={key}>
              <p className="font-medium text-gray-500">{label}</p>
              {isEditing ? (
                <input
                  type="text"
                  value={formData[key]}
                  onChange={handleChange(key)}
                  className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-gray-800"
                />
              ) : (
                <p>{formData[key]}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Address Info */}
      <div className="p-6 bg-white rounded-2xl border-gray-100 border shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-medium text-gray-700">Address</h3>
          {isEditing ? (
            <div className="space-x-3">
              <button onClick={handleSave} className="text-sm text-green-600 hover:underline">Save</button>
              <button onClick={handleCancel} className="text-sm text-gray-600 hover:underline">Cancel</button>
            </div>
          ) : (
            <button onClick={() => setIsEditing(true)} className="text-sm flex items-center gap-1 text-blue-600 hover:underline">
              Edit <AiTwotoneEdit size={16} />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 text-sm text-gray-600">
          {[
            { label: 'Country', key: 'country' },
            { label: 'Campus', key: 'campus' },
            { label: 'City', key: 'city' },
          ].map(({ label, key }) => (
            <div key={key} className={key === 'city' ? 'col-span-full' : ''}>
              <p className="font-medium text-gray-500">{label}</p>
              {isEditing ? (
                <input
                  type="text"
                  value={formData[key]}
                  onChange={handleChange(key)}
                  className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-gray-800"
                />
              ) : (
                <p>{formData[key]}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
