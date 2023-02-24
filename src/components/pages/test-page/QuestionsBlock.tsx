import React, { FC, Fragment, useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import useQuestions from "../../../hooks/useQuestions";
import useStateTest from "../../../hooks/useStateTest";
import { Question } from "../../../models/Question";
import { questions as dataQuestions } from "../../../utils/testData";
import QuestionEndModal from "./QuestionEndModal";
import QuestionItem from "./QuestionItem";
import TestBlock from "./TestBlock";

interface QuestionsBlockProps {
  className?: string
}

const QuestionsBlock: FC<QuestionsBlockProps> = ({ className = '' }) => {

  const {
    questions,
    updateQuestions,
    currentQuestion,
    currentResponse,
    showEndQuestionModal,
    closeEndQuestionModal,
    desactiveQuestion
  } = useQuestions();

  useEffect(() => {
    // on prends les datas de l'api
    // on met a jour le store
    updateQuestions(dataQuestions)    
  }, []);

  return (
    <Fragment>
      <QuestionEndModal show={showEndQuestionModal} onClose={closeEndQuestionModal}  />
      <TestBlock className={`pt-5 ${className}`}>
        {questions.map((question,key) => (
          <Fragment key={question.id}>
            <header className={`space-y-2 ${currentQuestion?.id !== question.id && 'hidden'}`}>
              <h1 className="flex items-center space-x-2 text-xl">
                <span>
                  <AiFillStar className="text-gray-300" />
                </span>
                <span>Question {key+1} :</span>
              </h1>
              {/* intitulé */}
              <p className="font-bold">{question.title}:</p>
            </header>

            <div className={`mt-5 ${currentQuestion?.time_is_over && 'disabled pointer-events-none select-none'} space-y-4 ${currentQuestion?.id !== question.id && 'hidden'}`}>
              {question.suggestions.map((suggestion,k) => <QuestionItem onClick={desactiveQuestion} active={suggestion === currentResponse} key={k} label={suggestion} />)}
            </div>
          </Fragment>
        ))}
      </TestBlock>
    </Fragment>
  );
};

export default QuestionsBlock;
