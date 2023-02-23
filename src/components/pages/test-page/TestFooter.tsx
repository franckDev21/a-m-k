import React, { FC, useEffect, useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { BsArrowsFullscreen } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import useStateTest from "../../../hooks/useStateTest";
import Button from "../../uikit/Button";

const TestFooter: FC<{ className?: string }> = ({ className = "" }) => {

  const { toggleShow, fullScreen, state, updateState } = useStateTest();
  const [textButton,setTextButton] = useState('Commencer le test')

  const getTextButton = () => {
    switch (state) {
      case 'OFF':
        setTextButton('Commencer le test')
        break;
      case 'START':
        setTextButton('Question suivante')
        break;
      default:
        setTextButton('Terminer le test')
        break;
    }
  }

  useEffect(() => {
    getTextButton()
  },[state])

  return (
    <div
      className={`${className} flex justify-end items-center px-6 py-2 border-t border-t-gray-100`}
    >
      <div className="flex items-center space-x-4">
        <Button
          onClick={() => updateState("START")}
          positionIcon="right"
          icon={<BiChevronRight className="text-lg" />}
          rounded
          className="bg-secondary font-bold"
          label={textButton}
        />
        <IoMdSettings className="text-2xl cursor-pointer" />
        {!fullScreen && <BsArrowsFullscreen onClick={toggleShow} className="text-xl cursor-pointer" />}
        {fullScreen && <MdOutlineCloseFullscreen onClick={toggleShow} className="text-xl cursor-pointer" />}
      </div>
    </div>
  );
};

export default TestFooter;