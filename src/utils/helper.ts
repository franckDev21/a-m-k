import Offre from "../models/Offre";
import { Question } from "../models/Question";
import Test from "../models/Test";
import { offres } from "./testData";

export const getOfferById = (id: number): Offre | undefined => {
  return offres.find((offre) => offre.id === id);
};

export const getOffersByTabIds = (tabIds: number[]): Offre[] => {
  let newOffres: Offre[] = []
  tabIds.forEach(id => {
    newOffres.push(offres.find((offre) => offre.id === id) as Offre)
  })
  return newOffres ;
};

export const getIdsWithString = (offres: Offre[]): string => {
  if (offres.length < 1) return "";

  let ids = offres.map((offre) => offre.id).join("-");
  return ids;
};

export const getIdsWithTabNumber = (ids: string): number[] => {
  let tabTds = ids.split('-').map(id => parseInt(id,10));
  return tabTds;
};

export const allIdsExist = (tabIds: number[]) => {
  let allExist: boolean = true
  tabIds.forEach(id => {
    if(!getOfferById(id)) {
      allExist = false
      return
    }
  })
  return allExist
}

export const isLastQuestion = (allQuestions: Question[],currentActiveQuestion: Question) => {
  // on verifie si la question active n'est pas la derniere de la liste
  let indexOfCurrentQuetion = allQuestions.indexOf(currentActiveQuestion)
  if(indexOfCurrentQuetion === allQuestions.length - 1){
    return true
  }
  return false
}

export const getAllTest = (type: "TRAINING" | "EXAM", tests: Test[]): Test[] => {
  if(type === 'EXAM') return tests.filter(test => test.type === 'EXAM')
  return tests.filter(test => test.type === 'TRAINING')
}

export const getQuestionsByTestId = (testId: number, questions: Question[]): Question[] => {
  return questions.filter(question => question.test_id === testId)
}