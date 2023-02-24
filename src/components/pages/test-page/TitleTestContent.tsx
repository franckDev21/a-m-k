import React, { FC } from "react";
import useQuestions from "../../../hooks/useQuestions";
import useStateTest from "../../../hooks/useStateTest";
import TimerCard from "./TimerCard";

const TitleTestContent: FC<{ className?: string }> = ({ className = "" }) => {
  const { state } = useStateTest();

  const { currentQuestion } = useQuestions();

  return (
    <div className={`${className} ${currentQuestion?.time_is_over && 'disabled pointer-events-none select-none'} border-b pb-2 border-b-gray-100`}>
      <h1
        className={`font-bold ${(state === "START" || state === 'DONE') ? "text-2xl" : "text-3xl "}`}
      >
        TEST D’ENTRAINEMENT N°1
      </h1>
      {state === "OFF" && (
        <p className="text-lg">
          25 questions|25 minutes | Un taux de réponses correctes de 85 % est
          nécessaire pour réussir
        </p>
      )}
      {(state === "START" || state === 'DONE') && <TimerCard />}
    </div>
  );
};

export default TitleTestContent;
