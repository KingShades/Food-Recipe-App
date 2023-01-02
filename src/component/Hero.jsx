import React from "react";
import herImg from "../assets/heroImg.jpg";
import SearchBar from "./Searchbar";

const Hero = () => {
  return (
    <div className="relative">
      <img src={herImg} alt="" className="h-[30rem] w-full object-cover" />
      <h1 className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-300 p-10 rounded-full text-center hover:bg-blue-400">
        Welcome to Gracey's <br /> store
      </h1>
      {/* <SearchBar /> */}
    </div>
  );
};

export default Hero;
