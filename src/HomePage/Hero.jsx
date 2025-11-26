import React from "react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center w-full pt-25 bg-linear-to-b from-25% from-body/50 via-75% via-btn-hover/45 to-95% to-cta-btn/65">
      <Link to={"/events"} className="text-md py-2.5 px-3 outline-1 outline-secondary-header shadow-[0px_0px_10px_0px] hover:shadow-[0px_0px_25px_5px] shadow-secondary-header backdrop-blur-2xl transition-all ease-in-out rounded-full text-white flex items-center gap-4 hover:gap-5 mb-8">
        <span className="bg-cta-btn text-white rounded-full px-3 py-1 flex gap-2">
          New{" "}
          <svg
            className="h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path
              className="fill-indigo-700"
              d="M295.4 37L310.2 73.8L347 88.6C350 89.8 352 92.8 352 96C352 99.2 350 102.2 347 103.4L310.2 118.2L295.4 155C294.2 158 291.2 160 288 160C284.8 160 281.8 158 280.6 155L265.8 118.2L229 103.4C226 102.2 224 99.2 224 96C224 92.8 226 89.8 229 88.6L265.8 73.8L280.6 37C281.8 34 284.8 32 288 32C291.2 32 294.2 34 295.4 37zM142.7 105.7L164.2 155.8L214.3 177.3C220.2 179.8 224 185.6 224 192C224 198.4 220.2 204.2 214.3 206.7L164.2 228.2L142.7 278.3C140.2 284.2 134.4 288 128 288C121.6 288 115.8 284.2 113.3 278.3L91.8 228.2L41.7 206.7C35.8 204.2 32 198.4 32 192C32 185.6 35.8 179.8 41.7 177.3L91.8 155.8L113.3 105.7C115.8 99.8 121.6 96 128 96C134.4 96 140.2 99.8 142.7 105.7zM496 368C502.4 368 508.2 371.8 510.7 377.7L532.2 427.8L582.3 449.3C588.2 451.8 592 457.6 592 464C592 470.4 588.2 476.2 582.3 478.7L532.2 500.2L510.7 550.3C508.2 556.2 502.4 560 496 560C489.6 560 483.8 556.2 481.3 550.3L459.8 500.2L409.7 478.7C403.8 476.2 400 470.4 400 464C400 457.6 403.8 451.8 409.7 449.3L459.8 427.8L481.3 377.7C483.8 371.8 489.6 368 496 368zM492 64C503 64 513.6 68.4 521.5 76.2L563.8 118.5C571.6 126.4 576 137 576 148C576 159 571.6 169.6 563.8 177.5L475.6 265.7L374.3 164.4L462.5 76.2C470.4 68.4 481 64 492 64zM76.2 462.5L340.4 198.3L441.7 299.6L177.5 563.8C169.6 571.6 159 576 148 576C137 576 126.4 571.6 118.5 563.8L76.2 521.5C68.4 513.6 64 503 64 492C64 481 68.4 470.4 76.2 462.5z"
            />
          </svg>
        </span>{" "}
        Explore events{" "}
        <svg
          className="h-6 rotate-270"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
        >
          <path
            className="fill-white"
            d="M297.4 566.6C309.9 579.1 330.2 579.1 342.7 566.6L502.7 406.6C515.2 394.1 515.2 373.8 502.7 361.3C490.2 348.8 469.9 348.8 457.4 361.3L352 466.7L352 96C352 78.3 337.7 64 320 64C302.3 64 288 78.3 288 96L288 466.7L182.6 361.3C170.1 348.8 149.8 348.8 137.3 361.3C124.8 373.8 124.8 394.1 137.3 406.6L297.3 566.6z"
          />
        </svg>
      </Link>
      <header className="z-10 text-white flex flex-col gap-12">
        <h1 className="text-[3.5rem] leading-15 font-semibold text-center">
          <span>Faridpur Engineering College</span> <br />{" "}
          <span className="text-cta-btn">Software Development Club</span>
        </h1>
        <h2 className="text-[1.25rem] leading-7 text-center text-paragraph-text-dark/70">
          Join Our Club <br /> To <br /> Create, Code & Connect With FEC SDC
        </h2>
      </header>
      <div id="buttons" className="flex gap-10 mt-8">
        <button className="hover:cursor-pointer hover:shadow-[0_0_20px_0px] shadow-cta-btn py-3 px-15 rounded-full text-white bg-cta-btn hover:bg-btn-hover transition-colors ease-in-out text-xl">
          Join
        </button>{" "}
        <button className="hover:cursor-pointer hover:shadow-[0_0_20px_0px] shadow-cta-btn py-3 px-10 rounded-full text-white outline-cta-btn hover:bg-cta-btn/30 outline-1 text-xl flex items-center gap-3 transition-colors ease-in-out">
          Explore
          <svg
            className="h-6 rotate-270"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path
              className="fill-white"
              d="M297.4 566.6C309.9 579.1 330.2 579.1 342.7 566.6L502.7 406.6C515.2 394.1 515.2 373.8 502.7 361.3C490.2 348.8 469.9 348.8 457.4 361.3L352 466.7L352 96C352 78.3 337.7 64 320 64C302.3 64 288 78.3 288 96L288 466.7L182.6 361.3C170.1 348.8 149.8 348.8 137.3 361.3C124.8 373.8 124.8 394.1 137.3 406.6L297.3 566.6z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Hero;
