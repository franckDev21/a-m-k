import React, { FC } from "react";

const LogoBlock: FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`${className} container mx-auto pb-10 pt-16`}>
      <h1 className="w-[79%] mx-auto text-center text-2xl lg:text-4xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r to-blue-400 from-primary text-gray-800">
        <span
          style={{ clipPath: "polygon(5% 0, 100% 0%, 95% 100%, 0% 100%)" }}
          className="px-5 bg-primary text-white inline-block"
        >
          +2 000 professionnels{" "}
        </span>{" "}
        formés : de plus de +350 organisations, y compris ces organisations
        réputées
      </h1>
      {/* <h1 className="w-[79%] mx-auto text-center text-2xl lg:text-4xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r to-blue-400 from-primary text-gray-800">
        <span
          style={{ clipPath: "polygon(5% 0, 100% 0%, 95% 100%, 0% 100%)" }}
          className="px-5 bg-primary text-white inline-block"
        >
          +2 000 professionnels{" "}
        </span>{" "}
        formés & plus de +350 organisations, y compris ces organisations
        réputées
      </h1> */}
      <div className="pt-14 grid grid-cols-5 gap-5 text-center px-2 lg:px-0">
        <div className="flex justify-center items-start">
          <img
            src="/assets/logo les brasseries du cameroun.png"
            className=" w-40"
            alt="logo"
          />
        </div>
        <div className="flex justify-center items-start">
          <img
            src="/assets/logo Gabon Telecom.png"
            className=" w-40"
            alt="logo"
          />
        </div>
        <div className="flex justify-center items-start">
          <img src="/assets/logo BGFI Bank.png" className=" w-40" alt="logo" />
        </div>
        <div className="flex justify-center items-start">
          <img src="/assets/logo Olam.png" className=" w-40" alt="logo" />
        </div>
        <div className="flex justify-center items-start">
          <img src="/assets/logo Axa.png" className=" w-40" alt="logo" />
        </div>
        <div className="flex justify-center items-start">
          <img
            src="/assets/logo societe Generale.png"
            className=" w-40"
            alt="logo"
          />
        </div>
        <div className="flex justify-center items-start">
          <img src="/assets/logo eneo.png" alt="logo" className=" w-40" />
        </div>
        <div className="flex justify-center items-start">
          <img src="/assets/logo eneo 2.png" alt="logo" className=" w-40" />
        </div>
        <div className="flex justify-center items-start">
          <img
            src="/assets/logo cartepillar 2.png"
            alt="logo"
            className=" w-40"
          />
        </div>
        <div className="flex justify-center items-start">
          <img
            src="/assets/logo10-200x200.jpg"
            className=" w-40"
            style={{ filter: "grayscale(100%)" }}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoBlock;
