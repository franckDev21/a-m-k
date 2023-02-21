import React, { FC, ReactNode } from "react";
import { Link } from "react-scroll";

interface NavLinkProps {
  label: string;
  icon?: ReactNode;
  href: string;
  className?: string;
  active?: boolean;
  offset?: number;
}

const NavLink: FC<NavLinkProps> = ({
  label,
  icon,
  href,
  className = "",
  active,
  offset = -10
}) => {
  return (
    <Link
      className={`${className} ${
        active &&
        "after:block after:absolute after:w-10 after:h-1 after:rounded-md after:bg-primary after:-bottom-1 after:left-1/2 after:-translate-x-1/2 font-bold"
      } relative nav-link inline-flex space-x-2 items-center cursor-pointer `}
      to={href}
      spy={true}
      smooth={true}
      offset={offset}
      duration={500}
      delay={100}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export default NavLink;
