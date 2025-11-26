import React, { useState } from "react";
import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";

const Events = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Web Development Workshop",
      description:
        "Learn modern web development with React and Next.js from industry experts",
      date: "Dec 15, 2024",
      time: "3:00 PM",
      location: "Lab Building, Room 201",
      attendees: 45,
      category: "Workshop",
      image: "/web-development-workshop.png",
    },
    {
      id: 2,
      title: "AI & Machine Learning Seminar",
      description:
        "Introduction to AI/ML concepts, practical applications, and future trends",
      date: "Dec 22, 2024",
      time: "2:00 PM",
      location: "Auditorium",
      attendees: 120,
      category: "Seminar",
      image: "/machine-learning-conference.jpg",
    },
    {
      id: 3,
      title: "Hackathon 2024",
      description:
        "24-hour coding challenge with exciting prizes and networking opportunities",
      date: "Jan 10, 2025",
      time: "9:00 AM",
      location: "Main Campus",
      attendees: 200,
      category: "Hackathon",
      image: "/coding-hackathon.png",
    },
    {
      id: 4,
      title: "Git & Version Control Basics",
      description: "Master Git and GitHub for collaborative development",
      date: "Dec 18, 2024",
      time: "4:30 PM",
      location: "Lab Building, Room 101",
      attendees: 35,
      category: "Workshop",
      image: "/git-github-tutorial.jpg",
    },
    {
      id: 5,
      title: "Career Talk: Tech Industry Insights",
      description:
        "Hear from professionals about career paths and industry trends",
      date: "Jan 5, 2025",
      time: "11:00 AM",
      location: "Conference Hall",
      attendees: 80,
      category: "Seminar",
      image: "/career-conference.jpg",
    },
    {
      id: 6,
      title: "Cloud Computing Bootcamp",
      description: "Deploy applications on AWS, Azure, and Google Cloud",
      date: "Jan 15, 2025",
      time: "10:00 AM",
      location: "Lab Building, Room 301",
      attendees: 50,
      category: "Workshop",
      image: "/cloud-computing-concept.png",
    },
  ]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = ["All", "Session", "Workshop", "Hackathon"];

  const filteredEvents =
    selectedCategory === null || selectedCategory === "All"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  return (
    <div className="w-full min-h-screen bg-body flex flex-col gap-10 text-white">
      <Navbar />
      <main className="px-[10%] min-h-screen">
        <header className="h-[55vh] flex flex-col items-center justify-center ">
          <img className="z-10 absolute top-0 w-full object-center opacity-30 mask-b-from-30%" src="/src/assets/event-header-banner.jpg" alt="" />
          
          <h1 className="z-10 text-[3.5rem] font-bold text-foreground text-amber-300">
            All Events
          </h1>
          <h2 className="z-10 text-paragraph-text-dark/70 text-xl">
            Discover workshops, seminars, and networking events hosted by our
            community
          </h2>
        </header>

        <filter className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          <svg className="h-8 mr-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path className="fill-white" d="M96 128C83.1 128 71.4 135.8 66.4 147.8C61.4 159.8 64.2 173.5 73.4 182.6L256 365.3L256 480C256 488.5 259.4 496.6 265.4 502.6L329.4 566.6C338.6 575.8 352.3 578.5 364.3 573.5C376.3 568.5 384 556.9 384 544L384 365.3L566.6 182.7C575.8 173.5 578.5 159.8 573.5 147.8C568.5 135.8 556.9 128 544 128L96 128z"/></svg>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setSelectedCategory(category === "All" ? null : category)
              }
              className={`px-6 py-1 rounded-full font-semibold whitespace-nowrap transition-all ${
                (selectedCategory === null && category === "All") ||
                selectedCategory === category
                  ? "bg-cta-btn/40 text-paragraph-text-dark"
                  : "hover:bg-secondary-header/80"
              }`}
            >
              {category}
            </button>
          ))}
        </filter>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-sidebar/30 outline-2 outline-secondary-header rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div
                className={`h-48 bg-cover bg-center bg-[${event.image}]`}
              />

              <div className="p-6">
                <div className="mb-3">
                  <span className="text-xs font-semibold text-secondary bg-secondary/20 px-3 py-1 rounded-full">
                    {event.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {event.title}
                </h3>
                <p className="text-muted-foreground mb-5">
                  {event.description}
                </p>

                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span>
                      {event.date} at {event.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span>{event.attendees} people interested</span>
                  </div>
                </div>

                <button className="w-full py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-mu text-xl">
              No events found in this category
            </p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Events;
