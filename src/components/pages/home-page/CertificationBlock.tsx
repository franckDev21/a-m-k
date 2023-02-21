import React, { FC } from "react";
import { listeCertifications } from "../../../utils/testData";
import CardCertif from "./CardCertif";

interface CertificationBlockProps {
  className?: string
}

const CertificationBlock: FC<CertificationBlockProps> = ({ className = '' }) => {
  return (
    <div id="exams" className={`${className} bg-gray-100 py-10 mt-10 px-3 lg:px-0`}>
      <div className="container mx-auto px-3 xl:px-0 items-start grid md:grid-cols-2 gap-4 lg:grid-cols-3">
        {listeCertifications.map((certif, key) => (
          <CardCertif
            principal={key === 1}
            certif={certif}
            key={key}
            className="w-1/3"
          />
        ))}
      </div>
    </div>
  );
};

export default CertificationBlock;
