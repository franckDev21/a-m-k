import React, { FC } from "react";
import { BiChevronRight } from "react-icons/bi";
import useQuestions from "../../../hooks/useQuestions";
import useStateTest from "../../../hooks/useStateTest";
import Button from "../../uikit/Button";
import TestFooterLayout from "./TestFooterLayout";

interface TestFooterResultProps {
  className?: string;
}

const TestFooterResult: FC<TestFooterResultProps> = ({ className = '' }) => {

  const { nextTest } = useStateTest()
  const { reStartCurrentTest } = useQuestions() 

  return (
    <TestFooterLayout className={`${className}`}>
      <div className="space-x-3"> 
        <Button onClick={nextTest} defaultColor={false} className="font-bold text-secondary px-4 py-3" label="Continuer" />
        
        <Button
          onClick={reStartCurrentTest}
          defaultColor={false}
          positionIcon="right"
          icon={<BiChevronRight className="text-lg" />}
          rounded
          defauldPadding={false}
          className={`font-bold bg-secondary text-white px-4 py-3`}
          label="Refaire l'exercice"
        />
      </div>
    </TestFooterLayout>
  );
};

export default TestFooterResult;
