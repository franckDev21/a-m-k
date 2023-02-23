import React, { FC } from "react";
import useStateTest from "../../../hooks/useStateTest";
import TimerCard from "./TimerCard";

const TitleTestContent: FC<{ className?: string }> = ({ className = "" }) => {
  const { state } = useStateTest();

  return (
    <div className={`${className} border-b pb-2 border-b-gray-100`}>
      <h1
        className={`font-bold ${state === "START" ? "text-2xl" : "text-3xl "}`}
      >
        TEST D’ENTRAINEMENT N°1
      </h1>
      {state === "OFF" && (
        <p className="text-lg">
          25 questions|25 minutes | Un taux de réponses correctes de 85 % est
          nécessaire pour réussir
        </p>
      )}
      {state === "START" && <TimerCard />}
    </div>
  );
};

export default TitleTestContent;
