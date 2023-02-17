import React from "react";

const Logo: React.FC<{ className?: string; defaultWidth?: boolean,white?: boolean }> = ({
  className = "",
  defaultWidth = true,
  white = false
}) => {
  return (
    <img src={`${white ? '/assets/logo_certif-removebg-.png':'/assets/LOGO-ADAA-CERTIF.png'}`} className={`${className} ${defaultWidth && 'w-32'}`} />
  );
};

export default Logo;
