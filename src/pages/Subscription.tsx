import React, { useEffect, useState } from "react";
import { BsShieldCheck } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import { Link, useParams } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Offre from "../models/Offre";
import { getOfferById } from "../utils/helper";

const Subscription = () => {
  const [value, setValue] = useState<any>("");
  const [offre, setOffre] = useState<Offre | null>(null);

  const { offreId, type } = useParams();

  //we get the offer in comics
  useEffect(() => {
    setOffre(getOfferById(parseInt(offreId?.toString() || "0", 10)) ?? null);
  }, []);

  return (
    <MainLayout showNavigation={false}>
      <div className=" py-10">
        <div className="container mx-auto">
          <h1 className="text-4xl font-extrabold text-primary">
            Testez le {type}® Exam Simulator
          </h1>

          <div className="border w-[80%] bg-gray-50 rounded mt-4">
            <div className="px-4 py-2 border-b">
              <h1 className="text-xl font-bold">Type d'abonnement</h1>
              <Link to="/" className="text-primary text-sm font-light">
                Changer
              </Link>
            </div>
            <div className="p-3 flex items-start space-x-2">
              <div className="w-40 opacity-80 rounded text-center font-extrabold h-40 flex items-center justify-center bg-primary text-white text-3xl">
                <span>{offre?.name}</span>
              </div>
              <div className="space-y-3">
                <h4 className="flex items-center space-x-1">
                  <span className="text-lg font-bold">Type d’abonnement :</span>
                  <span>{offre?.name}</span>
                </h4>
                <h4 className="flex items-center space-x-1">
                  <span className="text-lg font-bold">Prix :</span>
                  <span>{offre?.price} $USD</span>
                </h4>
                <h4 className="flex items-center space-x-1">
                  <span className="text-lg font-bold">Expire dans :</span>
                  <span>7 jours </span>
                </h4>
                <h4 className="flex items-center space-x-1">
                  <span className="text-lg font-bold">Description :</span>
                  <span>{offre?.description}</span>
                </h4>
              </div>
            </div>
          </div>

          <div className="border w-[80%] bg-gray-50 rounded mt-4">
            <div className="px-4 py-2 border-b">
              <h1 className="text-xl font-bold">Information du compte</h1>
              <div className="space-x-1">
                <span>Vous avez déjà un compte ?</span>{" "}
                <span className="text-primary">Connectez-vous</span>
              </div>
            </div>
            <div className="p-3 grid grid-cols-2 gap-4">
              <div className="overflow-hidden relative bg-white rounded-lg border">
                <input
                  type="text"
                  placeholder="Entrer votre Prénom"
                  className="px-6 py-4 outline-none ring-0 border-0 w-full"
                />
              </div>
              <div className="overflow-hidden relative bg-white rounded-lg border">
                <input
                  type="text"
                  placeholder="Entrer votre Nom"
                  className="px-6 py-4 outline-none ring-0 border-0 w-full"
                />
              </div>
              <div className="overflow-hidden relative bg-white rounded-lg border">
                <input
                  type="text"
                  placeholder="Entrer votre Nom"
                  className="px-6 py-4 outline-none ring-0 border-0 w-full"
                />
                <MdAlternateEmail className="text-2xl absolute right-5 opacity-50 text-gray-600 top-1/2 -translate-y-1/2" />
              </div>

              <PhoneInputWithCountrySelect
                className="white border"
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
              />

              <div className="overflow-hidden relative bg-white rounded-lg border">
                <input
                  type="password"
                  placeholder="Mot de passe"
                  className="px-6 py-4 outline-none ring-0 border-0 w-full "
                />
                <FaLock
                  className={`text-2xl absolute opacity-50 right-5 -translate-y-1/2 top-1/2 text-gray-600 `}
                />
              </div>

              <div className="overflow-hidden relative bg-white rounded-lg border">
                <input
                  type="password"
                  placeholder="Corfirmé le mot de passe"
                  className="px-6 py-4 outline-none ring-0 border-0 w-full "
                />
                <FaLock
                  className={`text-2xl absolute opacity-50 right-5 -translate-y-1/2 top-1/2 text-gray-600 `}
                />
              </div>
            </div>

            <div className="flex space-x-2 my-2 items-start px-3 w-[43%]">
              <input
                type="checkbox"
                id="ok"
                className="text-lg w-5 h-5 text-tertiary"
              />
              <label htmlFor="ok">
                J’accepte{" "}
                <span className="text-primary cursor-pointer">
                  les conditions d’utilisation et conditions de confidentialité
                  d’Adaa Certif
                </span>
              </label>
            </div>

            <div className="px-3 my-4">
              <button className="px-10 font-bold py-3 bg-primary text-white rounded-md">
                Créer mon compte
              </button>
            </div>

            <div className="flex space-x-1 my-4 px-3">
              <span> Vous avez déjà un compte sur ADAA Certif ?</span>
              <span className="text-primary">Connectez-vous</span>
            </div>
          </div>

          <div className="border w-[80%] bg-gray-50 rounded mt-4">
            <div className="px-4 py-2 border-b">
              <h1 className="text-xl font-bold">Informations de paiement</h1>
              <div className="space-x-1">
                <span>
                  Payez avec le moyen de paiement de votre choix (carte
                  bancaire, mobile money, etc.)
                </span>
              </div>
            </div>
            <div className="px-3 py-6 grid gap-4">
              <div className="space-y-2">
                <label>
                  Etape 1: Sélectionner votre adresse de facturation
                </label>
                <div className="overflow-hidden relative bg-white rounded-lg border w-[67%]">
                  <select className="px-6 py-4 outline-none ring-0 border-0 w-full">
                    <option value="">Sélectionner votre pays</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label>
                  Etape 2: Sélectionner votre moyen de paiement
                </label>
                <div className="overflow-hidden relative bg-white rounded-lg border w-[67%]">
                  <select className="px-6 py-4 outline-none ring-0 border-0 w-full">
                    <option value="">Sélectionner votre moyen de paiement</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label>
                  Etape 3: Renseigner les informations de paiement
                </label>
                <div className="overflow-hidden relative bg-white rounded-lg border w-[67%]">
                  <select className="px-6 py-4 outline-none ring-0 border-0 w-full">
                    <option value="">Numéro de carte ou numéro mobile money</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex space-x-2 my-2 items-center px-3 py-4 ">
              <span>
                <BsShieldCheck className="text-2xl" />
              </span>
              <span>
                Vos paiements sont 100% sécurisés et nous ne conservons pas vos
                données de paiement
              </span>
            </div>
          </div>

          <div className="w-[80%] text-center py-4">
            <button className="px-16 py-4 bg-primary font-bold text-white rounded-md">
              Commander
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Subscription;
