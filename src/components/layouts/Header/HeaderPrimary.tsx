import React, { FC, useState } from "react";
import { BiPencil } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { GiCutDiamond } from "react-icons/gi";
import NavLink from "./NavLink";
import Button from "../../uikit/Button";
import Logo from "../../uikit/Logo";
import CartShop from "../../uikit/CartShop";
import MenuBerger from "../../uikit/MenuBerger";
import { TbSchool } from "react-icons/tb";

const HeaderPrimary: FC<{ className?: string }> = ({ className = "" }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={`${className}`}>
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

          <CartShop />
        </div>
      </div>

      <div className="container px-3 mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-10 py-4 relative">
          <Logo defaultWidth={false} className="w-20" />

          <nav className="font-bold text-gray-700 space-x-6 sm:text-md hidden lg:block">
            <NavLink
              active
              label="Présentation"
              href="#"
              className="text-gray-600"
            />
            <NavLink
              label="Examents blancs"
              href="#"
              className="text-gray-600"
            />
            <NavLink label="Témoignages" href="#" className="text-gray-600" />
            <NavLink label="FAQ" href="#" className="text-gray-600" />
            <NavLink label="Offres" href="#" className="text-gray-600" />
          </nav>
        </div>

        <div className="flex items-center space-x-2 md:hidden">
          <Button
            defauldPadding={false}
            icon={<TbSchool className="text-2xl" />}
            rounded
            label="S'inscrire à une session"
            className="bg-primary px-2 text-sm font-bold py-1.5"
          />
          <MenuBerger
            isOpen={showMenu}
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>

        {/* mobile menu */}
        {showMenu && (
          <nav className="flex absolute items-center flex-col space-y-6 py-10 md:hidden top-16 left-0 w-full z-50 bg-white">
            <NavLink
              active
              label="Présentation"
              href="#"
              className="text-gray-600"
            />
            <NavLink
              label="Examents blancs"
              href="#"
              className="text-gray-600"
            />
            <NavLink label="Témoignages" href="#" className="text-gray-600" />
            <NavLink label="FAQ" href="#" className="text-gray-600" />
            <NavLink label="Offres" href="#" className="text-gray-600" />
          </nav>
        )}

        <div className="space-x-2 hidden md:flex  items-center">
          <MenuBerger className="lg:hidden" />
          <Button
            defauldPadding={false}
            icon={<TbSchool className="text-2xl" />}
            rounded
            label="S'inscrire à une session"
            className="bg-primary px-2 text-sm font-bold py-1.5"
          />
          <Button
            defaultColor={false}
            defauldPadding={false}
            icon={<FaLock className="text-primary" />}
            rounded
            label="Se connecter"
            className=" text-gray-700 border-gray-300 px-3 text-sm font-bold py-1.5 bg-primary bg-opacity-10"
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderPrimary;
