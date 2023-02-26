import React, { FC, Fragment, useState } from "react";
import useStateTest from "../../../hooks/useStateTest";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import CircleStat from "./CircleStat";

interface ResultCardProps {
  className?: string;
  active?: boolean;
}

const ResultCard: FC<ResultCardProps> = ({
  className = "",
  active = false,
}) => {

  const { updateState } = useStateTest()

  const [show, setShow] = useState(active);

  const toggleActive = () => setShow(!show);

  return (
    <div
      className={`flex ${
        !show ? "items-center" : "items-start"
      } justify-between border w-[98%] space-x-4 px-6 py-4 text-lg ${className}`}
    >
      {!show && (
        <Fragment>
          <div className="flex space-x-6 items-center">
            <div style={{ width: 100, height: 100 }}>
              <CircleStat />
            </div>
            <span className="text-2xl text-red-500">Échec</span>
          </div>
          <div className=" font-bold">26 % correct</div>
          <span>11 minutes</span>
          <span>16/02/2023</span>
          <div
            onClick={toggleActive}
            className="text-4xl text-gray-600 cursor-pointer"
          >
            {show && <FaAngleUp />}
            {!show && <FaAngleDown />}
          </div>
        </Fragment>
      )}
      {show && (
        <Fragment>
          <div className="min-w-[250px]">
            <div style={{ width: 200, height: 200 }}>
              <CircleStat />
            </div>
            <div className="space-x-2 flex flex-wrap pt-3">
              <span className="space-x-1 flex-none inline-flex items-center">
                <span className="w-3 h-3 bg-green-500"></span>
                <span>Correct</span>
              </span>
              <span className="space-x-1 flex-none inline-flex items-center">
                <span className="w-3 h-3 bg-red-500"></span>
                <span>Faux</span>
              </span>
              <span className="space-x-1 flex-none inline-flex items-center">
                <span className="w-3 h-3 bg-gray-500"></span>
                <span>Ignoré</span>
              </span>
            </div>
          </div>
          <div className="space-y-5">
            <h1 className="text-2xl">
              Tentative 10 :{" "}
              <span className="text-red-500">
                Échec (85 % nécessaires pour réussir)
              </span>
            </h1>

            <div className="space-y-3">
              <div className="space-x-1">
                <span className="text-4xl font-bold">20 %</span>
                <span>correct(0/30)</span>
              </div>
              <div className="flex flex-col">
                <span>37 secondes</span>
                <span>25 février 2023 à 12:39</span>
              </div>
            </div>

            <button onClick={_=>updateState('REVIEW')} className="px-5 py-2.5 border border-secondary text-secondary">
              Vérifier les questions
            </button>
          </div>
          <div
            onClick={toggleActive}
            className="text-4xl text-gray-600 cursor-pointer"
          >
            {show && <FaAngleUp />}
            {!show && <FaAngleDown />}
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default ResultCard;
