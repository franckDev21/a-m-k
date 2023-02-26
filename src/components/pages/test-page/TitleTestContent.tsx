import React, { FC } from "react";
import useQuestions from "../../../hooks/useQuestions";
import useStateTest from "../../../hooks/useStateTest";
import TimerCard from "./TimerCard";

const TitleTestContent: FC<{ className?: string }> = ({ className = "" }) => {
  
  const { state, currentActiveTest } = useStateTest();

  const { currentQuestion } = useQuestions();

  return (
    <div className={`${className} ${currentQuestion?.time_is_over && 'disabled pointer-events-none select-none'} border-b pb-2 border-b-gray-100`}>
      <h1
        className={`font-bold ${(state === "START" || state === 'DONE') ? "text-2xl" : "text-3xl "}`}
      >
        {currentActiveTest?.label}
      </h1>
      {(state === "OFF" || state === 'END') && (
        <p className="text-lg">
          {currentActiveTest?.sub_title}
        </p>
      )}
      {(state === "START" || state === 'DONE') && <TimerCard />}
    </div>
  );
};

export default TitleTestContent;
