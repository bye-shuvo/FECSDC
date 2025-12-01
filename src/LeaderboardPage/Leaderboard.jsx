import React from "react";

const Leaderboard = () => {
  const topMembers = [
    {
      rank: 1,
      name: "Abu Hasnat Shuvo",
      department: "CSE, 4th Year",
      points: 2450,
      badges: ["Contest Winner", "Workshop Leader", "Code Master"],
      avatar: "/src/assets/executive-members/org_sec.jpeg",
    },
    {
      rank: 2,
      name: "Nabila Hasan",
      department: "CSE, 3rd Year",
      points: 2180,
      badges: ["Hackathon Champion", "Mentor", "Early Adopter"],
      avatar: "",
    },
    {
      rank: 3,
      name: "Mehedi Islam",
      department: "CSE, 4th Year",
      points: 1920,
      badges: ["Contest Winner", "Project Lead"],
      avatar: "",
    },
    {
      rank: 4,
      name: "Tasnim Rahman",
      department: "CSE, 2nd Year",
      points: 1750,
      badges: ["Rising Star", "Workshop Helper"],
      avatar: "",
    },
    {
      rank: 5,
      name: "Raihan Khan",
      department: "CSE, 3rd Year",
      points: 1680,
      badges: ["Contest Participant", "Active Member"],
      avatar: "",
    },
    {
      rank: 6,
      name: "Sadia Akter",
      department: "CSE, 2nd Year",
      points: 1520,
      badges: ["Workshop Attendee", "Quick Learner"],
      avatar: "",
    },
    {
      rank: 7,
      name: "Farhan Ahmed",
      department: "CSE, 4th Year",
      points: 1450,
      badges: ["Project Contributor"],
      avatar: "/src/assets/executive-members/org_sec.jpeg",
    },
    {
      rank: 8,
      name: "Lamia Sultana",
      department: "CSE, 3rd Year",
      points: 1380,
      badges: ["Active Participant"],
      avatar: "",
    },
    {
      rank: 9,
      name: "Ashik Rahman",
      department: "CSE, 2nd Year",
      points: 1290,
      badges: ["New Member", "Enthusiast"],
      avatar: "",
    },
    {
      rank: 10,
      name: "Nusrat Jahan",
      department: "CSE, 3rd Year",
      points: 1210,
      badges: ["Workshop Regular"],
      avatar: "",
    },
  ];
  const top3members = topMembers.filter((member) => member.rank <= 3);

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path
              className="fill-amber-300"
              d="M208.3 64L432.3 64C458.8 64 480.4 85.8 479.4 112.2C479.2 117.5 479 122.8 478.7 128L528.3 128C554.4 128 577.4 149.6 575.4 177.8C567.9 281.5 514.9 338.5 457.4 368.3C441.6 376.5 425.5 382.6 410.2 387.1C390 415.7 369 430.8 352.3 438.9L352.3 512L416.3 512C434 512 448.3 526.3 448.3 544C448.3 561.7 434 576 416.3 576L224.3 576C206.6 576 192.3 561.7 192.3 544C192.3 526.3 206.6 512 224.3 512L288.3 512L288.3 438.9C272.3 431.2 252.4 416.9 233 390.6C214.6 385.8 194.6 378.5 175.1 367.5C121 337.2 72.2 280.1 65.2 177.6C63.3 149.5 86.2 127.9 112.3 127.9L161.9 127.9C161.6 122.7 161.4 117.5 161.2 112.1C160.2 85.6 181.8 63.9 208.3 63.9zM165.5 176L113.1 176C119.3 260.7 158.2 303.1 198.3 325.6C183.9 288.3 172 239.6 165.5 176zM444 320.8C484.5 297 521.1 254.7 527.3 176L475 176C468.8 236.9 457.6 284.2 444 320.8z"
            />
          </svg>
        );
      case 2:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path
              className="fill-blue-300"
              d="M320.3 192L235.7 51.1C229.2 40.3 215.6 36.4 204.4 42L117.8 85.3C105.9 91.2 101.1 105.6 107 117.5L176.6 256.6C146.5 290.5 128.3 335.1 128.3 384C128.3 490 214.3 576 320.3 576C426.3 576 512.3 490 512.3 384C512.3 335.1 494 290.5 464 256.6L533.6 117.5C539.5 105.6 534.7 91.2 522.9 85.3L436.2 41.9C425 36.3 411.3 40.3 404.9 51L320.3 192zM351.1 334.5C352.5 337.3 355.1 339.2 358.1 339.6L408.2 346.9C415.9 348 418.9 357.4 413.4 362.9L377.1 398.3C374.9 400.5 373.9 403.5 374.4 406.6L383 456.5C384.3 464.1 376.3 470 369.4 466.4L324.6 442.8C321.9 441.4 318.6 441.4 315.9 442.8L271.1 466.4C264.2 470 256.2 464.2 257.5 456.5L266.1 406.6C266.6 403.6 265.6 400.5 263.4 398.3L227.1 362.9C221.5 357.5 224.6 348.1 232.3 346.9L282.4 339.6C285.4 339.2 288.1 337.2 289.4 334.5L311.8 289.1C315.2 282.1 325.1 282.1 328.6 289.1L351 334.5z"
            />
          </svg>
        );
      case 3:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path
              className="fill-green-200"
              d="M341.9 38.1C328.5 29.9 311.6 29.9 298.2 38.1C273.8 53 258.7 57 230.1 56.4C214.4 56 199.8 64.5 192.2 78.3C178.5 103.4 167.4 114.5 142.3 128.2C128.5 135.7 120.1 150.4 120.4 166.1C121.1 194.7 117 209.8 102.1 234.2C93.9 247.6 93.9 264.5 102.1 277.9C117 302.3 121 317.4 120.4 346C120 361.7 128.5 376.3 142.3 383.9C164.4 396 175.6 406 187.4 425.4L138.7 522.5C132.8 534.4 137.6 548.8 149.4 554.7L235.4 597.7C246.9 603.4 260.9 599.1 267.1 587.9L319.9 492.8L372.7 587.9C378.9 599.1 392.9 603.5 404.4 597.7L490.4 554.7C502.3 548.8 507.1 534.4 501.1 522.5L452.5 425.3C464.2 405.9 475.5 395.9 497.6 383.8C511.4 376.3 519.8 361.6 519.5 345.9C518.8 317.3 522.9 302.2 537.8 277.8C546 264.4 546 247.5 537.8 234.1C522.9 209.7 518.9 194.6 519.5 166C519.9 150.3 511.4 135.7 497.6 128.1C472.5 114.4 461.4 103.3 447.7 78.2C440.2 64.4 425.5 56 409.8 56.3C381.2 57 366.1 52.9 341.7 38zM320 160C373 160 416 203 416 256C416 309 373 352 320 352C267 352 224 309 224 256C224 203 267 160 320 160z"
            />
          </svg>
        );
      default:
        return (
          <span className="text-lg font-bold text-muted-foreground">
            #{rank}
          </span>
        );
    }
  };

  return (
    <section className="flex flex-col gap-10">
      {/* point suggession section */}
      <div className="flex flex-col gap-4 border border-secondary-header p-8 rounded-2xl bg-sidebar/50">
        <h2 className="z-2 text-xl font-semibold text-paragraph-text-dark">
          How Points Work
        </h2>
        <ul className="z-2 space-y-2 text-sm">
          <li>
            • Workshop attendance:{" "}
            <span className="text-cta-btn">50 points</span>
          </li>
          <li>
            • Contest participation:{" "}
            <span className="text-cta-btn">100 points</span>
          </li>
          <li>
            • Contest winner: <span className="text-cta-btn">500 points</span>
          </li>
          <li>
            • Bootcamp completion:{" "}
            <span className="text-cta-btn">200 points</span>
          </li>
          <li>
            • Project contribution:{" "}
            <span className="text-cta-btn">150 points</span>
          </li>
          <li>
            • Mentoring others: <span className="text-cta-btn">100 points</span>
          </li>
        </ul>
      </div>
      {/* members rank */}
      <div className="flex flex-col gap-5">
        <div id="top3members" className="grid grid-cols-3 px-[10%] items-end">
          {top3members.map((member, index) => (
            <div
              key={index}
              className={`flex flex-col items-center py-8 ${
                member.rank === 1
                  ? "order-2 h-85 rounded-t-[3rem] bg-secondary-header"
                  : member.rank === 2
                  ? "order-1 rounded-tl-4xl bg-secondary-header/60"
                  : "order-3 rounded-tr-4xl bg-secondary-header/60"
              }`}
            >
              {/* avatar */}
              <div
                className={`relative h-25 w-25 mb-10 rounded-full flex justify-center items-center border-2 ${
                  member.rank === 1
                    ? "bg-cta-btn border-cta-btn"
                    : member.rank === 2
                    ? "bg-blue-500 border-blue-500"
                    : "bg-green-400 border-green-400"
                }`}
              >
                {member.avatar ? (
                  <img className="h-full w-full object-center object-cover rounded-full" src={member.avatar} alt={member.avatar} />
                ) : (
                  <p className={`font-semibold text-4xl `}>
                    {member.name
                      .split(" ")
                      .map((split) => split.charAt(0))
                      .join("")
                      .toUpperCase()}
                  </p>
                )}
                <span className="absolute top-[75%] flex h-15">
                  {getRankIcon(member.rank)}
                </span>
                <p
                  className={`absolute -top-5 -left-5 text-6xl font-extrabold ${
                    member.rank === 1
                      ? "text-amber-300"
                      : member.rank === 2
                      ? "text-blue-300"
                      : "text-green-300"
                  }`}
                >
                  {member.rank}
                </p>
              </div>

              <h2 className="text-lg font-semibold">{member.name}</h2>
              <p
                className={`text-3xl font-bold ${
                  member.rank === 1
                    ? "text-cta-btn"
                    : member.rank === 2
                    ? "text-blue-500"
                    : "text-green-400"
                }`}
              >
                {member.points}
              </p>
              <p>{member.department}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          {topMembers.map(
            (member, index) =>
              member.rank > 3 && (
                <div
                  key={index}
                  className="w-full p-5 border border-sidebar flex justify-between items-center rounded-2xl bg-sidebar/50"
                >
                  <div className="flex items-center gap-6">
                    <h2 className="text-2xl font-semibold text-paragraph-text-dark/80">
                      #{member.rank}
                    </h2>
                    <div
                      className={`relative overflow-hidden h-15 w-15 rounded-full flex justify-center items-center border-2 ${
                        Math.round(Math.random() * 4) === 1
                          ? "bg-cta-btn border-cta-btn"
                          : Math.round(Math.random() * 4) === 2
                          ? "bg-blue-500 border-blue-500"
                          : "bg-green-400 border-green-400"
                      }`}
                    >
                      {member.avatar ? (
                        <img
                          className=""
                          src={member.avatar}
                          alt={member.avatar}
                        />
                      ) : (
                        <p className={`font-semibold text-xl `}>
                          {member.name
                            .split(" ")
                            .map((split) => split.charAt(0))
                            .join("")
                            .toUpperCase()}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-lg font-semibold">{member.name}</h2>
                      <p>{member.department}</p>
                      {member.badges.map((badge, index) => (
                        <span key={index} className="px-2 py-1.5 bg-amber-500/40 mx-1 rounded-full text-sm">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-3xl text-center font-bold text-cta-btn">
                    {member.points} <br />{" "}
                    <span className="text-sm text-paragraph-text-dark/60">
                      Points
                    </span>
                  </p>
                </div>
              )
          )}
        </div>
      </div>
      <div className="border border-cta-btn rounded-2xl p-6 bg-cta-btn/10 mb-10">
        <p className="text-md text-paragraph-text-dark font-semibold">Want to see your name here?</p>
        <p className="text-sm text-paragraph-text-dark">Participate in events, contribute to projects, and help fellow members to earn points and climb the leaderboard!</p>
      </div>
    </section>
  );
};

export default Leaderboard;
