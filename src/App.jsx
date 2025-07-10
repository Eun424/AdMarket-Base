import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './auth/Login'
import Signup from './auth/Signup'
import LandingPage from './pages/LandingPage'
import Rootlayout from './layout/Rootlayout'
import FAQs from './pages/FAQs'
import Terms from './pages/Terms'
import SafetyTips from './pages/SafetyTips'
import AboutUs from './pages/AboutUs'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Rootlayout />,
      children: [
        {
          index: true,
          element: <LandingPage />
        },
      ]
    },
    {
      path: '/Faqs',
      element: <FAQs />
    },
    {
      path: '/terms',
      element: <Terms />
    },
    {
      path: '/tips',
      element: <SafetyTips />
    },

    {
    path: '/aboutus',
    element: <AboutUs />,
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
