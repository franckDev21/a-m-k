import React, { FC } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";

interface CartShopProps {
  className?: string;
}

const StyleCountNumberCart: React.CSSProperties = {
  minWidth: 15,
  minHeight: 3,
  fontSize: 8
};

const CartShop: FC<CartShopProps> = ({ className = "" }) => {
  return (
    <div className={`${className} relative text-white cursor-pointer`}>
      <span
        style={StyleCountNumberCart}
        className="absolute -top-1 text-center font-bold text-white -right-2 bg-red-600  rounded-full"
      >
        0
      </span>
      <HiOutlineShoppingCart className="text-lg" />
    </div>
  );
};

export default CartShop;
