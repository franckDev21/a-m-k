import React, { FC } from "react";
import NavBarType from "../../layouts/NavBarType";
import Accordeons from "./Accordeons";

const FAQBlock: FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div
      id="FAQ"
      className={`${className}`}
      style={{ backgroundImage: "url(/assets/home-menu-bg-overlay.svg)" }}
    >
      <div className="container mx-auto pb-10 pt-4 lg:pt-16">
        <h1 className="lg:w-[59%] mx-auto text-center text-3xl lg:text-4xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r to-blue-400 from-primary text-gray-800 lowercase first-letter:uppercase">
          QUESTIONS LES PLUS FREQUENTES <span className="uppercase">(FAQ)</span>
        </h1>
        <NavBarType />
        <Accordeons className="mt-10" />
      </div>
    </div>
  );
};

export default FAQBlock;
