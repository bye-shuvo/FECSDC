import React from "react";

const Header = ({title , description , image}) => {
  return (
    <header className="h-[55vh] flex flex-col items-center justify-center ">
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
    </header>
  );
};

export default Header;
