import React, { FC, useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import useQuestions from "../../../hooks/useQuestions";
import useStateTest from "../../../hooks/useStateTest";
import Test from "../../../models/Test";
import { getAllTest, getQuestionsByTestId } from "../../../utils/helper";
import { tests } from "../../../utils/testData";
import Accordeon from "./Accordeon";
import TestItem from "./TestItem";

const TestNavigation: FC<{ className?: string }> = ({ className = "" }) => {

  const { updateQuestions, refQuestions } = useQuestions()

  const {
    toggleShow,
    fullScreen,
    currentActiveTest,
    examTests,
    trainingTests,
    updateExamTests,
    updateTrainingTests,
    setCurrentActiveTest,
  } = useStateTest();

  const updateStoreQuestion  = (test: Test) => {
    setCurrentActiveTest(test)
    updateQuestions(getQuestionsByTestId(test.id,refQuestions))    

    console.log(getQuestionsByTestId(test.id,refQuestions),refQuestions);
  }

  useEffect(() => {
    updateExamTests(getAllTest("EXAM", tests));
    updateTrainingTests(getAllTest("TRAINING", tests));
  }, []);

  return (
    <div
      className={`${
        fullScreen && "hidden"
      } overflow-y-auto w-[350px] flex-none bg-gray-50 border ml-2 rounded-2xl py-5 px-4 ${className}`}
    >
      <header className="space-x-2 pb-4 border-b justify-between items-center flex text-xl mb-6">
        <h1 className="font-bold">Contenu du PMP TEST</h1>
        <AiOutlinePlus
          onClick={toggleShow}
          className="cursor-pointer rotate-45 text-2xl"
        />
      </header>

      {/* accordeon */}
      <Accordeon className="mb-4" title="Tests d’entrainement">
        {trainingTests.map((test, key) => (
          <TestItem
            onClick={() => updateStoreQuestion(test)}
            key={key}
            active={test.id === currentActiveTest?.id}
            label={test.label}
          />
        ))}
      </Accordeon>

      <Accordeon title="Tests d’examens">
        {examTests.map((test, key) => (
          <TestItem
            onClick={() => updateStoreQuestion(test)}
            key={key}
            active={test.id === currentActiveTest?.id}
            label={test.label}
          />
        ))}
      </Accordeon>
    </div>
  );
};

export default TestNavigation;
