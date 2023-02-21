import React, { createContext, FC, ReactNode, useState } from "react";
import Offre from "../models/Offre";
import { CartContextProps } from "../types";

const CartContext = createContext<CartContextProps>({
  carts: [],
  setCarts: () => {},
});

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [carts, setListCarts] = useState<Offre[]>([]);

  const contextValue: CartContextProps = {
    carts,
    setCarts: (offres) => {
      setListCarts(offres);
    },
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartContext;
