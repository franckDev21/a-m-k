import React, { FC } from "react";
import { FaCheck } from "react-icons/fa";

const OffersBlock: FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`${className} bg-gray-100`}>
      <div className="container mx-auto pb-10 pt-16">
        <h1 className=" lg:w-[65%] mx-auto text-center text-3xl pb-5 lg:text-4xl text-transparent  bg-clip-text bg-gradient-to-r to-blue-400 from-primary text-gray-800 font-extrabold lowercase first-letter:uppercase">
          CHOISSISEZ L’OFFRE QUI CORRESPOND A VOTRE BESOIN
        </h1>
        <div className="flex px-3 lg:px-0 lg:w-[70%] items-center justify-center mx-auto my-6 space-x-4 ">
          <div className="w-1/2 lg:max-w-max px-2 lg:px-10 border-2 border-dashed border-tertiary text-center font-bold md:text-xl text-tertiary bg-tertiary bg-opacity-10 cursor-pointer  py-2">
            PMP
          </div>
          <span className="h-1 w-1/6 md-w-28 lg:w-40 border-t-2 border-dashed"></span>
          <div className="w-1/2 lg:max-w-max px-2 lg:px-10 border-2 border-dashed lg:border-r text-center font-bold md:text-xl text-gray-600 bg-white cursor-pointer  py-2">
            PSM
          </div>
          <span className="h-1 w-1/6 md-w-28 lg:w-40 border-t-2 border-dashed"></span>
          <div className="w-1/2 lg:max-w-max px-2 lg:px-10 border-2 border-dashed text-center font-bold md:text-xl text-gray-600 bg-white cursor-pointer  py-2">
            ITIL 4
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-3 xl:px-0">
          <div className="border border-primary rounded-md p-4 bg-white">
            <header className="space-y-6 pb-10 border-b border-primary">
              <div className="text-center">
                <h1 className="text-3xl text-secondary">DEMO</h1>
                <span className="text-sm font-light">
                  Testez le PMP® Exam Simulator
                </span>
              </div>

              <div className="flex flex-col space-y-3 justify-center items-center">
                <div className="flex justify-center items-center space-x-1 text-base">
                  <span className="line-through">$9.99</span>
                  <span className="inline-block px-4 font-bold uppercase bg-indigo-200 text-indigo-600 py-1 rounded-full">
                    save 100%
                  </span>
                </div>
                <span className="text-secondary text-2xl flex justify-center items-end">
                  <span className="text-5xl font-bold">GRATUIT</span>
                </span>
              </div>

              <div className="text-center">
                <button className="text-white px-4 font-bold bg-primary rounded-md py-3 w-[80%] mx-auto block">
                  Add to cart
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
            <header className="space-y-6 pb-10 border-b border-primary">
              <div className="text-center">
                <h1 className="text-3xl text-secondary">PLAN MENSUEL</h1>
                <span className="text-sm font-light">
                  30 jours de préparation
                </span>
              </div>

              <div className="flex flex-col space-y-3 justify-center items-center">
                <div className="flex justify-center items-center space-x-1 text-base">
                  <span className="line-through">$99</span>
                  <span className="inline-block px-4 font-bold uppercase bg-indigo-200 text-indigo-600 py-1 rounded-full">
                    save 80%
                  </span>
                </div>
                <span className="text-secondary text-2xl flex justify-center items-end">
                  <span></span>
                  <span className="text-5xl font-bold">50</span>
                  <span>$ USD</span>
                </span>
              </div>

              <div className="text-center">
                <button className="text-white px-4 font-bold bg-tertiary rounded-md py-3 w-[80%] mx-auto block">
                  Add to cart
                </button>
                <span className="text-sm font-light">
                  $3.99 /mo when you renew
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
            <header className="space-y-6 pb-10 border-b border-primary">
              <div className="text-center">
                <h1 className="text-3xl text-secondary">PLAN TRIMENSUEL</h1>
                <span className="text-sm font-light">
                  90 jours de préparation
                </span>
              </div>

              <div className="flex flex-col space-y-3 justify-center items-center">
                <div className="flex justify-center items-center space-x-1 text-base">
                  <span className="inline-block px-4 font-bold text-sm bg-green-200 text-green-600 py-1 rounded-full">
                    Offert aux étudiants ADAA CERTI
                  </span>
                </div>
                <span className="text-secondary text-2xl flex justify-center items-end">
                  <span></span>
                  <span className="text-5xl font-bold">135</span>
                  <span>$ USD</span>
                </span>
              </div>

              <div className="text-center">
                <button className="text-white px-4 font-bold bg-primary rounded-md py-3 w-[80%] mx-auto block">
                  Add to cart
                </button>
                <span className="text-sm font-light">
                  $3.99 /mo when you renew
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
