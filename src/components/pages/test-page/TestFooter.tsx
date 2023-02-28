import React, { FC } from "react";
import useStateTest from "../../../hooks/useStateTest";
import TestFooterHome from "./TestFooterHome";
import TestFooterQuestion from "./TestFooterQuestion";
import TestFooterResult from "./TestFooterResult";

interface TestFooterProps {
  className?: string;
}

const TestFooter: FC<TestFooterProps> = ({
  className = "",
}) => {
  
  const { state } = useStateTest()

  return (
    <div className={`${className} w-full`}>
      {state === 'OFF' && <TestFooterHome />}
      {(state === 'START' || state === 'DONE') && <TestFooterQuestion />}
      {state === 'END' && <TestFooterResult />}
    </div>
  );
};

export default TestFooter;
