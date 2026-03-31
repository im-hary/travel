import React from "react";

const Destination = () => {
  const destinations = [
    { src: "/Destination (1).png" },
    { src: "/Destination (2).png" },
    { src: "/Destination.png", spring: true },
  ];
  return (
    <div className="mt-20 h-full">
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="font-sans font-bold">Top Selling</p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Top Destinations
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  px-4 sm:px-8 md:px-16 lg:px-32 mt-10">
        {destinations.map((destination, index) => (
          <div key={index} className="relative">
            <img
              src={destination.src}
              alt={`Destination ${index + 1}`}
              className="w-full h-auto object-cover rounded-2xl relative z-30"
            />
            {destination.spring && (
              <>
                <img src="/spring.png" alt="Spring Decoration" className="absolute top-20 md:top-10 lg:top-16 xl:top-40 z-10 -right-10 md:-right-16 lg:-right-[50px] xl:-right-[35px]  w-44 h-40 object-contain" />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;
