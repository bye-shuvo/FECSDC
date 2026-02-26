import Hero from "./HomePage/Hero";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import FeaturedEvents from "./HomePage/FeaturedEvent";
import CommitteePreview from "./HomePage/Committee";
import Features from "./HomePage/Features";
import CTA from "./HomePage/CTA";
import { useLocation } from "react-router";

const App = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div className="bg-body flex flex-col box-border">
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
