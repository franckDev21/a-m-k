import React, { FC } from "react";

interface CartProps {
  className?: string;
}

const Cart: FC<CartProps> = ({ className = '' }) => {
  return <div className={`p-2 absolute bg-white rounded-lg w-[300px] top-full translate-y-5 border translate-x-10 text-secondary -right-1/2 shadow-2xl z-50`}>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, natus?
  </div>;
};

export default Cart;
