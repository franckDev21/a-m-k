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
    currentActiveExamTest,
    currentActiveTrainingTest,
    setCurrentActiveExamTest,
    setCurrentActiveTrainingTest
  } = useContext(StateTestContext);

  const updateTrainingTests = (tests: Test[]) => {
    setTrainingTests(tests)
  }

  const updateExamTests = (tests: Test[]) => {
    setExamTests(tests)
  }

  const updateCurrentTrainingTest = (test: Test) => {
    setCurrentActiveTrainingTest(test)
  }

  const updateCurrentExamTest = (test: Test) => {
    setCurrentActiveExamTest(test)
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
    currentActiveExamTest,
    currentActiveTrainingTest,
    updateCurrentExamTest,
    updateCurrentTrainingTest
  };
};

export default useStateTest;
