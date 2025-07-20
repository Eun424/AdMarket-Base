import React from 'react'

import { Outlet } from 'react-router'
import Sidebar from '../components/DashboardComponent/Sidebar'
import Navbar2 from '../components/DashboardComponent/Navbar2'


const DashboardLayout = () => {
  return (
    <div className='h-screen flex overflow-hidden'>
        <Sidebar/>

        <div className='flex flex-col flex-1'>
        <Navbar2/>

        <div className='p-4 flex-1 overflow-auto'>
        <Outlet/>
        </div>
    </div>
    </div>
  )
}

export default DashboardLayout