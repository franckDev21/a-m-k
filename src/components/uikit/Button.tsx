import React, { FC, ReactNode } from "react";

interface ButtonProps {
  className?: string;
  label: string;
  rounded?: boolean;
  icon?: ReactNode;
  width?: number;
  defauldPadding?: boolean;
  defaultColor?: boolean;
  onClick?: () => any;
}

const Button: FC<ButtonProps> = ({
  className = "",
  label,
  rounded = false,
  icon,
  width,
  defauldPadding = true,
  defaultColor = true,
  onClick = () => {},
}) => {
  return (
    <button
      style={{ maxWidth: width ?? 220 }}
      onClick={onClick}
      className={` ${defauldPadding && 'px-4 py-2.5'}  border-2 border-transparent inline-flex items-center space-x-2 ${defaultColor && 'text-white'} ${className} ${
        rounded && "rounded"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default Button;
