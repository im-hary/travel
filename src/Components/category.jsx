import React from "react";

const Category = () => {
  const category = [
    {
      src: "/satellite-dish.png",
      title: "Calculated Weather",
      description:
        "Built Wicket longer admire do barton vanity itself do in it.",
    },
    {
      src: "/plane.png",
      title: "Best Flights",
      description:
        "Engrossed listening. Park gate sell they west hard for the.",
      red: true,
    },
    {
      src: "/image 25.png",
      title: "Local Events",
      description:
        "Barton vanity itself do in it. Preferd to men it engrossed listening.",
    },
    {
      src: "/Vector.png",
      title: "Customization",
      description:
        "We deliver outsourced aviation services for military customers",
    },
  ];

  return (
    <div className="bg-white relative mb-20">
      <div className="relative">
        {/* Header Section */}
        <div className="text-center flex flex-col sm:flex-row justify-between items-center sm:items-start relative px-4 sm:px-6 md:px-8">
          <div className="flex justify-center sm:justify-start items-center sm:ml-28 flex-col w-full sm:w-[90%] relative">
            <p className="text-gray-500 font-mono font-semibold tracking-wider mb-2 text-sm sm:text-base">
              CATEGORY
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center sm:text-left">
              We Offer Best Services
            </h1>
          </div>
          <div className="w-full sm:w-[20%] flex justify-center mt-4 sm:mt-0 relative">
            <img src="/Group 4.png" alt="" className="max-w-full h-auto hidden lg:block xl:block md:block" />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-28 px-4 sm:px-8 md:px-16 lg:px-32 mt-10 relative z-20 font-sans">
          {category.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl py-8 sm:py-10 px-4 sm:px-5 text-center transition-all duration-300 hover:shadow-xl cursor-pointer 
                 shadow-lg hover:shadow-lg
              `}
            >
              {/* Icon Container with Rectangle Background */}
              <div className="flex justify-center mb-6 relative">
                <div className="relative inline-flex items-center justify-center">
                  {/* Rectangle Background Image */}
                  <img
                    src="/Rectangle 158.png"
                    alt=""
                    className="absolute w-20 h-20 sm:w-24 sm:h-24 object-contain z-0 "
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                  {/* Icon Circle */}
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full transition-all duration-300 relative z-10 `}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-md font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Red Rectangle Image - positioned absolutely */}

        {/* Mobile version of red rectangle */}
        <div className="absolute -bottom-8 left-[460px] transform -translate-x-1/2 z-10 hidden lg:block xl:block">
          <img src="/Rectangle 157.png" alt="" className="w-16 h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Category;
