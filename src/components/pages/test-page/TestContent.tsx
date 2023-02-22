import React, { FC } from "react";
import InstructionsTestContent from "./InstructionsTestContent";
import TestFooter from "./TestFooter";
import TitleTestContent from "./TitleTestContent";

const TestContent: FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`${className} space-y-1 mb-10 flex-grow`}>
      {/* test title */}
      <TitleTestContent />
      {/* instructions list */}
      <InstructionsTestContent/>
      {/* footer */}
      <TestFooter />
    </div>
  );
};

export default TestContent;
