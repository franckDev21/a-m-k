import React, { FC } from "react";

const End:FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`container mx-auto text-sm opacity-70 flex justify-between items-center pt-4 border-t ${className}`}>
      <div>Copyright © 2023, ADAA CERTIF. Tous droits réservés</div>
      <div>CGU Politique de confidentialité Politique de cookies</div>
    </div>
  );
};

export default End;
