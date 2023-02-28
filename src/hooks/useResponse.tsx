import { useContext, useEffect } from "react";
import QuestionTestContext from "../context/QuestionTestContext";
import { ResponseQuestion } from "../models/ResponseQuestion";
import useQuestions from "./useQuestions";

const useResponse = () => {
  const { responses, setResponses, currentTabResponses } = useContext(QuestionTestContext)
  const { questions, currentQuestion, currentResponse } = useQuestions();

  const initResponses = () => {
    let allQuestions: ResponseQuestion[] = questions.map(q => {
      return {
        question_id: q.id,
        response: null,
        responses: null
      }
    })
    setResponses(allQuestions)
  }

  const updateResponse = (response: any) => {
    let findResponsequestion = responses.find(resp => resp.question_id === (currentQuestion?.id as number)) as ResponseQuestion
    let allResponses = responses.filter(res => res.question_id !== (currentQuestion?.id as number)) as ResponseQuestion[]
    
    let newFindResponsequestion: ResponseQuestion|null = null

    if(currentQuestion?.response_type === 'SINGLE'){
      newFindResponsequestion = { ...findResponsequestion, response}
    }else{
      newFindResponsequestion = { ...findResponsequestion, responses: response }
    }

    setResponses([...allResponses,(newFindResponsequestion as ResponseQuestion)])
    
  }

  // on mets a jour les reponses a chaques chargement des questions
  useEffect(() => {
    initResponses()
  },[questions])

  return {
    initResponses,
    updateResponse,
    responses
  };
};

export default useResponse;
