import React from "react";

const RoadmapFilter = ({ selectedCategories, onToggleCategory }) => {
  const categories = [
    {
      id: "web",
      label: "Web Development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          <path d="M119.7 263.7L150.6 294.6C156.6 300.6 164.7 304 173.2 304L194.7 304C203.2 304 211.3 307.4 217.3 313.4L246.6 342.7C252.6 348.7 256 356.8 256 365.3L256 402.8C256 411.3 259.4 419.4 265.4 425.4L278.7 438.7C284.7 444.7 288.1 452.8 288.1 461.3L288.1 480C288.1 497.7 302.4 512 320.1 512C337.8 512 352.1 497.7 352.1 480L352.1 477.3C352.1 468.8 355.5 460.7 361.5 454.7L406.8 409.4C412.8 403.4 416.2 395.3 416.2 386.8L416.2 352.1C416.2 334.4 401.9 320.1 384.2 320.1L301.5 320.1C293 320.1 284.9 316.7 278.9 310.7L262.9 294.7C258.7 290.5 256.3 284.7 256.3 278.7C256.3 266.2 266.4 256.1 278.9 256.1L313.6 256.1C326.1 256.1 336.2 246 336.2 233.5C336.2 227.5 333.8 221.7 329.6 217.5L309.9 197.8C306 194 304 189.1 304 184C304 178.9 306 174 309.7 170.3L327 153C332.8 147.2 336.1 139.3 336.1 131.1C336.1 123.9 333.7 117.4 329.7 112.2C326.5 112.1 323.3 112 320.1 112C224.7 112 144.4 176.2 119.8 263.7zM528 320C528 285.4 519.6 252.8 504.6 224.2C498.2 225.1 491.9 228.1 486.7 233.3L473.3 246.7C467.3 252.7 463.9 260.8 463.9 269.3L463.9 304C463.9 321.7 478.2 336 495.9 336L520 336C522.5 336 525 335.7 527.3 335.2C527.7 330.2 527.8 325.1 527.8 320zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z" />
        </svg>
      ),
    },
    {
      id: "mobile",
      label: "Mobile Apps",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          <path d="M208 64C172.7 64 144 92.7 144 128L144 512C144 547.3 172.7 576 208 576L432 576C467.3 576 496 547.3 496 512L496 128C496 92.7 467.3 64 432 64L208 64zM280 480L360 480C373.3 480 384 490.7 384 504C384 517.3 373.3 528 360 528L280 528C266.7 528 256 517.3 256 504C256 490.7 266.7 480 280 480z" />
        </svg>
      ),
    },
    {
      id: "desktop",
      label: "Desktop Apps",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          <path d="M128 96C92.7 96 64 124.7 64 160L64 416C64 451.3 92.7 480 128 480L272 480L256 528L184 528C170.7 528 160 538.7 160 552C160 565.3 170.7 576 184 576L456 576C469.3 576 480 565.3 480 552C480 538.7 469.3 528 456 528L384 528L368 480L512 480C547.3 480 576 451.3 576 416L576 160C576 124.7 547.3 96 512 96L128 96zM160 160L480 160C497.7 160 512 174.3 512 192L512 352C512 369.7 497.7 384 480 384L160 384C142.3 384 128 369.7 128 352L128 192C128 174.3 142.3 160 160 160z" />
        </svg>
      ),
    },
  ];
  const allSelected = selectedCategories.length === categories.length;

  const handleSelectAll = () => {
    if (allSelected) {
      onToggleCategory("clear");
    } else {
      onToggleCategory("all");
    }
  };

  return (
    <section className="bg-sidebar border border-sidebar rounded-xl p-5 shadow-sm sticky top-30 z-10 w-[30%] h-fit shrink-0 text-paragraph-text-dark">
      <div className="flex items-center justify-between mb-3">
        <svg
          className="h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
        >
          <path
            className="fill-white"
            d="M96 128C83.1 128 71.4 135.8 66.4 147.8C61.4 159.8 64.2 173.5 73.4 182.6L256 365.3L256 480C256 488.5 259.4 496.6 265.4 502.6L329.4 566.6C338.6 575.8 352.3 578.5 364.3 573.5C376.3 568.5 384 556.9 384 544L384 365.3L566.6 182.7C575.8 173.5 578.5 159.8 573.5 147.8C568.5 135.8 556.9 128 544 128L96 128z"
          />
        </svg>
        <h3 className="text-lg font-semibold text-paragraph-text-dark">
          Filter Paths
        </h3>
        <span className="px-2 py-1">
          {selectedCategories.length} Active
        </span>
      </div>

      <div className="space-y-2">
        <button
          className={`cursor-pointer w-full px-3 py-3 rounded-xl flex justify-start items-center gap-4 transition-all duration-200 ${
            allSelected ? "bg-blue-400" : "bg-gray-500/50 hover:bg-cta-btn"
          }`}
          onClick={handleSelectAll}
        >
          <span
            className={`w-2 h-2 rounded-full ${
              allSelected
                ? "bg-paragraph-text-dark"
                : "bg-paragraph-text-dark/70"
            }`}
          ></span>
          {allSelected ? "Deselect All" : "Select All"}
        </button>

        {categories.map((category) => {
          const isSelected = selectedCategories.includes(category.id);

          return (
            <button
              key={category.id}
              className={`cursor-pointer w-full px-3 py-3 rounded-xl flex gap-3 transition-all duration-200 hover:scale-[1.02] ${
                isSelected ? "bg-blue-400" : "bg-gray-500/50 hover:bg-cta-btn"
              }`}
              onClick={() => onToggleCategory(category.id)}
            >
              <span className="flex h-6 first:in-first:fill-white">
                {category.icon}
              </span>
              {category.label}
            </button>
          );
        })}
      </div>

      <div className="mt-4 pt-4 border-t border-border">
        <p className="text-sm text-paragraph-text-dark/70 text-center">
          Select categories to view their learning paths
        </p>
      </div>
    </section>
  );
};

export default RoadmapFilter;
