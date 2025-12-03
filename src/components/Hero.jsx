import React from "react";
import hero from "../assets/hero.png"
export default function Hero() {
  return (
   <section className="w-full flex flex-col lg:flex-row items-center bg-orange-50">
  <div className="w-4/5 mx-auto flex items-center">
      
    <div className="w-full lg:w-1/2 px-4">
      <img
        src={hero}
        alt="hero"
        className="w-65% h-full object-cover"
      />
    </div>
    <div className="w-full lg:w-1/2 p-8 lg:p-5 flex flex-col items-center lg:items-start">
      
      <h1 className="text-5xl inline-block font-serif text-amber-700 leading-snug text-center lg:text-left">
        Transform your dreams into real projects
      </h1>

      <button className="m-auto mt-10 bg-orange-400  block text-white px-9 py-3 rounded-full text-lg hover:bg-orange-500 transition">
        TELL ME MORE
      </button>
    </div>
  </div>
</section>
  );
} 
