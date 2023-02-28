import React, { FC, ReactNode } from "react";
import { BsArrowsFullscreen } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import useStateTest from "../../../hooks/useStateTest";

interface TestFooterLayoutProps {
  className?: string;
  children?: ReactNode;
}

const TestFooterLayout: FC<TestFooterLayoutProps> = ({ className = '', children }) => {

  const { toggleShow, fullScreen } = useStateTest();

  return (
    <div
      className={`${className} flex justify-end items-center px-6 py-2 border-t border-t-gray-100`}
    >
      <div className="flex items-center space-x-4">

        {children}  

        <IoMdSettings className="text-2xl cursor-pointer" />
        {!fullScreen && (
          <BsArrowsFullscreen
            onClick={toggleShow}
            className="text-xl cursor-pointer"
          />
        )}
        {fullScreen && (
          <MdOutlineCloseFullscreen
            onClick={toggleShow}
            className="text-xl cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default TestFooterLayout;
