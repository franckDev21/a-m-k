import React from "react";

const Logo: React.FC<{ className?: string; defaultWidth?: boolean }> = ({
  className = "",
  defaultWidth = true
}) => {
  return (
    <img src="/assets/LOGO-ADAA-CERTIF.png" className={`${className} ${defaultWidth && 'w-32'}`} />
  );
};

export default Logo;
