import React from "react";

const RoadmapPath = ({ selectedCategories }) => {
  const webDevStages = [
    {
      title: "Frontend Fundamentals",
      description: "Master the core building blocks of web development",
      technologies: [
        { name: "HTML5", level: "beginner" },
        { name: "CSS3", level: "beginner" },
        { name: "JavaScript", level: "beginner" },
        { name: "Git", level: "beginner" },
      ],
    },
    {
      title: "Modern Frontend Frameworks",
      description: "Build dynamic and interactive user interfaces",
      technologies: [
        { name: "React", level: "intermediate" },
        { name: "TypeScript", level: "intermediate" },
        { name: "Tailwind CSS", level: "intermediate" },
        { name: "Next.js", level: "intermediate" },
      ],
    },
    {
      title: "Backend & APIs",
      description: "Create powerful server-side applications",
      technologies: [
        { name: "Node.js", level: "intermediate" },
        { name: "Express", level: "intermediate" },
        { name: "REST APIs", level: "intermediate" },
        { name: "PostgreSQL", level: "intermediate" },
      ],
    },
    {
      title: "Advanced Topics",
      description: "Level up with professional tools and practices",
      technologies: [
        { name: "GraphQL", level: "advanced" },
        { name: "Docker", level: "advanced" },
        { name: "AWS/Cloud", level: "advanced" },
        { name: "CI/CD", level: "advanced" },
      ],
    },
  ];

  const mobileDevStages = [
    {
      title: "Mobile Development Basics",
      description: "Learn the fundamentals of mobile app development",
      technologies: [
        { name: "Mobile UI/UX", level: "beginner" },
        { name: "JavaScript", level: "beginner" },
        { name: "API Integration", level: "beginner" },
      ],
    },
    {
      title: "Cross-Platform Development",
      description: "Build apps for iOS and Android simultaneously",
      technologies: [
        { name: "React Native", level: "intermediate" },
        { name: "Flutter", level: "intermediate" },
        { name: "Expo", level: "intermediate" },
      ],
    },
    {
      title: "Native Development",
      description: "Platform-specific development for optimal performance",
      technologies: [
        { name: "Swift (iOS)", level: "advanced" },
        { name: "Kotlin (Android)", level: "advanced" },
        { name: "SwiftUI", level: "advanced" },
        { name: "Jetpack Compose", level: "advanced" },
      ],
    },
    {
      title: "Mobile DevOps",
      description: "Deploy and maintain mobile applications",
      technologies: [
        { name: "App Store Deploy", level: "advanced" },
        { name: "Firebase", level: "intermediate" },
        { name: "Push Notifications", level: "intermediate" },
      ],
    },
  ];

  const desktopDevStages = [
    {
      title: "Desktop Foundations",
      description: "Start building desktop applications",
      technologies: [
        { name: "Programming Basics", level: "beginner" },
        { name: "UI/UX Principles", level: "beginner" },
        { name: "File Systems", level: "beginner" },
      ],
    },
    {
      title: "Cross-Platform Desktop",
      description: "Create apps that work on Windows, Mac, and Linux",
      technologies: [
        { name: "Electron", level: "intermediate" },
        { name: "Tauri", level: "intermediate" },
        { name: "React", level: "intermediate" },
      ],
    },
    {
      title: "Native Desktop Apps",
      description: "Build platform-specific applications",
      technologies: [
        { name: "C++ & Qt", level: "advanced" },
        { name: ".NET & WPF", level: "advanced" },
        { name: "Swift (macOS)", level: "advanced" },
      ],
    },
    {
      title: "Advanced Desktop",
      description: "Professional desktop app development",
      technologies: [
        { name: "System APIs", level: "advanced" },
        { name: "Performance Opt", level: "advanced" },
        { name: "Code Signing", level: "advanced" },
      ],
    },
  ];

  const selectedStages = [];
  selectedCategories.map((category) => {
    category === "web" &&
      selectedStages.push({
        title: "Web Development",
        description: "Build modern, responsive websites and web applications",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path d="M119.7 263.7L150.6 294.6C156.6 300.6 164.7 304 173.2 304L194.7 304C203.2 304 211.3 307.4 217.3 313.4L246.6 342.7C252.6 348.7 256 356.8 256 365.3L256 402.8C256 411.3 259.4 419.4 265.4 425.4L278.7 438.7C284.7 444.7 288.1 452.8 288.1 461.3L288.1 480C288.1 497.7 302.4 512 320.1 512C337.8 512 352.1 497.7 352.1 480L352.1 477.3C352.1 468.8 355.5 460.7 361.5 454.7L406.8 409.4C412.8 403.4 416.2 395.3 416.2 386.8L416.2 352.1C416.2 334.4 401.9 320.1 384.2 320.1L301.5 320.1C293 320.1 284.9 316.7 278.9 310.7L262.9 294.7C258.7 290.5 256.3 284.7 256.3 278.7C256.3 266.2 266.4 256.1 278.9 256.1L313.6 256.1C326.1 256.1 336.2 246 336.2 233.5C336.2 227.5 333.8 221.7 329.6 217.5L309.9 197.8C306 194 304 189.1 304 184C304 178.9 306 174 309.7 170.3L327 153C332.8 147.2 336.1 139.3 336.1 131.1C336.1 123.9 333.7 117.4 329.7 112.2C326.5 112.1 323.3 112 320.1 112C224.7 112 144.4 176.2 119.8 263.7zM528 320C528 285.4 519.6 252.8 504.6 224.2C498.2 225.1 491.9 228.1 486.7 233.3L473.3 246.7C467.3 252.7 463.9 260.8 463.9 269.3L463.9 304C463.9 321.7 478.2 336 495.9 336L520 336C522.5 336 525 335.7 527.3 335.2C527.7 330.2 527.8 325.1 527.8 320zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z" />
          </svg>
        ),
        color: "web",
        roadmap: webDevStages,
      });
    category === "mobile" &&
      selectedStages.push({
        title: "Mobile App Development",
        description: "Create native and cross-platform mobile applications",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path d="M208 64C172.7 64 144 92.7 144 128L144 512C144 547.3 172.7 576 208 576L432 576C467.3 576 496 547.3 496 512L496 128C496 92.7 467.3 64 432 64L208 64zM280 480L360 480C373.3 480 384 490.7 384 504C384 517.3 373.3 528 360 528L280 528C266.7 528 256 517.3 256 504C256 490.7 266.7 480 280 480z" />
          </svg>
        ),
        color: "mobile",
        roadmap: mobileDevStages,
      });
    category === "desktop" &&
      selectedStages.push({
        title: "Desktop App Development",
        description: "Develop powerful desktop applications for all platforms",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path d="M128 96C92.7 96 64 124.7 64 160L64 416C64 451.3 92.7 480 128 480L272 480L256 528L184 528C170.7 528 160 538.7 160 552C160 565.3 170.7 576 184 576L456 576C469.3 576 480 565.3 480 552C480 538.7 469.3 528 456 528L384 528L368 480L512 480C547.3 480 576 451.3 576 416L576 160C576 124.7 547.3 96 512 96L128 96zM160 160L480 160C497.7 160 512 174.3 512 192L512 352C512 369.7 497.7 384 480 384L160 384C142.3 384 128 369.7 128 352L128 192C128 174.3 142.3 160 160 160z" />
          </svg>
        ),
        color: "desktop",
        roadmap: desktopDevStages,
      });
  });
  console.log(selectedStages);
  return (
    <section className="w-full z-10">
      {selectedStages.map((stage , index) => {
        return (
          <div key={index} className="bg-sidebar/50 h-fit w-full rounded-2xl text-paragraph-text-dark mb-10 overflow-hidden">
            <div className={`flex items-center gap-5 bg-linear-to-r ${stage.color === "web" ? "from-blue-400" : stage.color === "mobile" ? "from-cta-btn" : stage.color === "desktop" ? "from-gray-400" : ""} p-5`}>
              <span className="flex h-15 first:in-first:fill-white bg-gray-500/50 p-2 rounded-2xl">
                {stage.icon}
              </span>
              <div>
                <h2 className="text-2xl font-semibold">{stage.title}</h2>
                <h3 className="text-paragraph-text-dark/70 text-md">
                  {stage.description}
                </h3>
              </div>
            </div>
            <div className="flex flex-col justify-center p-6 gap-5">
              {stage.roadmap.map((sector , index) => {
                return (
                  <div key={index} className="flex gap-3">
                    <span className="flex flex-col items-center gap-2">
                      <span className={`flex shrink-0 justify-center items-center h-10 w-10 rounded-full ${stage.color === "web" ? "bg-blue-400" : stage.color === "mobile" ? "bg-cta-btn" : stage.color === "desktop" ? "bg-gray-400" : ""}`}>{index+1}</span>
                      {
                        stage.roadmap.length != index + 1 && <span className={`flex h-full w-1 ${stage.color === "web" ? "bg-blue-400" : stage.color === "mobile" ? "bg-cta-btn" : stage.color === "desktop" ? "bg-gray-400" : ""} mask-b-from-0%`}></span>
                      }
                    </span>
                    <div className="space-y-3">
                      <p className="text-lg font-semibold mb-2">{sector.title}</p>
                      <p className="text-md font-normal">{sector.description}</p>
                      <div className="flex gap-3">
                        {sector.technologies.map((technology ,index) => {
                          return <span key={index} className={`px-2.5 py-0.5 rounded-full text-center text-xs border ${technology.level === "beginner" ? "bg-green-400/50 border-green-400" : technology.level === "intermediate" ? "bg-cta-btn/50 border-cta-btn" : technology.level === "advanced" ? "bg-red-500/50 border-red-500" : ""}`}>{technology.name}</span>;
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default RoadmapPath;
