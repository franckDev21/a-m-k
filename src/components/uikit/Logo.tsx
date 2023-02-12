import React from "react";

const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return <img src='/assets/LOGO-ADAA-CERTIF.png' className={`${className} w-32`} />;
};

export default Logo;
