import { useState } from "react";
import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="bg-gray-100 w-screen 2xl:h-screen">
      <div className="bg-gray-50 shadow-sm w-[20%] h-[20%] sm:w-[30rem] sm:h-[30rem] rounded-full absolute z-10 -top-[18rem] -left-5"></div>
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
