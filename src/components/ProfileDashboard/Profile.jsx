import React, { useState, useContext, useEffect } from 'react';
import prof from '../../assets/images/download.jpg';
import { AiTwotoneEdit } from 'react-icons/ai';
import { themeContext } from '../../context/ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import { sellerProfile, updateSellerProfile } from '../../store/features/authSlice';
import { FaCamera } from 'react-icons/fa';
import { form } from '@heroui/react';
import api from '../../Axios/axios';
import toast from 'react-hot-toast';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { theme } = useContext(themeContext);
  const dispatch = useDispatch();
  const { profile, loading } = useSelector((store) => store.auth);
  const { products } = useSelector((store) => store.products)
  const [file, setFile] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [formData, setFormData] = useState({});


  useEffect(() => {
    if (!profile) {
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


  // };
  const handleSave = async () => {
  const data = new FormData();
  data.append("firstName", formData.firstName);
  data.append("lastName", formData.lastName);
  data.append("phone", formData.phone);
  data.append("whatsapp", formData.whatsapp);
  data.append("university", formData.university);
  // ...add other fields

  if (file) {
    data.append("profilePic", file); // only upload on Save
  }

  try {
    const res = await api.put("/auth/profile/edit", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    if (res.data.success) {
      toast.success("Profile updated successfully");
      dispatch(updateSellerProfile(res.data.seller)); // update redux with new profile
      setFormData(res.data.seller)
      setIsEditing(false);
    }
  } catch (error) {
    toast.error(error?.response?.data?.message || "Update failed");
  }
};

  const handleCancel = () => {
    setIsEditing(false);
    setFormData(profile); //reset back with the previous data
  };


  //For profile picture upload
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    setFile(selectedFile)
    console.log(selectedFile)
  }



  return (
    <div
      className={`space-y-6 max-w-4xl mx-auto min-h-screen p-4 ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
        }`}
    >
      <div className="flex items-center justify-between">
        <h2
          className={`text-2xl font-semibold ${theme === 'dark' ? 'text-cyan-400' : 'text-gray-800'
            }`}
        >
          My Profile
        </h2>
        {isEditing ? (
          <div className="space-x-3">
            <button type="button" onClick={handleSave} disabled={loading} className="text-sm text-green-600 hover:underline">
              {loading ? 'Saving....': 'Save'}
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

      {/* Profile Header */}
      <div
        className={`flex items-center justify-between p-6 rounded-2xl border shadow-sm ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
          }`}
      >
        {
          isEditing ? (
            <div >
              <div className="relative w-full md:col-span-2">
                <label className="block mb-1">Upload Profile Picture</label>
                <div className='text-red-500 text-sm font-light'>{errorMessage ? errorMessage : null}</div>
                <input
                  type="file"
                  name='profilePic'
                  accept='image/*'
                  onChange={handleFileChange}
                  className={`w-full rounded px-3 py-2 pr-10 border focus:outline-none focus:ring-2 focus:ring-blue-400
                           ${theme === "dark" ? "bg-gray-800 border-gray-700 text-gray-200 file:text-gray-300" : "bg-white border-gray-300 text-gray-800"}`}
                />
                <FaCamera className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 pointer-events-none" />
                <p className="text-sm mt-1 text-gray-500">Max 2MB</p>
              </div>

              {/* <button className='bg-blue-300 text-center p-1' type='submit'>Upload</button> */}
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <img src={formData.profilePic || prof}alt="" className="w-16 h-16 object-cover rounded-full" />
              <div>
                <h2
                  className={`text-base font-semibold ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
                    }`}
                >
                  {formData.firstName} {formData.lastName}
                </h2>
                <p className="text-sm text-gray-500">Seller</p>
                <p className="text-sm text-gray-400">
                  {formData.city} {formData.country}
                </p>
              </div>
            </div>)
        }


      </div>

      {/* Personal Info */}
      <div
        className={`p-6 rounded-2xl border shadow-sm space-y-4 ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
          }`}
      >
        <h3 className={`text-base font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
          Personal Information
        </h3>

        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-6 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
          <div>
            <p className={`font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>First Name</p>
            {isEditing ? (
              <input
                type="text"
                value={formData.firstName || ''}
                onChange={handleChange('firstName')}
                className={`mt-1 w-full border rounded px-3 py-2 ${theme === 'dark'
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
                className={`mt-1 w-full border rounded px-3 py-2 ${theme === 'dark'
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
                className={`mt-1 w-full border rounded px-3 py-2 ${theme === 'dark'
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
                className={`mt-1 w-full border rounded px-3 py-2 ${theme === 'dark'
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
                className={`mt-1 w-full border rounded px-3 py-2 ${theme === 'dark'
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
      <div className={`p-6 rounded-2xl border shadow-sm space-y-4 ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
        }`}>

        <h3 className={`text-base font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
          Address
        </h3>


        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-6 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
          <div>
            <p className={`font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Country</p>
            {isEditing ? (
              <input
                type="text"
                value={formData.country || ''}
                onChange={handleChange('country')}
                className={`mt-1 w-full border rounded px-3 py-2 ${theme === 'dark'
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
                value={formData.university || ''}
                onChange={handleChange('campus')}
                className={`mt-1 w-full border rounded px-3 py-2 ${theme === 'dark'
                  ? 'bg-gray-700 border-gray-600 text-gray-100'
                  : 'bg-white border-gray-300 text-gray-800'
                  }`}
              />
            ) : (
              <p>{formData.university}</p>
            )}
          </div>

          <div className="col-span-full">
            <p className={`font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>City</p>
            {isEditing ? (
              <input
                type="text"
                value={formData.city || ''}
                onChange={handleChange('city')}
                className={`mt-1 w-full border rounded px-3 py-2 ${theme === 'dark'
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
