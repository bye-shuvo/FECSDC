import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Header from "../UI/Header";
import image from "../assets/roadmap-header-banner.jpg";
import RoadmapFilter from "./RoadmapFilter";
import RoadmapPath from "./RoadmapPath";

const RoadmapPage = () => {
  const [selectedCategories, setSelectedCategories] = useState([
    "web",
    "mobile",
    "desktop",
  ]);
  const title = "Roadmap";
  const description =
    "Your comprehensive guide to mastering software engineering. Choose your path and start building amazing applications.";

  const handleToggleCategory = (category) => {
    if (category === "all") {
      setSelectedCategories(["web", "mobile", "desktop"]);
    } else if (category === "clear") {
      setSelectedCategories([]);
    } else {
      setSelectedCategories((prev) =>
        prev.includes(category)
          ? prev.filter((c) => c !== category)
          : [...prev, category]
      );
    }
  };

  return (
    <div className="min-h-screen w-full bg-body">
      <Navbar />
      <header className="h-[50vh] flex flex-col items-center justify-end px-[30%] text-center mb-10">
        <img
          className="z-10 absolute top-0 w-full object-center opacity-30 mask-b-from-30%"
          src={image}
          alt="header-image"
        />
        <h1 className="z-10 text-[3.5rem] font-bold text-foreground text-amber-300">
          {title}
        </h1>
        <h2 className="z-10 text-paragraph-text-dark/70 text-xl">
          {description}
        </h2>
        <div className="flex gap-6 text-paragraph-text-dark mt-6 transition-all ease-in-out">
          <p className="z-10 px-5 py-3 bg-sidebar border rounded-xl hover:scale-[1.02]">
            Paths Available:{" "}
            <span className="font-bold">{selectedCategories.length}</span>
          </p>
          <p className="z-10 px-5 py-3 bg-sidebar border rounded-xl hover:scale-[1.02]">
            Technologies: <span className="font-bold">20+</span>
          </p>
        </div>
      </header>
      <main className="flex gap-5 px-[10%]">
        <RoadmapFilter
          selectedCategories={selectedCategories}
          onToggleCategory={handleToggleCategory}
        />
        {selectedCategories.length === 0 ? (
          <div className="text-center py-16 text-paragraph-text-dark w-full">
            <div className="inline-block p-6 bg-sidebar/50 rounded-2xl mb-4">
              <svg className="w-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path className="fill-white" d="M128 96C92.7 96 64 124.7 64 160L64 416C64 451.3 92.7 480 128 480L272 480L256 528L184 528C170.7 528 160 538.7 160 552C160 565.3 170.7 576 184 576L456 576C469.3 576 480 565.3 480 552C480 538.7 469.3 528 456 528L384 528L368 480L512 480C547.3 480 576 451.3 576 416L576 160C576 124.7 547.3 96 512 96L128 96zM160 160L480 160C497.7 160 512 174.3 512 192L512 352C512 369.7 497.7 384 480 384L160 384C142.3 384 128 369.7 128 352L128 192C128 174.3 142.3 160 160 160z" />
              </svg>
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-2">
              No Categories Selected
            </h3>
            <p className="text-paragraph-text-dark/70">
              Select at least one category to view learning paths
            </p>
          </div>
        ) : (
          <RoadmapPath selectedCategories={selectedCategories} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default RoadmapPage;
