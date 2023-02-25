export default interface Test {
  id: number;
  type: "TRAINING" | "EXAM"; //enum [TRAINING,EXAM]
  label: string; // “Test d’entrainement N°1”,
  certification_id: number;
  sub_title: string;
  total_question?: number;
}
