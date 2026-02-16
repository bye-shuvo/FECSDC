import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Events from "./Events";

const EventPage = () => {

  return (
    <div className="w-full min-h-screen bg-body flex flex-col gap-10 text-white">
      <Navbar />
      <main className="px-[10%] min-h-screen">
        <header className="h-[55vh] flex flex-col items-center justify-center ">
          <img
            className="z-10 absolute top-0 w-full object-center opacity-30 mask-b-from-30%"
            src="/src/assets/event-header-banner.jpg"
            alt=""
          />

          <h1 className="z-10 text-[3.5rem] font-bold text-foreground text-amber-300">
            All Events
          </h1>
          <h2 className="z-10 text-paragraph-text-dark/70 text-xl">
            Discover workshops, seminars, and networking events hosted by our
            community
          </h2>
        </header>
        <Events />
      </main>
      <Footer />
    </div>
  );
};

export default EventPage;
