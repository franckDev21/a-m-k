import React, { FC, ReactNode } from "react";

interface ButtonProps {
  className?: string;
  label: string;
  rounded?: boolean;
  icon?: ReactNode;
  onClick?: () => any;
}

const Button: FC<ButtonProps> = ({
  className = "",
  label,
  rounded = false,
  icon,
  onClick = () => {},
}) => {
  return (
    <button
      style={{ maxWidth: 210 }}
      onClick={onClick}
      className={`${className} ${
        rounded && "rounded"
      } px-4 py-2.5 inline-flex items-center space-x-2 text-white`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default Button;
