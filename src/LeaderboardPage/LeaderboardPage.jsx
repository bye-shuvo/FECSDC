import React from "react";
import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";
import Leaderboard from "./Leaderboard";

const LeaderboardPage = () => {
  return (
    <div className="w-full min-h-screen bg-body flex flex-col gap-10 text-white">
      <Navbar />
      <main className="min-h-screen px-[15%]">
        <header className="h-[35vh] flex flex-col items-center justify-end mb-15">
          <img
            className="z-1 absolute top-0 w-full object-center opacity-30 mask-b-from-30%"
            src="/src/assets/leaderboard-header-banner.jpg"
            alt="leaderboard-banner"
          />
          <h1 className="z-2 text-[3.5rem] font-bold text-foreground text-amber-300">
            Leaderboard
          </h1>
          <h2 className="z-2 text-paragraph-text-dark/70 text-xl">
            Discover top contributors and active members of our community
          </h2>
        </header>
        <Leaderboard />
      </main>
      <Footer />
    </div>
  );
};

export default LeaderboardPage;
