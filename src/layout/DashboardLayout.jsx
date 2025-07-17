import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router'
import Navbar2 from '../components/Navbar2'

const DashboardLayout = () => {
  return (
    <div className='min-h-screen flex'>
        <Sidebar/>

        <div className='flex flex-col flex-1'>
        <Navbar2/>

        <div className='p-4'>
        <Outlet/>
        </div>
    </div>
    </div>
  )
}

export default DashboardLayout