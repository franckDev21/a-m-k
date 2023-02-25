import { useContext } from "react";
import StateTestContext from "../context/StateTestContext";
import Test from "../models/Test";
import { StateType } from "../types";

const useStateTest = () => {
  const {
    state,
    fullScreen,
    toggleShowAllScreen,
    setState,
    examTests,
    trainingTests,
    setExamTests,
    setTrainingTests,
    currentActiveTest,
    setCurrentActiveTest
  } = useContext(StateTestContext);

  const updateTrainingTests = (tests: Test[]) => {
    setTrainingTests(tests)
    setCurrentActiveTest(tests[0])
  }

  const updateExamTests = (tests: Test[]) => {
    setExamTests(tests)
    setCurrentActiveTest(tests[0])
  }

  const updateCurrentTest = (test: Test) => {
    setCurrentActiveTest(test)
  }

  const updateState = (state: StateType) => {
    setState(state);
  };

  const toggleShow = () => {
    toggleShowAllScreen();
  };

  return {
    state,
    fullScreen,
    updateState,
    toggleShow,
    updateExamTests,
    updateTrainingTests,
    trainingTests,
    examTests,
    currentActiveTest,
    setCurrentActiveTest
  };
};

export default useStateTest;
