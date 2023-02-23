import Offre, { typeOffre } from "../models/Offre";

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