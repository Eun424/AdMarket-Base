import React, { useState, useContext, useEffect } from 'react';
import prof from '../../assets/images/avatar.jpg';
import { AiTwotoneEdit } from 'react-icons/ai';
import { themeContext } from '../../context/ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import { sellerProfile, updateSellerProfile } from '../../store/features/authSlice';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { theme } = useContext(themeContext);
  const dispatch = useDispatch();
  const { profile, loading } = useSelector((store) => store.auth);

  const [formData, setFormData] = useState({});


  useEffect(() => {
    if(!profile) {
    dispatch(sellerProfile());
    }
  }, [dispatch, profile]);

  // Pre-fill form 
  useEffect(() => {
    if (profile) {
      setFormData(profile);
    }
  }, [profile]);

  // Handle input change
  const handleChange = (key) => (e) => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  //To save the form
  const handleSave =  () => {
    const result =  dispatch(updateSellerProfile(formData)).unwrap();
    console.log("updated seller", result);
      setIsEditing(false); // only close if update succeeded
    
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData(profile); //reset back with the previous data
  };



  return (
    <div
      className={`space-y-6 max-w-4xl mx-auto min-h-screen p-4 ${
        theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <h2
        className={`text-2xl font-semibold ${
          theme === 'dark' ? 'text-cyan-400' : 'text-gray-800'
        }`}
      >
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
            <h2
              className={`text-base font-semibold ${
                theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
              }`}
            >
              {formData.firstName} {formData.lastName}
            </h2>
            <p className="text-sm text-gray-500">Seller</p>
            <p className="text-sm text-gray-400">
              {formData.city} {formData.country}
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
        <button type="button" onClick={handleSave} className="text-sm text-green-600 hover:underline">
          Save
        </button>
        <button type="button" onClick={handleCancel} className="text-sm text-gray-500 hover:underline">
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


  <div className={`grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-6 text-sm ${
      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
  }`}>
    <div>
      <p className={`font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>First Name</p>
      {isEditing ? (
        <input
          type="text"
          value={formData.firstName || ''}
          onChange={handleChange('firstName')}
          className={`mt-1 w-full border rounded px-3 py-2 ${
            theme === 'dark'
              ? 'bg-gray-700 border-gray-600 text-gray-100'
              : 'bg-white border-gray-300 text-gray-800'
          }`}
        />
      ) : (
        <p>{formData.firstName}</p>
      )}
    </div>

    <div>
      <p className={`font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Last Name</p>
      {isEditing ? (
        <input
          type="text"
          value={formData.lastName || ''}
          onChange={handleChange('lastName')}
          className={`mt-1 w-full border rounded px-3 py-2 ${
            theme === 'dark'
              ? 'bg-gray-700 border-gray-600 text-gray-100'
              : 'bg-white border-gray-300 text-gray-800'
          }`}
        />
      ) : (
        <p>{formData.lastName}</p>
      )}
    </div>

    <div>
      <p className={`font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Email</p>
      <p>{formData.email}</p> 
    </div>

    <div>
      <p className={`font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Phone</p>
      {isEditing ? (
        <input
          type="text"
          value={formData.phone || ''}
          onChange={handleChange('phone')}
          className={`mt-1 w-full border rounded px-3 py-2 ${
            theme === 'dark'
              ? 'bg-gray-700 border-gray-600 text-gray-100'
              : 'bg-white border-gray-300 text-gray-800'
          }`}
        />
      ) : (
        <p>{formData.phone}</p>
      )}
    </div>

    <div>
      <p className={`font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>WhatsApp Number</p>
      {isEditing ? (
        <input
          type="text"
          value={formData.whatsapp || ''}
          onChange={handleChange('whatsapp')}
          className={`mt-1 w-full border rounded px-3 py-2 ${
            theme === 'dark'
              ? 'bg-gray-700 border-gray-600 text-gray-100'
              : 'bg-white border-gray-300 text-gray-800'
          }`}
        />
      ) : (
        <p>{formData.whatsapp}</p>
      )}
    </div>

    <div className="col-span-full">
      <p className={`font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Bio</p>
      {isEditing ? (
        <textarea
          value={formData.bio || ''}
          onChange={handleChange('bio')}
          className={`mt-1 w-full border rounded px-3 py-2 ${
            theme === 'dark'
              ? 'bg-gray-700 border-gray-600 text-gray-100'
              : 'bg-white border-gray-300 text-gray-800'
          }`}
        />
      ) : (
        <p>{formData.bio}</p>
      )}
    </div>
  </div>
</div>

      {/* Address Info */}
     <div className={`p-6 rounded-2xl border shadow-sm space-y-4 ${
    theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
}`}>
  <div className="flex items-center justify-between">
    <h3 className={`text-base font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
      Address
    </h3>
    {isEditing && (
      <div className="space-x-3">
        <button type="button" onClick={handleSave} className="text-sm text-green-600 hover:underline">
          Save
        </button>
        <button type="button" onClick={handleCancel} className="text-sm text-gray-500 hover:underline">
          Cancel
        </button>
      </div>
    )}
  </div>

  <div className={`grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-6 text-sm ${
      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
  }`}>
    <div>
      <p className={`font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Country</p>
      {isEditing ? (
        <input
          type="text"
          value={formData.country || ''}
          onChange={handleChange('country')}
          className={`mt-1 w-full border rounded px-3 py-2 ${
            theme === 'dark'
              ? 'bg-gray-700 border-gray-600 text-gray-100'
              : 'bg-white border-gray-300 text-gray-800'
          }`}
        />
      ) : (
        <p>{formData.country}</p>
      )}
    </div>

    <div>
      <p className={`font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Campus</p>
      {isEditing ? (
        <input
          type="text"
          value={formData.campus || ''}
          onChange={handleChange('campus')}
          className={`mt-1 w-full border rounded px-3 py-2 ${
            theme === 'dark'
              ? 'bg-gray-700 border-gray-600 text-gray-100'
              : 'bg-white border-gray-300 text-gray-800'
          }`}
        />
      ) : (
        <p>{formData.campus}</p>
      )}
    </div>

    <div className="col-span-full">
      <p className={`font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>City</p>
      {isEditing ? (
        <input
          type="text"
          value={formData.city || ''}
          onChange={handleChange('city')}
          className={`mt-1 w-full border rounded px-3 py-2 ${
            theme === 'dark'
              ? 'bg-gray-700 border-gray-600 text-gray-100'
              : 'bg-white border-gray-300 text-gray-800'
          }`}
        />
      ) : (
        <p>{formData.city}</p>
      )}
    </div>
  </div>
</div>

    </div>
  );
};

export default Profile;
