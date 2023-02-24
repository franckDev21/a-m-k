import React, { FC, ReactNode, useState } from "react";
import { FaAngleDown, FaAngleUp, FaChevronDown, FaChevronUp } from "react-icons/fa";

import "./Accordeon.scss";

interface AccordeonProps {
  className?: string;
  title: string;
  children: ReactNode;
}

const Accordeon: FC<AccordeonProps> = ({
  className = "",
  title,
  children,
}) => {
  const [active, setActive] = useState(true);

  const toggleActive = () => setActive(!active);

  return (
    <div className={`${className}  accordeon ${active && "active"}`}>
      <h1
        onClick={toggleActive}
        className={` ${active ?"":'bg-white'} space-x-2 cursor-pointer font-bold text-gray-600 px-2 bg-gray-200 rounded-t-sm py-2 justify-between items-center flex text-lg`}
      >
        <span className=''>{title}</span>
        <span className="p-2">
          {active && <FaAngleDown className="text-xl" />}
          {!active && <FaAngleUp className="text-xl" />}
        </span>
      </h1>
      <div className="bg-white space-y-4 accordeon__content">{children}</div>
    </div>
  );
};

export default Accordeon;
