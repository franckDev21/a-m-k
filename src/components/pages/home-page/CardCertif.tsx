import React, { FC, useState } from "react";
import Certification from "../../../models/Certification";
import Button from "../../uikit/Button";

import { FiChevronDown } from 'react-icons/fi';

interface CardCertifProps {
  className?: string;
  certif: Certification;
  principal?: boolean;
}

const CardCertif: FC<CardCertifProps> = ({
  className = "",
  certif,
  principal = false,
}) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div
      className={`${className} border-4 ${
        !principal ? "border-primary" : "border-tertiary"
      } bg-white flex flex-col justify-between items-start`}
    >
      <header className="pb-6 border-b w-full flex justify-center items-center flex-col">
        <img
          src={certif.logo}
          alt={certif.level}
          className={` rounded-full mt-4 ${
            certif.id === 1
              ? "w-40 h-40"
              : certif.id === 3
              ? "w-28 h-28"
              : "w-32 h-32"
          }`}
        />
        <h2
          className={`font-bold text-center px-4 ${certif.id !== 1 && " mt-2"}`}
        >
          {certif.title}
        </h2>
      </header>

      <ul className={`py-3 px-5 ${showAll && "hidden"}`}>
        <li className="py-2 border-b border-dashed flex justify-start">
          <span className="w-5">-</span>
          <span className="w-[calc(100%-20px)]">{certif.items[0]}</span>
        </li>
        <div onClick={() => setShowAll(true)} className='w-full py-1 text-center bg-gray-50 cursor-pointer text-sm flex items-center justify-center space-x-3'>
          <span>voir plus</span>
          <FiChevronDown />
        </div>
      </ul>

      <ul className={`py-3 px-5 ${!showAll && "hidden"}`}>
        {certif.items.map((item, key) => (
          <li
            key={key}
            className="py-2 border-b border-dashed flex justify-start"
          >
            <span className="w-5">-</span>
            <span className="w-[calc(100%-20px)]">{item}</span>
          </li>
        ))}
        <div onClick={() => setShowAll(false)} className='w-full py-1 text-center bg-gray-50 cursor-pointer text-sm flex items-center justify-center space-x-3'>
          <span>voir moins</span>
          <FiChevronDown className=" rotate-180" />
        </div>
      </ul>
      <div className="py-5 text-center w-full">
        <Button
          label={certif.level}
          className={` ${principal ? "bg-tertiary" : "bg-primary"}`}
          rounded
        />
      </div>
    </div>
  );
};

export default CardCertif;
