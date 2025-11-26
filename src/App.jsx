import React from "react";
import Hero from "./HomePage/Hero";
import Navbar from "./HomePage/Navbar";
import Footer from "./HomePage/Footer";
import FeaturedEvents from "./HomePage/featured-events";
import CommitteePreview from "./HomePage/committee-preview";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-body flex flex-col">
      <Navbar />
      <Hero />
      <FeaturedEvents />
      <CommitteePreview />
      <Footer />
    </div>
  );
};

export default App;
