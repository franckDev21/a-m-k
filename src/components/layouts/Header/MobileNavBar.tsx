import React from "react";
import NavLink from "./NavLink";

const MobileNavBar = () => {
  return (
    <nav className="flex absolute items-center flex-col space-y-6 py-10 md:hidden top-16 left-0 w-full z-50 bg-white">
      <NavLink active label="Présentation" href="#" className="text-gray-600" />
      <NavLink label="Examents blancs" href="#" className="text-gray-600" />
      <NavLink label="Témoignages" href="#" className="text-gray-600" />
      <NavLink label="FAQ" href="#" className="text-gray-600" />
      <NavLink label="Offres" href="#" className="text-gray-600" />
    </nav>
  );
};

export default MobileNavBar;
