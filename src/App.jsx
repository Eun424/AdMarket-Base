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
import Logout from "./auth/Logout";
import Dashboard from "./components/DashboardComponent/Dashboard";
import MyListings from "./components/DashboardComponent/MyListings";
import Report from "./components/DashboardComponent/Report";
import AddProduct from "./components/DashboardComponent/AddProduct";
import Profile from "./components/ProfileDashboard/Profile";
import ProfileLayout from "./layout/ProfileLayout";
import Security from "./components/ProfileDashboard/Security";
import Preferences from "./components/ProfileDashboard/Preferences";


function App() {
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
        }

      ]
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <Signup />
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
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />
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
        {
          path: 'logout',
          element: <Logout />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
