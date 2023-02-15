import React, { FC } from "react";
import { FaTimes } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";

interface MenuBergerProps {
  className?: string;
  isOpen?: boolean;
  onClick?: () => any
}

const MenuBerger: FC<MenuBergerProps> = ({ className = '',isOpen = false,  onClick = () => {} }) => {
  return (
    <button onClick={onClick} className={`${className} text-primary`}>
      {!isOpen && <HiMenuAlt1 className='text-4xl' />}
      {isOpen && <FaTimes className='text-4xl' />}
    </button>
  );
};

export default MenuBerger;
