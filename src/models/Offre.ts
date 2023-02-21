export type typeOffre = "PMP" | "PSM1" | "ITIL 4";

export interface featureType {
  key: string;
  value: string;
  priority?: boolean;
}

export default interface Offre {
  name: string;
  description: string;
  price: null | number;
  fakePrice: null | number;
  reduction: null | number;
  features: featureType[];
  freeForStudent?: boolean;
  btnLabel: string;
  renouvellementText?: string;
}
