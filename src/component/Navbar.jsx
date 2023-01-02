import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center border-b-2">
      <div className="w-full">
        <h1 className="text-4xl font-bold p-5">Gracey's Recipe</h1>
      </div>
      <div className="flex w-full justify-center gap-28">
        <span>
          <h2 className="text-2xl font-medium">About</h2>
        </span>
        <span>
          <h2 className="text-2xl font-medium">Recipes</h2>
        </span>
        <span>
          <h2 className="text-2xl font-medium">Contacts</h2>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
