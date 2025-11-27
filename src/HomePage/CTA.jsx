import React from "react";
import { Link } from "react-router";

const CTA = () => {
  return (
    <div className="h-64 w-full bg-cta-btn/90 flex flex-col gap-5 items-center justify-center text-paragraph-text-dark">
      <h3 className="text-[2.5rem] font-semibold">
        Ready to Start Your Journey?
      </h3>
      <h4 className="text-md">
        Join hundreds of students learning software development at FEC
      </h4>
      <Link
        to={"/member"}
        className="bg-btn-hover hover:cursor-pointer hover:shadow-[0_0_20px_0px] shadow-cta-btn py-3 px-15 rounded-full text-white hover:bg-btn-hover transition-colors ease-in-out text-xl"
      >
        Become a Member
      </Link>
    </div>
  );
};

export default CTA;
