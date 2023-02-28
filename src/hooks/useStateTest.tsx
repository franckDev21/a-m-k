import { useContext } from "react";
import StateTestContext from "../context/StateTestContext";
import Test from "../models/Test";
import { StateType } from "../types";
import { isLastTest } from "../utils/helper";

const useStateTest = () => {
  const {
    state,
    fullScreen,
    toggleShowAllScreen,
    setState,
    tests,
    examTests,
    trainingTests,
    setTests,
    setExamTests,
    setTrainingTests,
    currentActiveTest,
    setCurrentActiveTest,
  } = useContext(StateTestContext);

  const updateTests = (tests: Test[]) => {
    setTests(tests)
  }

  const nextTest = () => {
    if(!isLastTest(tests,currentActiveTest as Test)){
      let index = tests.indexOf(currentActiveTest as Test) + 1
      setCurrentActiveTest(tests[index])
    }else{
      setCurrentActiveTest(tests[0])
    }
    updateState('OFF')
  }

  const prevTest = () => {
    
  }

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
    tests,
    state,
    fullScreen,
    updateState,
    toggleShow,
    updateExamTests,
    updateTrainingTests,
    trainingTests,
    examTests,
    currentActiveTest,
    updateCurrentTest,
    updateTests,
    nextTest,
    prevTest
  };
};

export default useStateTest;
