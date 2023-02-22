import React, { FC } from "react";

const TitleTestContent: FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`${className} border-b pb-2 border-b-gray-100`}>
      <h1 className="text-3xl font-bold">TEST D’ENTRAINEMENT N°1</h1>
      <p className="text-lg">
        25 questions|25 minutes | Un taux de réponses correctes de 85 % est
        nécessaire pour réussir
      </p>
    </div>
  );
};

export default TitleTestContent;
