import React, { FC } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";
import TestItem from "./TestItem";

const TestNavigation: FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div
      className={`overflow-y-auto w-[350px] flex-none bg-gray-50 border ml-2 rounded-2xl py-5 px-4 ${className}`}
    >
      <header className="space-x-2 pb-4 border-b justify-between items-center flex text-xl mb-6">
        <h1 className="font-bold">Contenu du PMP TEST</h1>
        <AiOutlinePlus className=" rotate-45 text-2xl" />
      </header>

      {/* accordeon */}
      <div className="">
        <header className="space-x-2 cursor-pointer font-bold text-gray-600 px-2 bg-gray-200 rounded-t-sm py-2 justify-between items-center flex text-lg">
          <h1>Tests d’entrainement</h1>
          <FaAngleDown className="text-xl" />
        </header>
        <div className=" px-4 py-6 space-y-3">
          <TestItem active label="Test d’entrainement N°1" />
          <TestItem label="Test d’entrainement N°1" />
          <TestItem label="Test d’entrainement N°2" />
          <TestItem label="Test d’entrainement N°3" />
          <TestItem label="Test d’entrainement N°4" />
          <TestItem label="Test d’entrainement N°5" />
          <TestItem label="Test d’entrainement N°6" />
        </div>
      </div>


      <div className="">
        <header className="space-x-2 cursor-pointer font-bold text-gray-600 px-2 bg-gray-200 rounded-t-sm py-2 justify-between items-center flex text-lg">
          <h1>Tests d’examens</h1>
          <FaAngleDown className="text-xl" />
        </header>
        <div className=" px-4 py-6 space-y-4">
          <TestItem active label="Test d’entrainement N°1" />
          <TestItem label="Test d’entrainement N°1" />
          <TestItem label="Test d’entrainement N°2" />
          <TestItem label="Test d’entrainement N°3" />
          <TestItem label="Test d’entrainement N°4" />
        </div>
      </div>
    </div>
  );
};

export default TestNavigation;
