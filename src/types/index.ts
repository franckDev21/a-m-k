import Offre, { typeOffre } from "../models/Offre";
import { Question } from "../models/Question";
import { ResponseQuestion } from "../models/ResponseQuestion";
import Test from "../models/Test";

export interface CredentialType {
  email: string;
  password: string;
}

export interface RegisterDateType {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirm: string;
  birthday: string;
  tel: string;
}

export type CartContextProps = {
  carts: Offre[];
  setCarts: (Offres: Offre[]) => any;
};

export type TypeOffreContextProps = {
  type: typeOffre;
  setType: (type: typeOffre) => any;
};

export type LinkOffreType = {
  id: number;
  value: typeOffre;
  active: boolean;
};

export type StateType = 'OFF'|'START'|'END'|'DONE'|'REVIEW'

export type StateTestProps = {
  state: StateType,
  fullScreen: boolean,
  tests: Test[],
  trainingTests: Test[],
  examTests: Test[],
  setTests: (tests: Test[]) => any,
  setTrainingTests: (tests: Test[]) => any,
  setExamTests: (tests: Test[]) => any,
  setState: (value: StateType) => any,
  toggleShowAllScreen: () => any,
  currentActiveTest: Test|null,
  setCurrentActiveTest: (test: Test) => any
}

export type QuestionContextProps = {
  questions: Question[],
  responses: ResponseQuestion[],
  refQuestions: Question[],
  refCurrentActiveQuestion: Question|null,
  currentActiveQuestion: Question|null,
  currentActiveResponse: string|null,
  currentTabResponses: string[],
  setQuestions: (questions: Question[]) => any,
  setResponses: (responses: ResponseQuestion[]) => any,
  setRefQuestions: (questions: Question[]) => any,
  setCurrentActiveQuestion: (question: Question) => any,
  setRefCurrentActiveQuestion: (question: Question) => any,
  setCurrentActiveResponse: (value: string) => any,
  setCurrentTabResponses: (responses: string[]) => any,
  showQuestionModal: boolean,
  setShowQuestionModal: (value: boolean) => any,
  countQuestion: number,
  stopTestQuestion: boolean,
  setStopTestQuestion: (value: boolean) => any,
  setCountQuestion: (value: number) => any,
}