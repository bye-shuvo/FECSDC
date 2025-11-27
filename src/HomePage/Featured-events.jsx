import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const FeaturedEvents = () => {
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

  return (
    <section className="flex flex-col items-center gap-4 px-[10%] py-20">
      <header className="w-full mb-5">
        <h2 className="text-[3rem] font-semibold text-white">
          Upcoming Events
        </h2>
        <h3 className="text-xl text-paragraph-text-dark/70">
          Join us for workshops , sessions , events & career opportunities
        </h3>
      </header>
      <div id="events" className="w-full flex flex-col gap-5 mb-5">
        {events.map((event, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-3 items-center justify-center min-h-56"
            >
              <div
                className={`bg-sidebar/30 relative text-white outline-1 outline-secondary-header rounded-lg min-h-full flex flex-col gap-2 p-5 pb-12 ${
                  index % 2 === 0 ? "order-1" : "order-3"
                }`}
              >
                <span className="text-xs w-fit rounded-full py-1 px-2 bg-cta-btn/30">
                  {event.category}
                </span>
                <p className="text-2xl font-bold mb-3">{event.title}</p>
                <p className="text-md text-paragraph-text-dark">
                  {event.description}
                </p>
                <p className="absolute bottom-3 left-5 text-sm bg-secondary-header/70 px-2 py-1 rounded-full">
                  {event.location}
                </p>
                <p className="absolute bottom-3 right-3 text-sm bg-secondary-header/70 px-2 py-1 rounded-full">
                  {event.attendees}
                </p>
              </div>
              <div className="text-white flex flex-col items-center relative order-2">
                <div className="absolute top-1/2 h-1 w-full bg-amber-400"></div>
                <div className="flex flex-col items-center px-5 bg-cta-btn rounded-full">
                  <p>{event.date}</p>
                  <p>{event.time}</p>
                </div>
              </div>
              <div
                className={`text-white flex flex-col items-center relative ${
                  index % 2 === 0 ? "order-3" : "order-1"
                }`}
              >
                <img className="w-full" src="/src/assets/event.png" alt="event-photo" />
              </div>
            </div>
          );
        })}
      </div>
      <Link
        to={"/events"}
        className="hover:bg-cta-btn/50 hover:shadow-[0_0_8px_0px] hover:shadow-cta-btn px-20 py-3 rounded-full outline-1 outline-cta-btn text-white"
      >
        View All Events
      </Link>
    </section>
  );
};

export default FeaturedEvents;
