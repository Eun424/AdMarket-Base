import React from 'react'
import ProfileSidebar from '../components/ProfileDashboard/ProfileSidebar'
import { Outlet } from 'react-router'

const ProfileLayout = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row shadow-2xl rounded-3xl">
     
      <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-gray-100">
        <ProfileSidebar />
      </div>

      
      <div className="flex-1 px-4 py-6 sm:px-8">
        <Outlet />
      </div>
    </div>
  )
}

export default ProfileLayout
