import React, { FC } from "react";
import useStateTest from "../../../hooks/useStateTest";
import InstructionsTestContent from "./InstructionsTestContent";
import QuestionsBlock from "./QuestionsBlock";
import TestFooter from "./TestFooter";
import TitleTestContent from "./TitleTestContent";

const TestContent: FC<{ className?: string }> = ({ className = '' }) => {

  const { state } = useStateTest()

  return (
    <div className={`${className} space-y-1 mb-10 flex-grow`}>
      {/* test title */}
      <TitleTestContent />
      {/* instructions list */}
      {state === 'OFF' && <InstructionsTestContent/>}

      {state === 'START' && <QuestionsBlock />}
      {/* footer */}
      <TestFooter />
    </div>
  );
};

export default TestContent;
