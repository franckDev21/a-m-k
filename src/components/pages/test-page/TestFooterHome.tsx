import React, { FC } from "react";
import { BiChevronRight } from "react-icons/bi";
import useQuestions from "../../../hooks/useQuestions";
import useStateTest from "../../../hooks/useStateTest";
import Button from "../../uikit/Button";
import TestFooterLayout from "./TestFooterLayout";

interface TestFooterHomeProps {
  className?: string;
}

const TestFooterHome: FC<TestFooterHomeProps> = ({ className = "" }) => {

  const { nextTest } = useStateTest()

  const { startTest } = useQuestions()

  return (
    <TestFooterLayout className={`${className}`}>
      <div className="space-x-3"> 
        <Button onClick={nextTest} defaultColor={false} className="font-bold text-secondary px-4 py-3" label="Ignorer le test" />
        
        <Button
          onClick={startTest}
          defaultColor={false}
          positionIcon="right"
          icon={<BiChevronRight className="text-lg" />}
          rounded
          defauldPadding={false}
          className={`font-bold bg-secondary text-white px-4 py-3`}
          label="Commencer le test"
        />
      </div>
    </TestFooterLayout>
  );
};

export default TestFooterHome;
