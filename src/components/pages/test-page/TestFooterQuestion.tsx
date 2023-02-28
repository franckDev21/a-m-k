import React, { FC } from "react";
import { BiChevronRight } from "react-icons/bi";
import useQuestions from "../../../hooks/useQuestions";
import Button from "../../uikit/Button";
import TestFooterLayout from "./TestFooterLayout";

interface TestFooterQuestionProps {
  className?: string;
}

const TestFooterQuestion: FC<TestFooterQuestionProps> = ({
  className = "",
}) => {

  const { currentResponse, countQuestion, next } = useQuestions();

  return (
    <TestFooterLayout className={`${className}`}>
      <div className="space-x-3">
        {countQuestion > 1 && (
          <Button
            defaultColor={false}
            className="font-bold text-secondary px-4 py-3"
            label="Retour"
          />
        )}

        <Button
          onClick={next}
          defaultColor={false}
          positionIcon="right"
          icon={<BiChevronRight className="text-lg" />}
          rounded
          defauldPadding={false}
          className={`font-bold ${
            currentResponse
              ? "bg-secondary text-white"
              : "text-secondary border-secondary"
          } px-4 py-3`}
          label={`${
            currentResponse ? "Question suivante" : "Sauter la question"
          }`}
        />
      </div>
    </TestFooterLayout>
  );
};

export default TestFooterQuestion;
