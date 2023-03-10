import React, { createContext, FC, ReactNode, useState } from "react";
import { Question } from "../models/Question";
import { ResponseQuestion } from "../models/ResponseQuestion";
import { QuestionContextProps } from "../types";

const QuestionTestContext = createContext<QuestionContextProps>({
  questions: [],
  responses: [],
  refQuestions: [],
  currentActiveQuestion: null,
  currentTabResponses: [],
  refCurrentActiveQuestion: null,
  setQuestions: () => {},
  setResponses: () => {},
  setRefQuestions: () => {},
  setCurrentActiveQuestion: () => {},
  setCurrentTabResponses: () => {},
  setRefCurrentActiveQuestion: () => {},
  currentActiveResponse: null,
  setCurrentActiveResponse: () => {},
  showQuestionModal: false,
  setShowQuestionModal: () => {},
  countQuestion: 1,
  setCountQuestion: () => {},
  stopTestQuestion: false,
  setStopTestQuestion: () => {}
});

export const QuestionTestProvider: FC<{ children: ReactNode }> = ({ children }) => {

  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const [responses,setResponses] = useState<ResponseQuestion[]>([])
  const [refAllQuestions, setRefAllQuestions] = useState<Question[]>([]);
  const [currentTabResponses, setCurrentTabResponses] = useState<string[]>([]);
  const [currentActiveQuestion, setCurrentActiveQuestion] =
    useState<Question | null>(null);
  const [refCurrentActiveQuestion, setRefCurrentActiveQuestion] =
    useState<Question | null>(null);
  const [currentActiveResponse, setCurrentActiveResponse] =
    useState<string>("");
  const [showModal,setShowModal] = useState(false)
  const [countQuestion,setCountQuestion] = useState(1)
  const [stopTestQuestion,setStopTestQuestion] = useState(false)

  const contextValue: QuestionContextProps = {
    questions: allQuestions,
    responses,
    currentTabResponses,
    refQuestions: refAllQuestions,
    setQuestions: (questions) => setAllQuestions(questions),
    setResponses: (responses) => setResponses(responses),
    setRefQuestions: (questions) => setRefAllQuestions(questions),
    currentActiveQuestion,
    refCurrentActiveQuestion,
    currentActiveResponse,
    setCurrentTabResponses: (responses) => setCurrentTabResponses(responses) ,
    setCurrentActiveQuestion: (question) => setCurrentActiveQuestion(question),
    setRefCurrentActiveQuestion: (question) => setRefCurrentActiveQuestion(question),
    setCurrentActiveResponse: (value) => setCurrentActiveResponse(value),
    showQuestionModal: showModal,
    setShowQuestionModal: (value) => setShowModal(value),
    countQuestion,
    setCountQuestion: (value) => setCountQuestion(value),
    stopTestQuestion,
    setStopTestQuestion: (value) => setStopTestQuestion(value)
  };

  return (
    <QuestionTestContext.Provider value={contextValue}>
      {children}
    </QuestionTestContext.Provider>
  );
};

export default QuestionTestContext;
