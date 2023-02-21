import React, { FC, ReactNode } from "react";
import { Link } from "react-scroll";

interface ButtonProps {
  className?: string;
  isHrefLink?: boolean;
  pathLink?: string;
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
  isHrefLink = false,
  pathLink = "",
  label,
  rounded = false,
  icon,
  width,
  defauldPadding = true,
  defaultColor = true,
  onClick = () => {},
}) => {
  return !isHrefLink && !pathLink ? (
    <button
      style={{ maxWidth: width ?? 220 }}
      onClick={onClick}
      className={` ${
        defauldPadding && "px-4 py-2.5"
      }  border-2 border-transparent inline-flex items-center space-x-2 ${
        defaultColor && "text-white"
      } ${className} ${rounded && "rounded"}`}
    >
      {icon}
      <span>{label}</span>
    </button>
  ) : (
    <Link
      className={` cursor-pointer ${
        defauldPadding && "px-4 py-2.5"
      }  border-2 border-transparent inline-flex items-center space-x-2 ${
        defaultColor && "text-white"
      } ${className} ${rounded && "rounded"}`}
      to={pathLink}
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
      delay={100}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export default Button;
