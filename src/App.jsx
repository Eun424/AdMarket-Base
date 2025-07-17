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
import Dashboard from "./components/Dashboard";
import MyListings from "./components/MyListings";
import Report from "./components/Report";
import Logout from "./auth/Logout";
import Profile from "./components/Profile";
import AddNew from "./components/AddNew";

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
          element: <Dashboard/>
        },
        {
          path: 'listings',
          element: <MyListings/>
        },
        {
          path: 'report',
          element: <Report/>
        },
        {
          path: 'add',
          element: <AddNew/>
        },
        {
          path: 'profile',
          element: <Profile/>
        },
        {
          path: 'logout',
          element: <Logout/>
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
