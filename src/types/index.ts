import Offre, { typeOffre } from "../models/Offre";
import { Question } from "../models/Question";

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
  setState: (value: StateType) => any,
  toggleShowAllScreen: () => any
}

export type QuestionContextProps = {
  questions: Question[],
  refCurrentActiveQuestion: Question|null,
  currentActiveQuestion: Question|null,
  currentActiveResponse: string|null,
  setQuestions: (questions: Question[]) => any,
  setCurrentActiveQuestion: (question: Question) => any,
  setRefCurrentActiveQuestion: (question: Question) => any,
  setCurrentActiveResponse: (value: string) => any,
  showQuestionModal: boolean,
  setShowQuestionModal: (value: boolean) => any,
  countQuestion: number,
  setCountQuestion: (value: number) => any,
}