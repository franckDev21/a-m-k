import React, { FC } from "react";
import { BsPlayFill } from "react-icons/bs";
import { IoMdPause } from "react-icons/io";
import { MdTimer } from "react-icons/md";
import useQuestions from "../../../hooks/useQuestions";
import useTimer from "../../../hooks/useTimer";

interface TimerCardProps {
  className?: string;
}

const TimerCard: FC<TimerCardProps> = ({ className = "" }) => {
  const { questions, countQuestion, setStopTestQuestion, stopTestQuestion } =
    useQuestions();

  const { hours, minutes, seconds } = useTimer();

  const pauseTest = () => {
    setStopTestQuestion(!stopTestQuestion);
  };

  return (
    <div
      className={`${className} border flex items-center py-2 px-10 w-[99%] rounded-md mx-auto bg-gray-100 text-gray-500 justify-between`}
    >
      <h4 className="text-secondary font-bold">
        Question {countQuestion} sur {questions.length}
      </h4>
      <div className="space-x-2 flex items-center">
        <span className="bg-white px-3 py-2 space-x-2 uppercase inline-flex items-center">
          <MdTimer className="text-gray-800 text-lg" />
          {hours}:{minutes}:{seconds}
        </span>
        <span
          onClick={pauseTest}
          className="p-2 cursor-pointer hover:bg-white border text-gray-500 border-gray-300 rounded-full"
        >
          {!stopTestQuestion && <IoMdPause />}
          {stopTestQuestion && <BsPlayFill />}
        </span>
        <span className="bg-white px-3 py-2 uppercase inline-block">
          terminer le test
        </span>
      </div>
    </div>
  );
};

export default TimerCard;
