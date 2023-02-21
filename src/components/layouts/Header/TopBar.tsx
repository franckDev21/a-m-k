import React from "react";
import { BiPencil } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import NavLink from "./NavLink";
import CartShop from "../../uikit/CartShop";

const TopBar = () => {
  return (
    <div className="bg-black">
      <div className="container py-2 md:px-3  mx-auto w-full justify-end items-center space-x-6 hidden md:flex">
        <NavLink
          className="text-sm opacity-70 hover:opacity-100 transition text-white"
          icon={<BsTelephone className="text-xs" />}
          label="+237 6 78 35 32 45"
          href="#"
        />
        <NavLink
          className="text-sm opacity-70 hover:opacity-100 transition text-white"
          icon={<BiPencil />}
          label="Nous contacter"
          href="#"
        />
        <NavLink
          className="text-sm opacity-70 hover:opacity-100 transition text-white"
          icon={<FaUserAlt className="text-xs" />}
          label="Espace Etudiant"
          href="#"
        />

        <CartShop className="text-white" />
      </div>
    </div>
  );
};

export default TopBar;
