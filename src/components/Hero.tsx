import React from "react";
import hamburger from "../assets/hero/hamburger.png";
import hamburger_2 from "../assets/hero/hamburger_2.png";

export const Hero = () => {
  return (
    <div className="sm:px-0 px-6 flex flex-col xl:flex-row lg:pl-48 items-center">
      {/* LEFT SIDE */}
      <div className="mb-16 sm:mb-32 lg:pt-24 sm:max-w-xl pt-16 sm:pt-32 lg:max-w-md xl:max-w-lg  2xl:max-w-2xl mx-auto lg:text-left text-center">
        <p className="py-4 sm:text-base text-sm uppercase text-red-700 tracking-[0.2rem] font-semibold">
          Discover new taste in every bite
        </p>
        <h1 className="font-bold text-5xl sm:text-7xl xl:text-8xl pb-12">
          Special tasty
          <br />
          Burger.
        </h1>
        <p className="pb-12 leading-[2.25] text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          accusantium omnis placeat molestiae, consectetur ea, cumque
          reprehenderit repudiandae a consequatur quasi adipisci, atque
          voluptate fuga? Error quidem ab voluptas eum.
        </p>
        <div className="flex w-full justify-center items-center space-x-8">
          <button className=" bg-white px-5 py-4 rounded-xl  font-medium shadow-sm capitalize  button-hover-scale">
            Order Now
          </button>
          <button className="text-red-700 px-5 py-4 rounded-xl font-medium">
            Go to menu
          </button>
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className="xl:max-w-4xl 2xl:max-w-7xl mx-auto">
        <img src={hamburger} alt="" className="2xl:h-full xl:h-[75%]" />
      </div>
    </div>
  );
};
