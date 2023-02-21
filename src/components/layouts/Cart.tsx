import React, { FC } from "react";

interface CartProps {
  className?: string;
}

const Cart: FC<CartProps> = ({ className = "" }) => {
  return (
    <div
      className={`p-2 absolute cursor-default bg-white rounded-lg w-[300px] top-full translate-y-5 border translate-x-10 text-secondary -right-1/2 shadow-2xl z-50`}
    >
      <div className="flex  space-x-2 pb-1 mb-1 border-b">
        <div className="uppercase flex bg-gray-200 rounded-md p-1 justify-center items-center">
         <div> <span className="text-5xl">0</span>
          $usd</div>
        </div>
        <div>
          <h1 className="text-xl text-primary font-extrabold">DEMO</h1>
          <p className="text-gray-500">Testez le PMP® Exam Simulator</p>
        </div>
      </div>
      <button className="py-2 rounded-md bg-tertiary bg-opacity-80 font-bold hover:bg-opacity-100 text-white w-full">
        voir le panier
      </button>
    </div>
  );
};

export default Cart;
