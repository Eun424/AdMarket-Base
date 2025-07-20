import React from 'react'
import prof from '../../assets/images/avatar.jpg'
import { AiTwotoneEdit } from 'react-icons/ai'

const Profile = () => {
  return (
   <div className="space-y-6 max-w-4xl mx-auto">
  <h2 className="text-2xl font-semibold text-gray-800">My Profile</h2>

  {/* Profile Header */}
  <div className="flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
    <div className="flex items-center gap-4">
      <img src={prof} alt="" className="w-16 h-16 object-cover rounded-full" />
      <div>
        <h2 className="text-base font-semibold text-gray-800">Eunice Asamoah</h2>
        <p className="text-sm text-gray-500">Seller</p>
        <p className="text-sm text-gray-400">Kumasi, Ghana</p>
      </div>
    </div>
    <button className="text-sm flex items-center gap-1 text-blue-600 hover:underline">
      Edit <AiTwotoneEdit size={16} />
    </button>
  </div>

  {/* Personal Info */}
  <div className="p-6 bg-white rounded-2xl border-gray-100  border shadow-sm space-y-4">
    <div className="flex items-center justify-between">
      <h3 className="text-base font-medium text-gray-700">Personal Information</h3>
      <button className="text-sm flex items-center gap-1 text-blue-600 hover:underline">
        Edit <AiTwotoneEdit size={16} />
      </button>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 text-sm text-gray-600">
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
      <div className="">
        <p className="font-medium text-gray-500">Bio</p>
        <p>A student</p>
      </div>
    </div>
  </div>

  {/* Address Info */}
  <div className="p-6 bg-white rounded-2xl border-gray-100  border shadow-sm space-y-4">
    <div className="flex items-center justify-between">
      <h3 className="text-base font-medium text-gray-700">Address</h3>
      <button className="text-sm flex items-center gap-1 text-blue-600 hover:underline">
        Edit <AiTwotoneEdit size={16} />
      </button>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 text-sm text-gray-600">
      <div>
        <p className="font-medium text-gray-500">Country</p>
        <p>Ghana</p>
      </div>
      <div>
        <p className="font-medium text-gray-500">Campus</p>
        <p>KNUST</p>
      </div>
      <div className="col-span-full">
        <p className="font-medium text-gray-500">City</p>
        <p>Kumasi</p>
      </div>
    </div>
  </div>
</div>

  )
}

export default Profile
