import { useContext, useState } from "react";
import QuestionTestContext from "../context/QuestionTestContext";
import { Question } from "../models/Question";
import { isLastQuestion } from "../utils/helper";
import useStateTest from "./useStateTest";

const useQuestions = () => {
  const {
    questions,
    setQuestions,
    currentActiveQuestion,
    refCurrentActiveQuestion,
    setCurrentActiveQuestion,
    setRefCurrentActiveQuestion,
    currentActiveResponse,
    setCurrentActiveResponse,
    showQuestionModal,
    setShowQuestionModal,
    countQuestion,
    setCountQuestion,
    stopTestQuestion,
    setStopTestQuestion
  } = useContext(QuestionTestContext);

  // 'OFF' | 'START' | 'DONE' | 'REVIEW'
  const { updateState, state } = useStateTest()

  const [totalQuestion,setTotalQuestion] = useState(0)

  const updateQuestions = (questions: Question[]) => {
    setQuestions(questions);
    setCurrentActiveQuestion(questions[0])
    setRefCurrentActiveQuestion(questions[0])
    setTotalQuestion(questions.length)
  };

  const updateCurrentQuestion =  (question: Question) => {
    setCurrentActiveQuestion(question)
  }

  const desactiveQuestion = () => {
    if(currentActiveQuestion){
      activeStopTest() // stop timer
      setCurrentActiveQuestion({...currentActiveQuestion,time_is_over: true})
    }
  }

  const toggleActiveQuestion = () => {
    console.log('--click--');
    
    if(currentActiveQuestion){
      toggleStopTest() // toggle timer
      setCurrentActiveQuestion({...currentActiveQuestion,time_is_over: !currentActiveQuestion.time_is_over})
    }
  }

  const toggleStopTest = () => {
    setStopTestQuestion(!stopTestQuestion)
  }

  const activeStopTest = () => {
    setStopTestQuestion(true)
  }

  const activeQuestion = () => {
    if(currentActiveQuestion){
      setCurrentActiveQuestion({...currentActiveQuestion,time_is_over: false})
    }
  }

  const updateCurrentResponse =  (response: string) => {
    setCurrentActiveResponse(response)
  }

  const next = () => {

    if(state !== 'DONE'){
      // on vide la reponse en state
      setCurrentActiveResponse('')
    }

    // a chaque fois on verifie si la question active n'est pas la derniere 
    if(!isLastQuestion(questions,refCurrentActiveQuestion as Question)){
      let index = questions.indexOf(refCurrentActiveQuestion as Question) + 1
      setCountQuestion(countQuestion+1)

      if(!isLastQuestion(questions,refCurrentActiveQuestion as Question)) updateState('DONE')

      setCurrentActiveQuestion(questions[index])
      setRefCurrentActiveQuestion(questions[index])
    }else{      
      if(state === 'OFF'){
        updateState('START')
      }else if(state === 'START'){
        updateState('DONE')
      }else if(state === 'DONE'){
        // on ouvre la modal d'avertissement de fin 
        openModal()
      }
    }
  }

  const closeModal = () => setShowQuestionModal(false)
  const openModal = () => setShowQuestionModal(true)


  return {
    questions,
    updateQuestions,
    totalQuestion,
    updateCurrentQuestion,
    currentQuestion: currentActiveQuestion,
    refCurrentQuestion: refCurrentActiveQuestion,
    updateCurrentResponse,
    currentResponse: currentActiveResponse,
    next,
    showEndQuestionModal: showQuestionModal,
    closeEndQuestionModal: closeModal,
    openEndQuestionModal: openModal,
    countQuestion,
    desactiveQuestion,
    activeQuestion,
    toggleActiveQuestion,
    toggleStopTest,
    stopTestQuestion
  };
};

export default useQuestions;
