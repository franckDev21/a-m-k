import * as Yup from "yup";

export const LoginSchema = Yup.object({
  email: Yup.string()
    .email("Entrer une adresse mail valide ")
    .max(100)
    .required("le champ email est obligatoire"),
  password: Yup.string()
    .min(6, "Ce champ doit avoir six caractères au moins")
    .max(100)
    .required("le champ mot de passe est obligatoire"),
}).required();

export const RegisterSchema = Yup.object({
  firstname: Yup.string().max(100).required("le champ nom est obligatoire"),
  lastname: Yup.string().max(100).required("le champ prénom est obligatoire"),
  tel: Yup.string().max(100).required("le champ téléphone est obligatoire"),
  email: Yup.string()
    .email("Entrer une adresse mail valide ")
    .max(100)
    .required("le champ est obligatoire"),
  password: Yup.string()
    .min(6, "Ce champ doit avoir six caractères au moins")
    .max(100)
    .required("le champ mot de passe est obligatoire"),
  confirm: Yup.string().oneOf(
    [Yup.ref("password")],
    "Les mots de passe ne correspondent pas"
  ),
  birthday: Yup.string().required("le champ est obligatoire"),
}).required();
