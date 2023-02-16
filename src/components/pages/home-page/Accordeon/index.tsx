import React, { FC, ReactNode, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import "./Accordeon.scss";

interface AccordeonProps {
  className?: string;
  title: string;
  children: ReactNode;
  number: number;
}

const Accordeon: FC<AccordeonProps> = ({
  className = "",
  title,
  children,
  number,
}) => {
  const [active, setActive] = useState(false);

  const toggleActive = () => setActive(!active);

  return (
    <div className={`${className}  accordeon ${active && "active"}`}>
      <h1
        onClick={toggleActive}
        className={`space-x-2 accordeon__title cursor-pointer text-lg lg:text-xl font-bold px-2 lg:px-4 py-5 ${active ?"bg-gradient-to-r from-blue-400 to-primary text-white":'bg-white'}   flex lg:items-center`}
      >
        <span className="p-2 ">
          {active && <FaChevronUp className="text-xl" />}
          {!active && <FaChevronDown className="text-xl" />}
        </span>
        <span>{number}.</span>
        <span className=''>{title}</span>
      </h1>
      <p className="bg-white accordeon__content">{children}</p>
    </div>
  );
};

export default Accordeon;
