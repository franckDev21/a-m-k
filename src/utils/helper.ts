import Offre from "../models/Offre";
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