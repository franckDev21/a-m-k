import React, { createContext, FC, ReactNode, useState } from "react";
import Test from "../models/Test";
import { StateTestProps, StateType } from "../types";

const StateTestContext = createContext<StateTestProps>({
  state: "OFF",
  fullScreen: false,
  trainingTests: [],
  examTests: [],
  setTrainingTests: () => {},
  setExamTests: () => {},
  setState: (value) => {},
  toggleShowAllScreen: () => {},
  currentActiveTest: null,
  setCurrentActiveTest: () => {},
});

export const StateTestProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<StateType>("OFF");
  const [fullScreen, setFullScreen] = useState(false);

  const [trainingTests,setTrainingTests] = useState<Test[]>([]);
  const [examTests,setExamTests] = useState<Test[]>([]);

  const [currentActiveTest,setCurrentActiveTest] = useState<Test|null>(null);

  const contextValue: StateTestProps = {
    state,
    fullScreen,
    trainingTests,
    examTests,
    setTrainingTests: (tests) => setTrainingTests(tests),
    setExamTests: (tests) => setExamTests(tests),
    toggleShowAllScreen: () => {
      setFullScreen(!fullScreen);
    },
    setState: (value) => {
      setState(value);
    },
    currentActiveTest,
    setCurrentActiveTest: (value) => setCurrentActiveTest(value),
  };

  return (
    <StateTestContext.Provider value={contextValue}>
      {children}
    </StateTestContext.Provider>
  );
};

export default StateTestContext;
