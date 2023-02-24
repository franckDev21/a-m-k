import React, { createContext, FC, ReactNode, useState } from "react";
import { Question } from "../models/Question";
import { QuestionContextProps } from "../types";

const QuestionTestContext = createContext<QuestionContextProps>({
  questions: [],
  currentActiveQuestion: null,
  refCurrentActiveQuestion: null,
  setQuestions: () => {},
  setCurrentActiveQuestion: () => {},
  setRefCurrentActiveQuestion: () => {},
  currentActiveResponse: null,
  setCurrentActiveResponse: () => {},
  showQuestionModal: false,
  setShowQuestionModal: () => {},
  countQuestion: 1,
  setCountQuestion: () => {},
});

export const QuestionTestProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const [currentActiveQuestion, setCurrentActiveQuestion] =
    useState<Question | null>(null);
  const [refCurrentActiveQuestion, setRefCurrentActiveQuestion] =
    useState<Question | null>(null);
  const [currentActiveResponse, setCurrentActiveResponse] =
    useState<string>("");
  const [showModal,setShowModal] = useState(false)
  const [countQuestion,setCountQuestion] = useState(1)

  const contextValue: QuestionContextProps = {
    questions: allQuestions,
    setQuestions: (questions) => setAllQuestions(questions),
    currentActiveQuestion,
    refCurrentActiveQuestion,
    currentActiveResponse,
    setCurrentActiveQuestion: (question) => setCurrentActiveQuestion(question),
    setRefCurrentActiveQuestion: (question) => setRefCurrentActiveQuestion(question),
    setCurrentActiveResponse: (value) => setCurrentActiveResponse(value),
    showQuestionModal: showModal,
    setShowQuestionModal: (value) => setShowModal(value),
    countQuestion,
    setCountQuestion: (value) => setCountQuestion(value)
  };

  return (
    <QuestionTestContext.Provider value={contextValue}>
      {children}
    </QuestionTestContext.Provider>
  );
};

export default QuestionTestContext;
