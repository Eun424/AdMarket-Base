import { createBrowserRouter, RouterProvider } from "react-router";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Rootlayout from "./layout/Rootlayout";
import Terms from "./pages/Terms";
import SafetyTips from "./pages/SafetyTips";
import FAQs from "./pages/FAQs";
import DashboardLayout from "./layout/DashboardLayout";

import Dashboard from "./components/DashboardComponent/Dashboard";
import MyListings from "./components/DashboardComponent/MyListings";
import Report from "./components/DashboardComponent/Report";
import AddProduct from "./components/DashboardComponent/AddProduct";
import Profile from "./components/ProfileDashboard/Profile";
import ProfileLayout from "./layout/ProfileLayout";
import Security from "./components/ProfileDashboard/Security";
import Preferences from "./components/ProfileDashboard/Preferences";
import ProductDetail from "./pages/ProductDetail";
import SubCategories from "./pages/SubCategories";
import ProfileSeller from "./components/ProfileDashboard/ProfileSeller";
import { themeContext } from "./context/ThemeContext";
import { useContext, useEffect } from "react";
import BuyerProfile from "./components/ProfileDashboard/BuyerProfile";
import { PrivateRoute, PublicRoute } from "./helpers/routeProtect";
import { useDispatch } from "react-redux";
import { currentUser } from "./store/features/authSlice";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      {
        index: true,
        element: <LandingPage />
      },
      {
        path: '/aboutus',
        element: <AboutUs />
      },
      {
        path: '/product/productById/:productId',
        element: <ProductDetail />
      },

      {
        path: '/buyer',
        element: <BuyerProfile />
      },

      {
        path: '/product/subcategory/:subCategoryId',
        element: <SubCategories />
      }

    ]
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    )
  },
  {
    path: "/signup",
    element: (<PublicRoute>
      <Signup />
    </PublicRoute>
    )
  },
  {
    path: '/forgotPassword',
    element: (<PublicRoute>
      <ForgotPassword />
    </PublicRoute>
    )
  },

  
 
  {
    path: '/resetPassword/:resetPasswordToken',
    element: (<PublicRoute>
      <ResetPassword />
    </PublicRoute>
    )
  },
  {
    path: '/tips',
    element: <SafetyTips />
  },
  {
    path: '/terms',
    element: <Terms />
  },
  {
    path: '/faqs',
    element: <FAQs />
  },

  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element:
          <Dashboard />
      },
      {
        path: 'listings',
        element: <MyListings />
      },
      {
        path: 'report',
        element: <Report />
      },
      {
        path: 'add',
        element: <AddProduct />
      },

      {
        path: 'profile',
        element: <ProfileLayout />,
        children: [
          {
            index: true,
            element: <Profile />
          },
          {
            path: 'security',
            element: <Security />
          },
          {
            path: 'preferences',
            element: <Preferences />
          }

        ]
      },
    ]
  }
]);

function App() {
  const { theme } = useContext(themeContext);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(currentUser())
  },  [dispatch])


  return <div className={theme === "dark" ? "bg-gray-900 text-white min-h-screen" : "bg-white text-black min-h-screen"}>
    <RouterProvider router={router} /></div>
}

export default App;
