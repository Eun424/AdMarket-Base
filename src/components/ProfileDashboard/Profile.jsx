import React, { useState, useContext } from 'react';
import prof from '../../assets/images/avatar.jpg';
import { AiTwotoneEdit } from 'react-icons/ai';
import { themeContext } from '../../context/ThemeContext';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { theme } = useContext(themeContext);

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
    console.log('Updated data:', formData);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div
      className={`space-y-6 max-w-4xl mx-auto min-h-screen p-4 ${
        theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <h2 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-cyan-400' : 'text-gray-800'}`}>
        My Profile
      </h2>

      {/* Profile Header */}
      <div
        className={`flex items-center justify-between p-6 rounded-2xl border shadow-sm ${
          theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
        }`}
      >
        <div className="flex items-center gap-4">
          <img src={prof} alt="" className="w-16 h-16 object-cover rounded-full" />
          <div>
            <h2 className={`text-base font-semibold ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>
              {formData.firstName} {formData.lastName}
            </h2>
            <p className="text-sm text-gray-500">Seller</p>
            <p className="text-sm text-gray-400">
              {formData.city}, {formData.country}
            </p>
          </div>
        </div>
      </div>

      {/* Personal Info */}
      <div
        className={`p-6 rounded-2xl border shadow-sm space-y-4 ${
          theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
        }`}
      >
        <div className="flex items-center justify-between">
          <h3 className={`text-base font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
            Personal Information
          </h3>
          {isEditing ? (
            <div className="space-x-3">
              <button onClick={handleSave} className="text-sm text-green-600 hover:underline">
                Save
              </button>
              <button onClick={handleCancel} className="text-sm text-gray-500 hover:underline">
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="text-sm flex items-center gap-1 text-blue-600 hover:underline"
            >
              Edit <AiTwotoneEdit size={16} />
            </button>
          )}
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-6 text-sm ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {[
            { label: 'First Name', key: 'firstName' },
            { label: 'Last Name', key: 'lastName' },
            { label: 'Email', key: 'email' },
            { label: 'Phone', key: 'phone' },
            { label: 'Whatsapp Number', key: 'whatsapp' },
            { label: 'Bio', key: 'bio' },
          ].map(({ label, key }) => (
            <div key={key}>
              <p className={`font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{label}</p>
              {isEditing ? (
                <input
                  type="text"
                  value={formData[key]}
                  onChange={handleChange(key)}
                  className={`mt-1 w-full border rounded px-3 py-2 ${
                    theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 text-gray-100'
                      : 'bg-white border-gray-300 text-gray-800'
                  }`}
                />
              ) : (
                <p>{formData[key]}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Address Info */}
      <div
        className={`p-6 rounded-2xl border shadow-sm space-y-4 ${
          theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
        }`}
      >
        <div className="flex items-center justify-between">
          <h3 className={`text-base font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
            Address
          </h3>
          {isEditing ? (
            <div className="space-x-3">
              <button onClick={handleSave} className="text-sm text-green-600 hover:underline">
                Save
              </button>
              <button onClick={handleCancel} className="text-sm text-gray-500 hover:underline">
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="text-sm flex items-center gap-1 text-blue-600 hover:underline"
            >
              Edit <AiTwotoneEdit size={16} />
            </button>
          )}
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-6 text-sm ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {[
            { label: 'Country', key: 'country' },
            { label: 'Campus', key: 'campus' },
            { label: 'City', key: 'city' },
          ].map(({ label, key }) => (
            <div key={key} className={key === 'city' ? 'col-span-full' : ''}>
              <p className={`font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{label}</p>
              {isEditing ? (
                <input
                  type="text"
                  value={formData[key]}
                  onChange={handleChange(key)}
                  className={`mt-1 w-full border rounded px-3 py-2 ${
                    theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 text-gray-100'
                      : 'bg-white border-gray-300 text-gray-800'
                  }`}
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
