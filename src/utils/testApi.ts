import { CredentialType, RegisterDateType } from "../types";

export const loginApi = async (credentials: CredentialType) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (credentials.email === "test@email.com") {
        reject({
          errors: {
            email: "L'email est déjà choisi par un autre utilisateur.",
          },
        });
      } else {
        resolve({
          message: "Connexion effectuée avec succès ",
          success: true,
        });
      }
    }, 2000);
  });
};


export const RegisterApi = async (credentials: RegisterDateType) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (credentials.email === "test@email.com") {
        reject({
          errors: {
            email: "L'email est déjà choisi par un autre utilisateur.",
          },
        });
      } else {
        resolve({
          message: "Connexion effectuée avec succès ",
          success: true,
        });
      }
    }, 2000);
  });
};