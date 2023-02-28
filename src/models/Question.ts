export interface Question {
  id: number;
  title: string;
  sub_title?: string;
  timer: number;
  response_type: "SINGLE" | "MULTIPLE" | "MULTIPLE_LIMIT";
  suggestions: string[];
  responses: string[] | null;
  response: string | null;
  test_id: number;

  // time_is_over n'est pas une props du backend , cette prop
  // nous permet de connaitre si le temps de reponse d'une question est écoulé ou pas !
  time_is_over: boolean;
}
