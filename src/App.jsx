import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './auth/Login'
import Signup from './auth/Signup'
import LandingPage from './pages/LandingPage'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <Signup />
    }
  ])









  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
