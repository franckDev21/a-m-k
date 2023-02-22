import React, { FC, useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PAGES } from "../../config/routes";
import TypeOffreContext from "../../context/OffreTypeContext";
import useCart from "../../hooks/useCart";
import Offre from "../../models/Offre";
import { getIdsWithString } from "../../utils/helper";

interface CartProps {
  className?: string;
  offers?: Offre[];
}

const Cart: FC<CartProps> = ({ className = "", offers = [] }) => {
  //to delete an item in the context store
  const { deleteToCart } = useCart();

  // type of offer
  const { type } = useContext(TypeOffreContext);

  return (
    <div
      className={`p-2 absolute cursor-default bg-white rounded-lg w-[300px] top-full translate-y-5 border translate-x-10 text-secondary -right-1/2 shadow-2xl z-50`}
    >
      {offers.length > 0 ? (
        <>
          <div>
            {offers.map((offre) => (
              <div key={offre.id} className="flex relative space-x-2 pb-1 mb-1 border-b">
                <div className="uppercase w-[95px] flex-none flex bg-gray-200 rounded-md p-1 justify-center items-end">
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-3xl">{offre.price ?? '0'}</span>
                    $usd
                  </div>
                </div>
                <div className="w-[calc(100%-95px)] flex-none">
                  <h1 className="text-lg text-primary font-extrabold">{offre.name}</h1>
                  <p className="text-gray-500 break-words">{offre.description}</p>
                </div>
                <span
                  onClick={() => deleteToCart(offre.id)}
                  className="absolute top-1 -right-1 text-xl opacity-40 hover:opacity-100 cursor-pointer text-red-600"
                >
                  <FaTimes className="" />
                </span>
              </div>
            ))}
          </div>
          <Link to={PAGES.offer(getIdsWithString(offers),type)} className="py-2 text-center inline-block rounded-md bg-tertiary bg-opacity-80 font-bold hover:bg-opacity-100 select-none text-white w-full">
            voir le panier
          </Link>
        </>
      ) : (
        <>
          <div className="text-lg uppercase py-2 text-gray-400 font-bold text-center">
            Votre panier est vide
          </div>
          <button className="py-2 disabled rounded-md bg-tertiary bg-opacity-80 font-bold pointer-events-none select-none text-white w-full">
            voir le panier
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
