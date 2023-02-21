import React, { FC } from "react";
import { FaCheck } from "react-icons/fa";
import OffreModel from "../../../models/Offre";

interface OffreProps {
  className?: string;
  center?: boolean;
  offre?: OffreModel;
}

const Offre: FC<OffreProps> = ({ className = "", center = false, offre }) => {
  return (
    <div
      className={`border border-primary rounded-md p-4 bg-white ${className}`}
    >
      <header className="space-y-6 flex flex-col justify-between pb-10 border-b border-primary min-h-[350px]">
        <div className="text-center">
          <h1 className="text-3xl text-secondary pt-4 uppercase">
            {offre?.name}
          </h1>
          <div className="flex flex-col justify-center items-center space-x-2 relative">
            <span className="text-sm font-light">{offre?.description}</span>
            {offre?.freeForStudent && (
              <span className="  text-xs inline-block px-4 font-bold  bg-green-200 text-green-600 py-1 rounded-full">
                Offert aux étudiants ADAA CERTIF
              </span>
            )}
          </div>
        </div>

        {offre?.price && (
          <div className="flex flex-col space-y-3 justify-center items-center">
            <div className="flex justify-center items-center space-x-1 text-base">
              {offre?.fakePrice && (
                <span className="line-through">${offre?.fakePrice}</span>
              )}
              {offre?.reduction && (
                <span className="inline-block px-4 font-bold bg-indigo-200 text-indigo-600 py-1 rounded-full">
                  {offre?.reduction}% de réduction
                </span>
              )}
            </div>
            <span className="text-secondary text-2xl flex justify-center items-end">
              <span></span>
              <span className="text-5xl font-bold">{offre?.price}</span>
              <span>$ USD</span>
            </span>
          </div>
        )}

        {!offre?.price && (
          <div className="flex flex-col space-y-3 justify-center items-center">
            <span className="text-secondary text-2xl flex justify-center items-end">
              <span className="text-5xl font-bold">GRATUIT</span>
            </span>
          </div>
        )}

        <div className="text-center relative">
          <button
            className={`text-white px-4 font-bold ${
              center ? "bg-tertiary" : "bg-primary"
            } rounded-md py-3 w-[80%] mx-auto block`}
          >
            {offre?.btnLabel}
          </button>
          <span className="text-sm font-light absolute top-full w-full translate-y-1 left-1/2 -translate-x-1/2">
            {offre?.renouvellementText}
          </span>
        </div>
      </header>
      <div className="pt-5 px-3">
        <h1 className="text-2xl font-extrabold text-gray-600 lowercase first-letter:uppercase">
          FEATURES
        </h1>

        <div className="pb-5">
          {offre?.features.map((feature, k) => (
            <div
              key={k}
              className="flex items-center space-x-2 py-2 border-b border-dashed"
            >
              <span>
                <FaCheck className="text-green-600 mr-2 text-sm" />
              </span>{" "}
              {feature.key} :{" "}
              <span className="font-bold inline-flex space-x-2 items-center">
                <span>{feature.value}</span>{" "}
                {feature.priority && (
                  <>
                    ,<span className="text-sm text-primary">Prioritaire</span>
                  </>
                )}{" "}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offre;
