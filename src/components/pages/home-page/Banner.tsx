import React from "react";
import Button from "../../uikit/Button";
import { GiCutDiamond } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="h-96 relative bg-slate-400 flex justify-center items-start flex-col px-4 md:pl-20">
      <img
        src="/assets/banner.jpg"
        className="absolute left-0 top-0 w-full h-full object-cover"
      />
      <div className=" space-y-2 text-primary relative z-20 max-w-3xl text-xl  rounded-tl-3xl rounded-br-3xl shadow md:shadow-none bg-white md:bg-transparent bg-opacity-80 ">
        <h1 className="font-bold md:w-max text-xl md:text-3xl md:bg-white px-3 py-2">
          VOTRE SIMULATEUR DE TEST D’EXAMENS{" "}
        </h1>
        <p className="md:bg-white text-base font-bold md:font-normal md:text-base md:w-max px-3 py-2">
          POUR PASSER AVEC SUCCÈS LES CERTIFICATIONS INTERNATIONALES{" "}
        </p>
        <h1 className="font-bold md:w-max inline-block  md:bg-white px-3 py-2">
          (PMP®, SCRUM MASTER – PSM1 et ITIL 4)
        </h1>
      </div>
      <div className="flex items-center space-x-6 relative z-20 mt-5 md:mt-10">
        <Button
          defauldPadding={false}
          width={400}
          icon={<GiCutDiamond />}
          rounded
          label="Démo gratuite"
          className="bg-tertiary font-bold px-6 py-2 hover:border-white hover:bg-transparent"
        />
      </div>
    </div>
  );
};

export default Banner;
