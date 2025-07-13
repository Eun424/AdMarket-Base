import { createBrowserRouter, RouterProvider } from "react-router";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Rootlayout from "./layout/Rootlayout";
import Terms from "./pages/Terms";
import SafetyTips from "./pages/SafetyTips";
import FAQs from "./pages/FAQs";

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
     element: <Login /> },
    { 
      path: "/signup", 
      element: <Signup />
     },
      {
        path: '/tips',
        element: <SafetyTips/>
      },
      {
        path: '/faqs',
        element: <FAQs/>
      },
      {
        path: '/terms',
        element: <Terms/>
      }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
