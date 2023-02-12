import React, { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

interface NavLinkProps {
  label: string;
  icon?: ReactNode;
  href: string;
  className?: string;
  active?: boolean;
}

const NavLink: FC<NavLinkProps> = ({ label, icon, href, className = '', active }) => {
  return (
    <Link
      className={`${className} ${active && 'after:block  after:absolute after:w-10 after:h-0.5 after:rounded-md after:bg-white after:-bottom-1 after:left-1/2 after:-translate-x-1/2 font-bold'} relative inline-flex space-x-2 items-center text-white`}
      to={href}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export default NavLink;
