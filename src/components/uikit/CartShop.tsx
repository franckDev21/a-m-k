import React, { FC, useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import useCart from "../../hooks/useCart";
import Cart from "../layouts/Cart";

interface CartShopProps {
  className?: string;
}

const StyleCountNumberCart: React.CSSProperties = {
  minWidth: 15,
  minHeight: 3,
  fontSize: 8,
};

const CartShop: FC<CartShopProps> = ({ className = "" }) => {

  const [showCart,setShowCart] = useState(false);

  const toggleShow = () => setShowCart(!showCart);

  // list of offers in the map
  const { carts } = useCart();

  return (
    <div id="cart" className={`${className} relative cursor-pointer`}>
      <span
        style={StyleCountNumberCart}
        className="absolute -top-1 text-center text-white font-bold -right-2 bg-red-600  rounded-full"
      >
        {carts.length}
      </span>
      <HiOutlineShoppingCart onClick={toggleShow} className="text-lg" />

      {showCart && <Cart offers={carts} />}
    </div>
  );
};

export default CartShop;
