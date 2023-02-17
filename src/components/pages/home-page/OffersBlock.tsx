import React, { FC } from "react";
import { FaCheck } from "react-icons/fa";
import NavBarType from "../../layouts/NavBarType";

const OffersBlock: FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`${className} bg-gray-100`}>
      <div className="container mx-auto pb-10 pt-16">
        <h1 className=" lg:w-[65%] mx-auto text-center text-3xl pb-5 lg:text-4xl text-transparent  bg-clip-text bg-gradient-to-r to-blue-400 from-primary text-gray-800 font-extrabold lowercase first-letter:uppercase">
          CHOISSISEZ L’OFFRE QUI CORRESPOND A VOTRE BESOIN
        </h1>

        <NavBarType />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-3 xl:px-0">
          <div className="border border-primary rounded-md p-4 bg-white">
            <header className="space-y-6 flex flex-col justify-between pb-10 border-b border-primary min-h-[350px]">
              <div className="text-center">
                <h1 className="text-3xl text-secondary pt-4">DEMO</h1>
                <span className="text-sm font-light">
                  Testez le PMP® Exam Simulator
                </span>
              </div>

              <div className="flex flex-col space-y-3 justify-center items-center">
                <span className="text-secondary text-2xl flex justify-center items-end">
                  <span className="text-5xl font-bold">GRATUIT</span>
                </span>
              </div>

              <div className="text-center">
                <button className="text-white px-4 font-bold bg-primary rounded-md py-3 w-[80%] mx-auto block">
                  Profitez d’une démo
                </button>
              </div>
            </header>
            <div className="pt-5 px-3">
              <h1 className="text-2xl font-extrabold text-gray-600 lowercase first-letter:uppercase">
                FEATURES
              </h1>

              <div className="pb-5">
                <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                  <span>
                    <FaCheck className="text-green-600 mr-2 text-sm" />
                  </span>{" "}
                  Validité : <span className="font-bold">07 jours </span>
                </div>
                <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                  <span>
                    <FaCheck className="text-green-600 mr-2 text-sm" />
                  </span>{" "}
                  Test d’entrainement : <span className="font-bold">01</span>
                </div>
                <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                  <span>
                    <FaCheck className="text-green-600 mr-2 text-sm" />
                  </span>{" "}
                  Nombre d’essai : <span className="font-bold">illimité</span>
                </div>
                <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                  <span>
                    <FaCheck className="text-green-600 mr-2 text-sm" />
                  </span>{" "}
                  Récap. en fin de test : <span className="font-bold">Oui</span>
                </div>
                <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                  <span>
                    <FaCheck className="text-green-600 mr-2 text-sm" />
                  </span>{" "}
                  Explication réponse : <span className="font-bold">Oui</span>
                </div>
                <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                  <span>
                    <FaCheck className="text-green-600 mr-2 text-sm" />
                  </span>{" "}
                  Vérification réponse : <span className="font-bold">Oui</span>
                </div>
                <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                  <span>
                    <FaCheck className="text-green-600 mr-2 text-sm" />
                  </span>{" "}
                  Corrigé : <span className="font-bold">Oui</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-primary rounded-md p-4 bg-white">
            <header className="space-y-6 flex flex-col justify-between pb-10 border-b border-primary min-h-[350px]">
              <div className="text-center">
                <h1 className="text-3xl text-secondary pt-4">PLAN MENSUEL</h1>
                <span className="text-sm font-light">
                  30 jours de préparation
                </span>
              </div>

              <div className="flex flex-col space-y-3 justify-center items-center">
                <div className="flex justify-center items-center space-x-1 text-base">
                  <span className="line-through">$99</span>
                  <span className="inline-block px-4 font-bold bg-indigo-200 text-indigo-600 py-1 rounded-full">
                    80% de réduction
                  </span>
                </div>
                <span className="text-secondary text-2xl flex justify-center items-end">
                  <span></span>
                  <span className="text-5xl font-bold">50</span>
                  <span>$ USD</span>
                </span>
              </div>

              <div className="text-center relative">
                <button className="text-white px-4 font-bold bg-tertiary rounded-md py-3 w-[80%] mx-auto block">
                  Commander
                </button>
                <span className="text-sm font-light absolute top-full w-full translate-y-1 left-1/2 -translate-x-1/2">
                  29,99 $USD en cas de renouvellement
                </span>
              </div>
            </header>
            <div className="pt-5 px-3">
              <h1 className="text-2xl font-extrabold text-gray-600 lowercase first-letter:uppercase">
                FEATURES
              </h1>

              <div className="pb-5">
                <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                  <span>
                    <FaCheck className="text-green-600 mr-2 text-sm" />
                  </span>{" "}
                  Validité : <span className="font-bold">07 jours </span>
                </div>
                <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                  <span>
                    <FaCheck className="text-green-600 mr-2 text-sm" />
                  </span>{" "}
                  Test d’entrainement : <span className="font-bold">01</span>
                </div>
                <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                  <span>
                    <FaCheck className="text-green-600 mr-2 text-sm" />
                  </span>{" "}
                  Nombre d’essai : <span className="font-bold">illimité</span>
                </div>
                <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                  <span>
                    <FaCheck className="text-green-600 mr-2 text-sm" />
                  </span>{" "}
                  Récap. en fin de test : <span className="font-bold">Oui</span>
                </div>
                <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                  <span>
                    <FaCheck className="text-green-600 mr-2 text-sm" />
                  </span>{" "}
                  Explication réponse : <span className="font-bold">Oui</span>
                </div>
                <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                  <span>
                    <FaCheck className="text-green-600 mr-2 text-sm" />
                  </span>{" "}
                  Vérification réponse : <span className="font-bold">Oui</span>
                </div>
                <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                  <span>
                    <FaCheck className="text-green-600 mr-2 text-sm" />
                  </span>{" "}
                  Corrigé : <span className="font-bold">Oui</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-primary rounded-md p-4 bg-white">
            <header className="space-y-6 flex flex-col justify-between pb-10 border-b border-primary min-h-[350px]">
              <div className="text-center">
                <h1 className="text-3xl text-secondary pt-4">PLAN TRIMENSUEL</h1>
                <div className='flex flex-col justify-center items-center space-x-2 relative'>
                  <span className="text-sm font-light">
                    90 jours de préparation
                  </span>
                  <span className="  text-xs inline-block px-4 font-bold  bg-green-200 text-green-600 py-1 rounded-full">
                    Offert aux étudiants ADAA CERTIF
                  </span>
                </div>
              </div>

              <div className="flex flex-col space-y-3 justify-center items-center">
                <div className="flex justify-center items-center space-x-1 text-base">
                  <span className="line-through">$99</span>
                  <span className="inline-block px-4 font-bold bg-indigo-200 text-indigo-600 py-1 rounded-full">
                    80% de réduction
                  </span>
                </div>
                <span className="text-secondary text-2xl flex justify-center items-end">
                  <span></span>
                  <span className="text-5xl font-bold">135</span>
                  <span>$ USD</span>
                </span>
              </div>

              <div className="text-center relative">
                <button className="text-white px-4 font-bold bg-primary rounded-md py-3 w-[80%] mx-auto block">
                  Commander
                </button>
                <span className="text-sm font-light absolute top-full w-full translate-y-1 left-1/2 -translate-x-1/2">
                  99,99 $USD en cas de renouvellement
                </span>
              </div>
            </header>
            <div className="pt-5 px-3">
              <h1 className="text-2xl font-extrabold text-gray-600 lowercase first-letter:uppercase">
                FEATURES
              </h1>

              <div className="pb-5">
                <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                  <span>
                    <FaCheck className="text-green-600 mr-2 text-sm" />
                  </span>{" "}
                  Validité : <span className="font-bold">07 jours </span>
                </div>
                <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                  <span>
                    <FaCheck className="text-green-600 mr-2 text-sm" />
                  </span>{" "}
                  Test d’entrainement : <span className="font-bold">01</span>
                </div>
                <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                  <span>
                    <FaCheck className="text-green-600 mr-2 text-sm" />
                  </span>{" "}
                  Nombre d’essai : <span className="font-bold">illimité</span>
                </div>
                <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                  <span>
                    <FaCheck className="text-green-600 mr-2 text-sm" />
                  </span>{" "}
                  Récap. en fin de test : <span className="font-bold">Oui</span>
                </div>
                <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                  <span>
                    <FaCheck className="text-green-600 mr-2 text-sm" />
                  </span>{" "}
                  Explication réponse : <span className="font-bold">Oui</span>
                </div>
                <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                  <span>
                    <FaCheck className="text-green-600 mr-2 text-sm" />
                  </span>{" "}
                  Vérification réponse : <span className="font-bold">Oui</span>
                </div>
                <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                  <span>
                    <FaCheck className="text-green-600 mr-2 text-sm" />
                  </span>{" "}
                  Corrigé : <span className="font-bold">Oui</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersBlock;
