import React, { FC } from "react";
import { offres } from "../../../utils/testData";
import NavBarType from "../../layouts/NavBarType";
import Offre from "./Offre";

const OffersBlock: FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div id="offre" className={`${className} bg-gray-100`}>
      <div className="container mx-auto pb-10 pt-16">
        <h1 className=" lg:w-[65%] mx-auto text-center text-3xl pb-5 lg:text-4xl text-transparent  bg-clip-text bg-gradient-to-r to-blue-400 from-primary text-gray-800 font-extrabold lowercase first-letter:uppercase">
          CHOISSISEZ L’OFFRE QUI CORRESPOND A VOTRE BESOIN
        </h1>
        <NavBarType />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-3 xl:px-0">
          {offres.map((offre,key) => (
            <Offre offre={offre} key={key} center={key === 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OffersBlock;
