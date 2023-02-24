import React, { FC } from "react";
import { MdTimer } from "react-icons/md";
import useQuestions from "../../../hooks/useQuestions";
import useTimer from "../../../hooks/useTimer";

interface TimerCardProps {
  className?: string;
}

const TimerCard: FC<TimerCardProps> = ({ className = "" }) => {

  const { questions, countQuestion } = useQuestions()

  const { hours, minutes, seconds } = useTimer()

  return (
    <div
      className={`${className} flex items-center py-2 px-10 w-[99%] rounded-md mx-auto bg-yellow-400 text-gray-500 justify-between`}
    >
      <h4 className="text-white font-bold">Question {countQuestion} sur {questions.length}</h4>
      <div className="space-x-2 flex items-center">
        <span className="bg-white px-3 py-2 space-x-2 uppercase inline-flex items-center">
          <MdTimer className="text-gray-800 text-lg" />
          {hours}:{minutes}:{seconds}
        </span>
        <span className="bg-white px-3 py-2 uppercase inline-block">
          terminer le test
        </span>
      </div>
    </div>
  );
};

export default TimerCard;
