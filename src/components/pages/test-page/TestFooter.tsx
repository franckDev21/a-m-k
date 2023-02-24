import React, { FC, useEffect, useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { BsArrowsFullscreen } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import useQuestions from "../../../hooks/useQuestions";
import useStateTest from "../../../hooks/useStateTest";
import Button from "../../uikit/Button";

interface TestFooterProps {
  className?: string;
  isThisTheLastQuestion?: boolean;
}

const TestFooter: FC<TestFooterProps> = ({
  className = "",
  isThisTheLastQuestion = false,
}) => {
  const { toggleShow, fullScreen, state } = useStateTest();

  const { next: nextStape , currentResponse} = useQuestions();

  const [textButton, setTextButton] = useState("Commencer le test");

  const getTextButton = () => {
    switch (state) {
      case "OFF":
        setTextButton("Commencer le test");
        break;
      case "START":
        setTextButton("Question suivante");
        break;
      default:
        setTextButton("Terminer le test");
        break;
    }
  };

  useEffect(() => {
    getTextButton();
  }, [state]);

  return (
    <div
      className={`${className} flex justify-end items-center px-6 py-2 border-t border-t-gray-100`}
    >
      <div className="flex items-center space-x-4">
        <Button
          defaultColor={false}
          onClick={nextStape}
          positionIcon="right"
          icon={<BiChevronRight className="text-lg" />}
          rounded
          defauldPadding={false}
          className={`font-bold px-4 py-3 ${!currentResponse && (state === "START" || state === 'DONE') && ''} ${
            (state !== "DONE" && (currentResponse || state === 'OFF'))
              ? "bg-secondary text-white"
              : "text-secondary border-secondary"
          }`}
          label={(!currentResponse && state !== 'OFF') ? 'Sauter la question':textButton}
        />
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

export default TestFooter;
