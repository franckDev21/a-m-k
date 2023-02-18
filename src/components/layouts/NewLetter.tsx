import React, { FC } from "react";
import { FiMail } from "react-icons/fi";

const NewLetter:FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`${className} container mx-auto pt-20 pb-10 px-3 lg:px-0`}>
      <aside className="col-span-full order-3 relative">
        <div
          className="absolute inset-0 border-2 border-gray-200 rounded transform rotate-3 -z-1"
          aria-hidden="true"
        ></div>
        <div className="relative bg-black rounded text-center px-8 py-8 md:px-10 md:py-14">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
              <h3 className="lg:text-4xl lowercase first-letter:uppercase text-lg font-bold text-white ">
                ENVIE DE SUIVRE L'ACTUALITE <span className="capitalize">Adaa Certif</span> ?
              </h3>
              <span className='text-white'>Soyez le 1er à recevoir les dernières actualités, nouveautés et conseils</span>
            </div>
            <div className="lg:w-1/2">
              <form className="subscribe-form">
                <div className="flex flex-wrap">
                  <div className="relative w-full">
                    <label
                      className="block text-sm sr-only"
                      htmlFor="newsletter"
                    >
                      Email
                    </label>
                    <div className="relative flex items-center ">
                      <FiMail className="absolute left-4 text-tertiary text-2xl" />
                      <input
                        id="newsletter"
                        type="email"
                        className="subscribe-email rounded w-full text-gray-800 pl-14 py-3 pr-10 text-lg"
                        style={{ minWidth: 380, outline: "none" }}
                        name="email"
                        placeholder="Entrez votre adresse e-mail"
                        required
                      />
                      
                      <button
                        type="submit"
                        className="absolute  right-2"
                        aria-label="Subscribe"
                        style={{ outline: "none" }}
                      >
                        <svg
                          className="w-6 h-4 fill-current text-indigo-500 mx-3 flex-shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                            fillRule="nonzero"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    {/* <!-- Message --> */}
                    <div className="absolute">
                      <div className="subscribe-msg subscribe-error text-sm text-red-400 mt-2 hidden"></div>
                      <div className="subscribe-msg subscribe-success text-sm text-green-400 mt-2 hidden"></div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default NewLetter;
