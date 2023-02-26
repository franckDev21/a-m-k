import React, { FC, Fragment } from "react";
import useQuestions from "../../../hooks/useQuestions";
import useStateTest from "../../../hooks/useStateTest";
import ResultCard from "./ResultCard";
import TestBlock from "./TestBlock";

interface ResultsBlockProps {
  className?: string;
}

const ResultsBlock: FC<ResultsBlockProps> = ({ className = "" }) => {

  const { currentQuestion } = useQuestions()

  return (
    <TestBlock className={`${className} space-y-3 py-10`}>
      {/* liste des resultats */}
      <Fragment>
        <h1 className="text-2xl font-bold pb-3">{currentQuestion?.title} - Résultats</h1>
        <ResultCard active />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
      </Fragment>
    </TestBlock>
  );
};

export default ResultsBlock;
