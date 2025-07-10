import React from "react";
import Navbar from "../components/Navbar";
import Categories from "./Categories";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Categories />
      <Footer />
    </div>
  );
};

export default LandingPage;
