import React from "react";
import NavLink from "./NavLink";
import { BsTelephone } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import CartShop from "../../uikit/CartShop";
import Logo from "../../uikit/Logo";
import MenuBerger from "../../uikit/MenuBerger";

const Header = () => {
  return (
    <header className="bg-secondary p-3">
      <div className="container mx-auto w-full justify-end items-center space-x-6 hidden md:flex">
        <NavLink
          className="text-sm opacity-70 hover:opacity-100 transition"
          icon={<BsTelephone className="text-xs" />}
          label="+237 6 78 35 32 45"
          href="#"
        />
        <NavLink
          className="text-sm opacity-70 hover:opacity-100 transition"
          icon={<BiPencil />}
          label="Nous contacter"
          href="#"
        />
        <NavLink
          className="text-sm opacity-70 hover:opacity-100 transition"
          icon={<FaUserAlt className="text-xs" />}
          label="Espace Etudiant"
          href="#" 
        />

        <CartShop />
      </div>

      <div className="container mx-auto flex items-center justify-between md:pt-3">
        <Logo />

        <MenuBerger className="md:hidden" />

        <nav className=" space-x-6 hidden md:block">
          <NavLink active label="Présentation" href="#" />
          <NavLink className="font-light" label="Examents blancs" href="#" />
          <NavLink className="font-light" label="Témoignages" href="#" />
          <NavLink className="font-light" label="FAQ" href="#" />
          <NavLink className="font-light" label="Offres" href="#" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
