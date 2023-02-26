import React, { FC } from "react";
import useStateTest from "../../../hooks/useStateTest";
import InstructionsTestContent from "./InstructionsTestContent";
import QuestionsBlock from "./QuestionsBlock";
import ResponseResultView from "./ResponseResultView";
import ResultsBlock from "./ResultsBlock";
import TestFooter from "./TestFooter";
import TitleTestContent from "./TitleTestContent";

const TestContent: FC<{ className?: string }> = ({ className = '' }) => {

  const { state } = useStateTest()

  return (
    <div className={`${className} space-y-1 mb-10 flex-grow`}>
      {/* test title */}
      {state !== 'REVIEW' && <TitleTestContent />}
      {/* instructions list */}
      {state === 'OFF' && <InstructionsTestContent/>}

      {(state === 'START' || state === 'DONE') && <QuestionsBlock />}

      {state === 'END' && <ResultsBlock />}

      {/* si le state est a 'REVIEW' on montre toutes les questions avec correction */}
      {state === 'REVIEW' && <ResponseResultView />}

      {/* footer */}
      <TestFooter />
    </div>
  );
};

export default TestContent;
