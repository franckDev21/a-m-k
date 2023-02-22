import React, { FC } from "react";
import { BiChevronRight } from "react-icons/bi";
import { BsArrowsFullscreen } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import Button from "../../uikit/Button";

const TestFooter: FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div
      className={`${className} flex justify-end items-center px-6 py-2 border-t border-t-gray-100`}
    >
      <div className="flex items-center space-x-4">
        <Button
          positionIcon="right"
          icon={<BiChevronRight className="text-lg" />}
          rounded
          className="bg-secondary font-bold"
          label="Commencer le test"
        />
        <IoMdSettings className="text-2xl cursor-pointer" />
        <BsArrowsFullscreen className="text-xl cursor-pointer" />
      </div>
    </div>
  );
};

export default TestFooter;
