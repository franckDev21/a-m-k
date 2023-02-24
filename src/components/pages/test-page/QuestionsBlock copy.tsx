import React, { FC, Fragment, useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import useStateTest from "../../../hooks/useStateTest";
import { Question } from "../../../models/Question";
import { questions } from "../../../utils/testData";
import QuestionItem from "./QuestionItem";
import TestBlock from "./TestBlock";

interface QuestionsBlockProps {
  className?: string
}

const QuestionsBlock: FC<QuestionsBlockProps> = ({ className = '' }) => {

  const { updateState } = useStateTest()

  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const [currentActiveQuestion, setCurrentActiveQuestion] =
    useState<Question | null>(null);
  const [currentActiveResponse, setCurrentActiveResponse] =
    useState<string>("");

  const next = () => {
    checkIfTheLastQuestion()
  }

  const checkIfTheLastQuestion = () => {
    // on verifie si la question active n'est pas la derniere de la liste
    let indexOfCurrentQuetion = allQuestions.indexOf(currentActiveQuestion as Question)
    if(indexOfCurrentQuetion === allQuestions.length - 1){
      console.log(indexOfCurrentQuetion,allQuestions.length-1);
      // on update le state global a "DONE" pour dire qu'il a fini
      updateState('DONE')
    }else{
      updateState('START')
    }
  }

  useEffect(() => {
    // get data
    setAllQuestions(questions);
    setCurrentActiveQuestion(questions[0])
    console.log('-- call first --');
    
  }, []);

  // a chaque fois on verifie si la question active n'est pas la derniere 
  useEffect(() => {
    console.log('-- call second --');
    checkIfTheLastQuestion()
  },[currentActiveQuestion])

  return (
    <TestBlock className={`pt-5 ${className}`}>
      {allQuestions.map((question,key) => (
        <Fragment key={question.id}>
          <header className={`space-y-2 ${currentActiveQuestion?.id !== question.id && 'hidden'}`}>
            <h1 className="flex items-center space-x-2 text-xl">
              <span>
                <AiFillStar className="text-gray-300" />
              </span>
              <span>Question {key+1} :</span>
            </h1>
            {/* intitulé */}
            <p className="font-bold">{question.title}:</p>
          </header>

          <div className={`mt-5 space-y-4 ${currentActiveQuestion?.id !== question.id && 'hidden'}`}>
            {question.suggestions.map((suggestion,k) => <QuestionItem key={k} label={suggestion} />)}
          </div>
        </Fragment>
      ))}
    </TestBlock>
  );
};

export default QuestionsBlock;
