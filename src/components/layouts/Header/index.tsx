import React, { FC, useEffect, useState } from "react";
import { FaLock } from "react-icons/fa";
import NavLink from "./NavLink";
import Button from "../../uikit/Button";
import Logo from "../../uikit/Logo";
import MenuBerger from "../../uikit/MenuBerger";
import { TbSchool } from "react-icons/tb";
import LoginModal from "../../../pages/LoginModal";
import useModal from "../../../hooks/useModal";
import RegisterModal from "../../../pages/RegisterModal";
import TopBar from "./TopBar";
import MobileNavBar from "./MobileNavBar";

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = ({ className = "" }) => {
  const [fixed,setFixed] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { show: showOne, openModal: openModalOne, closeModal: closeModalOne } = useModal();
  const { show: showTwo, openModal: openModalTwo, closeModal: closeModalTwo } = useModal();

  const switchToRegister = () => {
    closeModalTwo()
    openModalOne()
  }
  const switchToRLogin = () => {
    closeModalOne()
    openModalTwo()
  }

  const transitionNavBar = () => {
    window.scrollY > 100 ? setFixed(true) : setFixed(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    // Remove event listener on cleanup
		return () => window.removeEventListener('scroll', transitionNavBar);
  },[])

  return (
    <>
      {/* register modal */}
      <RegisterModal switchToRLogin={switchToRLogin} show={showOne} onClose={closeModalOne} />

      {/* login modal */}
      <LoginModal switchToRegister={switchToRegister} show={showTwo} onClose={closeModalTwo} />

      <header className={`${className} transition-all ${fixed && 'fixed shadow-lg bg-white top-0 left-0 w-full z-40'}`}>
       {!fixed && <TopBar />}

        <div className="container px-3 mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-10 py-4 relative">
            <Logo defaultWidth={false} className="w-20" />

            <nav className="font-bold text-gray-700 space-x-6 sm:text-md hidden lg:block">
              <NavLink
                active={!fixed}
                label="Présentation"
                href="hero"
                className="text-gray-600"
                offset={-200}
              />
              <NavLink
                offset={-230}
                label="Examents blancs"
                href="exams"
                className="text-gray-600"
              />
              <NavLink offset={-210} label="Témoignages" href="temoignage" className="text-gray-600" />
              <NavLink offset={-150} label="FAQ" href="FAQ" className="text-gray-600" />
              <NavLink offset={-150} label="Offres" href="offre" className="text-gray-600" />
            </nav>
          </div>

          <div className="flex items-center space-x-2 md:hidden">
            <Button
              defauldPadding={false}
              icon={<TbSchool className="text-2xl" />}
              rounded
              label="S'inscrire à une formation"
              className="bg-primary px-2 text-sm font-bold py-1.5"
            />
            <MenuBerger
              isOpen={showMenu}
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>

          <div className="space-x-2 hidden md:flex  items-center">
            <MenuBerger className="lg:hidden" />
            <Button
              defauldPadding={false}
              icon={<TbSchool className="text-2xl" />}
              rounded
              label="S'inscrire à une formation"
              className="bg-primary px-2 text-sm font-bold py-1.5"
            />
            <Button
              onClick={openModalTwo}
              defaultColor={false}
              defauldPadding={false}
              icon={<FaLock className="text-primary" />}
              rounded
              label="Se connecter"
              className=" text-gray-700 border-gray-300 px-3 text-sm font-bold py-1.5 bg-primary bg-opacity-10"
            />
          </div>

          {/* mobile menu */}
          {showMenu && (
            <MobileNavBar />
          )}

        </div>
      </header>
    </>
  );
};

export default Header;
