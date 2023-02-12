import React, { FC } from "react";
import { HiMenuAlt1 } from "react-icons/hi";

interface MenuBergerProps {
  className?: string;
  onClick?: () => any
}

const MenuBerger: FC<MenuBergerProps> = ({ className = '', onClick = () => {} }) => {
  return (
    <button onClick={onClick} className={`${className} text-white`}>
      <HiMenuAlt1 className='text-4xl' />
    </button>
  );
};

export default MenuBerger;
