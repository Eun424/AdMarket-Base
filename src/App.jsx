import { createBrowserRouter, RouterProvider } from "react-router";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Rootlayout from "./layout/Rootlayout";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },

    {
      path: "/aboutus",
      element: <Rootlayout />,
      children: [{ path: "", element: <AboutUs /> }],
    },
    // { path: "aboutus",
    //    element: <AboutUs /> },
    { path: "login", element: <Login /> },
    { path: "signup", element: <Signup /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
