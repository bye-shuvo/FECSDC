import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const AboutPage = () => {
  const values = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          <path d="M512 320C512 214 426 128 320 128C214 128 128 214 128 320C128 426 214 512 320 512C426 512 512 426 512 320zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM320 400C364.2 400 400 364.2 400 320C400 275.8 364.2 240 320 240C275.8 240 240 275.8 240 320C240 364.2 275.8 400 320 400zM320 176C399.5 176 464 240.5 464 320C464 399.5 399.5 464 320 464C240.5 464 176 399.5 176 320C176 240.5 240.5 176 320 176zM288 320C288 302.3 302.3 288 320 288C337.7 288 352 302.3 352 320C352 337.7 337.7 352 320 352C302.3 352 288 337.7 288 320z" />
        </svg>
      ),
      title: "Our Mission",
      description:
        "To create a vibrant community where students can learn software development, collaborate on projects, and prepare for successful careers in technology.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          <path d="M208.3 64L432.3 64C458.8 64 480.4 85.8 479.4 112.2C479.2 117.5 479 122.8 478.7 128L528.3 128C554.4 128 577.4 149.6 575.4 177.8C567.9 281.5 514.9 338.5 457.4 368.3C441.6 376.5 425.5 382.6 410.2 387.1C390 415.7 369 430.8 352.3 438.9L352.3 512L416.3 512C434 512 448.3 526.3 448.3 544C448.3 561.7 434 576 416.3 576L224.3 576C206.6 576 192.3 561.7 192.3 544C192.3 526.3 206.6 512 224.3 512L288.3 512L288.3 438.9C272.3 431.2 252.4 416.9 233 390.6C214.6 385.8 194.6 378.5 175.1 367.5C121 337.2 72.2 280.1 65.2 177.6C63.3 149.5 86.2 127.9 112.3 127.9L161.9 127.9C161.6 122.7 161.4 117.5 161.2 112.1C160.2 85.6 181.8 63.9 208.3 63.9zM165.5 176L113.1 176C119.3 260.7 158.2 303.1 198.3 325.6C183.9 288.3 172 239.6 165.5 176zM444 320.8C484.5 297 521.1 254.7 527.3 176L475 176C468.8 236.9 457.6 284.2 444 320.8z" />
        </svg>
      ),
      title: "Learning First",
      description:
        "We prioritize hands-on learning through workshops, bootcamps, and real-world projects that build practical skills.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          <path d="M96 192C96 130.1 146.1 80 208 80C269.9 80 320 130.1 320 192C320 253.9 269.9 304 208 304C146.1 304 96 253.9 96 192zM32 528C32 430.8 110.8 352 208 352C305.2 352 384 430.8 384 528L384 534C384 557.2 365.2 576 342 576L74 576C50.8 576 32 557.2 32 534L32 528zM464 128C517 128 560 171 560 224C560 277 517 320 464 320C411 320 368 277 368 224C368 171 411 128 464 128zM464 368C543.5 368 608 432.5 608 512L608 534.4C608 557.4 589.4 576 566.4 576L421.6 576C428.2 563.5 432 549.2 432 534L432 528C432 476.5 414.6 429.1 385.5 391.3C408.1 376.6 435.1 368 464 368z" />
        </svg>
      ),
      title: "Community Driven",
      description:
        "We foster an inclusive environment where members support each other's growth and celebrate achievements together.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          <path d="M320.3 192L235.7 51.1C229.2 40.3 215.6 36.4 204.4 42L117.8 85.3C105.9 91.2 101.1 105.6 107 117.5L176.6 256.6C146.5 290.5 128.3 335.1 128.3 384C128.3 490 214.3 576 320.3 576C426.3 576 512.3 490 512.3 384C512.3 335.1 494 290.5 464 256.6L533.6 117.5C539.5 105.6 534.7 91.2 522.9 85.3L436.2 41.9C425 36.3 411.3 40.3 404.9 51L320.3 192zM351.1 334.5C352.5 337.3 355.1 339.2 358.1 339.6L408.2 346.9C415.9 348 418.9 357.4 413.4 362.9L377.1 398.3C374.9 400.5 373.9 403.5 374.4 406.6L383 456.5C384.3 464.1 376.3 470 369.4 466.4L324.6 442.8C321.9 441.4 318.6 441.4 315.9 442.8L271.1 466.4C264.2 470 256.2 464.2 257.5 456.5L266.1 406.6C266.6 403.6 265.6 400.5 263.4 398.3L227.1 362.9C221.5 357.5 224.6 348.1 232.3 346.9L282.4 339.6C285.4 339.2 288.1 337.2 289.4 334.5L311.8 289.1C315.2 282.1 325.1 282.1 328.6 289.1L351 334.5z" />
        </svg>
      ),
      title: "Excellence",
      description:
        "We encourage members to challenge themselves through competitions and continuous skill development.",
    },
  ];

  const executives = [
    {
      id: 1,
      name: "Ahmed Hassan",
      position: "President",
      role: "Full Stack Developer",
      image: "",
      specialty: "React & Node.js",
    },
    {
      id: 2,
      name: "Md. Abu Hasnat Shuvo",
      position: "Organizing Secratary",
      role: "UI/UX Designer",
      image: "",
      specialty: "Design Systems",
    },
    {
      id: 3,
      name: "Rafi Khan",
      position: "Joint Organizing Secretary",
      role: "Backend Engineer",
      image: "",
      specialty: "Database & APIs",
    },
    {
      id: 4,
      name: "Nasrin Begum",
      position: "President",
      role: "Data Scientist",
      image: "",
      specialty: "ML & Analytics",
    },
  ];

  const rules = [
    "Respect all members regardless of skill level or background",
    "Attend at least 60% of workshops and events to maintain active membership",
    "Contribute to the community through mentoring or organizing events",
    "Follow the code of conduct in all club activities",
    "Share knowledge and help fellow members grow",
    "Participate ethically in all competitions and contests",
  ];

  return (
    <div className="w-full min-h-screen bg-body flex flex-col gap-10 text-white">
      <Navbar />
      <main className="min-h-screen px-[15%] flex flex-col gap-10">
        <header className="h-[40vh] flex flex-col items-center justify-end mb-15">
          <img
            className="z-1 absolute top-0 w-full object-center opacity-30 mask-b-from-50%"
            src="/src/assets/about-header-banner.jpg"
            alt="leaderboard-banner"
          />
          <h1 className="z-2 text-[3.5rem] font-bold text-foreground text-amber-300">
            About Our Club
          </h1>
          <h2 className="z-2 text-paragraph-text-dark/70 text-xl text-center">
            The FEC Software Development Club is a student-led organization
            dedicated to teaching programming fundamentals and building a strong
            developer community at Faridpur Engineering College.
          </h2>
        </header>
        {/* values */}
        <div className="container mx-auto">
          <h2 className="text-[3rem] font-semibold text-white mb-8">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {values.map((feature, index) => (
              <div
                key={index}
                className="border-2 border-secondary-header hover:border-cta-btn hover:scale-105 transition-all rounded-2xl p-5 bg-sidebar/50"
              >
                <span className="flex h-15 first:in-first:fill-cta-btn mb-2">
                  {feature.icon}
                </span>
                <header className="flex flex-col gap-3">
                  <h2 className="text-2xl font-semibold">{feature.title}</h2>
                  <h3 className="text-md">{feature.description}</h3>
                </header>
              </div>
            ))}
          </div>
        </div>
        {/* mentors */}
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-[3rem] font-bold text-foreground mb-5">
            Our Mentors & Leaders
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {executives.map((member) => (
              <div
                key={member.id}
                className="h-85 outline-5 outline-secondary-header rounded-lg text-center hover:shadow-lg transition-shadow bg-[url(/src/assets/executive-members/org_sec.jpeg)] bg-no-repeat bg-center bg-cover bg-clip-content hover:scale-[105%] hover:shadow-secondary-header/30 shadow-lg"
              >
                <div className="flex flex-col h-full justify-end items-center overflow-hidden bg-linear-to-b from-0% from-transparent via-55% via-secondary-header/40 to-95% to-secondary-header/90">
                  <h3 className="z-10 font-bold text-[1.5rem]">
                    {member.name}
                  </h3>
                  <p className="z-10 font-semibold text-sm mb-1">
                    {member.role}
                  </p>
                  <p className="z-10 text-xs">{member.specialty}</p>
                  <p className="z-0 mt-2 text-5xl text-center font-semibold leading-10">
                    {member.position.toUpperCase()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* guideline */}
        <div className="container px-[10%]">
          <h2 className="text-3xl md:text-[3rem] font-bold text-foreground mb-5">
            Membership Guidelines
          </h2>
          <div className="p-8 bg-sidebar/50 border-2 border-sidebar rounded-2xl">
            <h3 className="text-lg md:text-[2rem] font-bold text-foregrounds">
              Code Of Conduct
            </h3>
            <p>
              All members are expected to follow these guidelines to maintain a
              positive and productive learning environment
            </p>
            <ul className="space-y-3 mt-5">
              {rules.map((rule, index) => (
                <li key={index} className="flex gap-4 items-center">
                  <p className="h-7 w-7 bg-cta-btn/50 rounded-full text-xl flex justify-center items-center">
                    {index + 1}
                  </p>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
