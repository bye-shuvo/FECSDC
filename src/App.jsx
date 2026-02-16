import Hero from "./HomePage/Hero";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import FeaturedEvents from "./HomePage/featured-events";
import CommitteePreview from "./HomePage/committee-preview";
import Features from "./HomePage/Features";
import CTA from "./HomePage/CTA";
import { useLocation } from "react-router";

const App = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div className="w-full min-h-screen bg-body flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <FeaturedEvents />
      <CommitteePreview />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
