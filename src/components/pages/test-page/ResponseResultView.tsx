import React, { FC } from "react";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa";
import useQuestions from "../../../hooks/useQuestions";
import useStateTest from "../../../hooks/useStateTest";
import CircleStat from "./CircleStat";
import QuestionItem from "./QuestionItem";
import TestBlock from "./TestBlock";

interface ResponseResultViewProps {
  className?: string;
}

const ResponseResultView: FC<ResponseResultViewProps> = ({
  className = "",
}) => {
  const { currentQuestion } = useQuestions();
  const { updateState } = useStateTest()

  return (
    <TestBlock className={`${className}`}>
      <header className="my-5">
        <h1 className="text-2xl font-bold pb-3">
          {currentQuestion?.title} - Résultats
        </h1>
        <span onClick={() => updateState('START')} className="flex cursor-pointer items-center text-lg font-bold space-x-2 text-primary">
          <FaAngleLeft />
          <span>Revenir à l'avis</span>
        </span>
      </header>
      <div className="pt-4 border-t mr-4 space-y-4">
        <div className="px-10 py-6 border shadow-sm">
          <header className="flex items-center justify-between mb-10">
            <div className="flex items-center space-x-2">
              <div style={{ width: 80, height: 80 }}>
                <CircleStat />
              </div>
              <span className="text-3xl ml-5 text-gray-700">Tentative 1 </span>
            </div>
            <button className="px-4 py-3 border border-secondary flex items-center space-x-2">
              <span>Toutes les questions</span>
              <FaAngleDown />
            </button>
          </header>
          <div className="space-y-8">
            <div>
              <header className="text-lg">
                <h1>
                  Question 1 :{" "}
                  <span className="text-green-400 font-bold">Correct</span>
                </h1>
                <p className="font-bold">The Product Backlog is ordered by:</p>
              </header>
              <div className="space-y-3 mt-4">
                <QuestionItem
                  active
                  success
                  label="A) Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                />
                <QuestionItem label="B) Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
                <QuestionItem label="C) Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
                <QuestionItem label="D) Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
              </div>
            </div>
            <div>
              <header className="text-lg">
                <h1>
                  Question 2 :{" "}
                  <span className="text-red-400 font-bold">Incorrect</span>
                </h1>
                <p className="font-bold">The Product Backlog is ordered by:</p>
              </header>
              <div className="space-y-3 mt-4">
                <QuestionItem
                  
                  label="A) Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                />
                <QuestionItem success label="B) Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
                <QuestionItem active error label="C) Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
                <QuestionItem label="D) Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
                <QuestionItem label="E) Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
              </div>
            </div>
            <div>
              <header className="text-lg">
                <h1>
                  Question 3 :{" "}
                  <span className="text-red-400 font-bold">Incorrect</span>
                </h1>
                <p className="font-bold">The Product Backlog is ordered by:</p>
              </header>
              <div className="space-y-3 mt-4">
                <QuestionItem
                  
                  label="A) Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                />
                <QuestionItem label="B) Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
                <QuestionItem success label="C) Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
                <QuestionItem active error label="D) Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
                <QuestionItem  label="E) Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
              </div>
            </div>
            <div>
              <header className="text-lg">
                <h1>
                  Question 4 :{" "}
                  <span className="text-green-400 font-bold">Correct</span>
                </h1>
                <p className="font-bold">The Product Backlog is ordered by:</p>
              </header>
              <div className="space-y-3 mt-4">
                <QuestionItem
                  success
                  active
                  label="A) Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                />
                <QuestionItem label="B) Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
                <QuestionItem label="C) Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
                <QuestionItem label="D) Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
              </div>
            </div>
            <div>
              <header className="text-lg">
                <h1>
                  Question 5 :{" "}
                  <span className="text-green-400 font-bold">Correct</span>
                </h1>
                <p className="font-bold">The Product Backlog is ordered by:</p>
              </header>
              <div className="space-y-3 mt-4">
                <QuestionItem
                  active
                  success
                  type="SQUARE"
                  label="A) Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                />
                <QuestionItem type="SQUARE" label="B) Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
                <QuestionItem type="SQUARE" success active label="C) Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
                <QuestionItem type="SQUARE" label="D) Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
              </div>
            </div>
            <div>
              <header className="text-lg">
                <h1>
                  Question 6 :{" "}
                  <span className="text-red-400 font-bold">Correct</span>
                </h1>
                <p className="font-bold">The Product Backlog is ordered by:</p>
              </header>
              <div className="space-y-3 mt-4">
                <QuestionItem
                  type="SQUARE"
                  success
                  label="A) Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                />
                <QuestionItem type="SQUARE" error active label="B) Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
                <QuestionItem error active type="SQUARE" label="B) Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
                <QuestionItem type="SQUARE" label="B) Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
                <QuestionItem success type="SQUARE" label="C) Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
                <QuestionItem success type="SQUARE" label="D) Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </TestBlock>
  );
};

export default ResponseResultView;
