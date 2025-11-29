import React from "react";
import { useState } from "react";

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
      image: "/src/assets/event.png",
    },
  ]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = ["All", "Session", "Workshop", "Hackathon"];

  const filteredEvents =
    selectedCategory === null || selectedCategory === "All"
      ? events
      : events.filter((event) => event.category === selectedCategory);
  return (
    <>
      <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
        <svg
          className="h-8 mr-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
        >
          <path
            className="fill-white"
            d="M96 128C83.1 128 71.4 135.8 66.4 147.8C61.4 159.8 64.2 173.5 73.4 182.6L256 365.3L256 480C256 488.5 259.4 496.6 265.4 502.6L329.4 566.6C338.6 575.8 352.3 578.5 364.3 573.5C376.3 568.5 384 556.9 384 544L384 365.3L566.6 182.7C575.8 173.5 578.5 159.8 573.5 147.8C568.5 135.8 556.9 128 544 128L96 128z"
          />
        </svg>
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
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="bg-sidebar/30 rounded-[3rem] overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={event.image}
              className="h-75 w-full aspect-square object-cover object-center rounded-b-[3rem] shadow-[0_0_20px_0px] shadow-secondary-header"
              alt=""
            />
            <div className="p-7 flex items-center gap-5">
              <div className="w-1/3 pr-5 flex flex-col items-start gap-5 border-r-2 border-cta-btn">
                {" "}
                <span className="text-xs rounded-full py-1 px-2 bg-cta-btn/30">
                  {event.category}
                </span>
                <p className="text-5xl font-semibold">{event.date}</p>
                <p className="flex gap-2 text-center">
                  <svg
                    className="w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                  >
                    <path
                      className="fill-paragraph-text-dark"
                      d="M320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"
                    />
                  </svg>
                  {event.time}
                </p>
              </div>
              <div className="w-2/3">
                <h3 className="text-2xl font-bold mb-4 mt-3">{event.title}</h3>
                <p className="text-paragraph-text-dark mb-3">
                  {event.description}
                </p>

                <div className="flex flex-col text-sm mb-4 space-y-3">
                  <p className="flex gap-2 items-center">
                    <svg
                      className="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                    >
                      <path
                        className="fill-white"
                        d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"
                      />
                    </svg>
                    {event.location}
                  </p>
                  <p className="flex gap-2 items-center">
                    <svg
                      className="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                    >
                      <path
                        className="fill-white"
                        d="M96 192C96 130.1 146.1 80 208 80C269.9 80 320 130.1 320 192C320 253.9 269.9 304 208 304C146.1 304 96 253.9 96 192zM32 528C32 430.8 110.8 352 208 352C305.2 352 384 430.8 384 528L384 534C384 557.2 365.2 576 342 576L74 576C50.8 576 32 557.2 32 534L32 528zM464 128C517 128 560 171 560 224C560 277 517 320 464 320C411 320 368 277 368 224C368 171 411 128 464 128zM464 368C543.5 368 608 432.5 608 512L608 534.4C608 557.4 589.4 576 566.4 576L421.6 576C428.2 563.5 432 549.2 432 534L432 528C432 476.5 414.6 429.1 385.5 391.3C408.1 376.6 435.1 368 464 368z"
                      />
                    </svg>
                    {event.attendees} people interested
                  </p>
                </div>
                <button className="hover:bg-cta-btn/50 hover:shadow-[0_0_8px_0px] hover:shadow-cta-btn px-10 py-2 w-full rounded-full outline-1 outline-cta-btn text-white">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <p className="text-mu text-xl">No events found in this category</p>
        </div>
      )}
    </>
  );
};

export default Events;
