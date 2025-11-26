import React from "react";
import { Link } from "react-router";

const committeePreview = () => {
  const members = [
    {
      id: 1,
      name: "Ahmed Hassan",
      position: "President" ,
      role: "Full Stack Developer",
      image: "",
      specialty: "React & Node.js",
    },
    {
      id: 2,
      name: "Md. Abu Hasnat Shuvo",
      position: "Organizing Secratary" ,
      role: "UI/UX Designer",
      image: "",
      specialty: "Design Systems",
    },
    {
      id: 3,
      name: "Rafi Khan",
      position: "Joint Organizing Secretary" ,
      role: "Backend Engineer",
      image: "",
      specialty: "Database & APIs",
    },
    {
      id: 4,
      name: "Nasrin Begum",
      position: "President" ,
      role: "Data Scientist",
      image: "",
      specialty: "ML & Analytics",
    },
  ];

  return (
    <section className="py-20 text-white px-[10%]">
      <div className="mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-[3rem] font-bold text-foreground mb-4">
            Our Community
          </h2>
          <p className="text-muted-foreground text-lg">
            Meet talented developers and designers shaping the future
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {members.map((member) => (
            <div
              key={member.id}
              className="h-85 outline-5 outline-secondary-header rounded-lg text-center hover:shadow-lg transition-shadow bg-[url(/src/assets/executive-members/org_sec.jpeg)] bg-no-repeat bg-center bg-cover bg-clip-content hover:scale-[105%] hover:shadow-secondary-header/30 shadow-lg"
            >
              <div className="flex flex-col h-full justify-end items-center bg-linear-to-b from-0% from-transparent via-55% via-secondary-header/40 to-95% to-secondary-header/90 overflow-hidden">
                <h3 className="z-10 font-bold text-[1.5rem]">{member.name}</h3>
                <p className="z-10 font-semibold text-sm mb-1">{member.role}</p>
                <p className="z-10 text-xs">{member.specialty}</p>
                <p className="z-0 mt-2 text-5xl text-center font-semibold leading-10">{member.position.toUpperCase()}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to={"/members"}
            className="hover:bg-cta-btn/50 hover:shadow-[0_0_8px_0px] hover:shadow-cta-btn px-20 py-3 rounded-full outline-1 outline-cta-btn text-white"
          >
            Join our community
          </Link>
        </div>
      </div>
    </section>
  );
};

export default committeePreview;
