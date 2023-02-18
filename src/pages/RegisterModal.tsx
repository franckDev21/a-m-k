import { Modal, Tooltip } from "flowbite-react";
import React, { FC, useState } from "react";
import { FaLock } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import Logo from "../components/uikit/Logo";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import DatePicker from "react-date-picker";
import { BsFillQuestionCircleFill } from "react-icons/bs";

interface RegisterModalProps {
  show: boolean;
  onClick?: () => any;
  switchToRLogin?: () => any;
  onClose: () => any;
}

const RegisterModal: FC<RegisterModalProps> = ({
  show,
  onClick,
  onClose,
  switchToRLogin,
}) => {
  const [value, setValue] = useState<any>("");
  const [valueTwho, onChange] = useState(new Date());

  return (
    <React.Fragment>
      <Modal popup size="6xl" show={show} onClose={onClose}>
        <div className="flex py-4 md:min-h-[500px] relative">
          <span className="absolute right-2 top-2" onClick={onClose}>
            <button
              aria-label="Close"
              className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              type="button"
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="0"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </span>
          <div className="w-1/2 justify-center items-center pl-10 hidden md:flex">
            <img src="/assets/undraw_secure_login_pdn4.svg" alt="login-svg" />
            {/* <img
              src="/assets/undraw_mobile_login_re_9ntv.svg"
              alt="login-svg"
            /> */}
          </div>
          <div className="w-full md:w-1/2 relative ">
            <header className="text-center space-y-2 flex flex-col justify-center items-center">
              <Logo />
              <div>
                <h1 className="text-4xl font-semibold text-gray-800">
                  S'inscrire
                </h1>
              </div>
            </header>
            <form className="pt-6 md:pt-2 space-y-2">
              <div className="flex space-x-2 mx-5 sm:mx-10">
                <div className="w-1/2 overflow-hidden relative bg-white rounded-lg ">
                  <input
                    type="text"
                    placeholder="Entrer votre Nom"
                    className="px-6 py-3 outline-none ring-0 border-0 w-full bg-gray-100"
                  />
                </div>
                <div className="w-1/2 overflow-hidden relative bg-white rounded-lg ">
                  <input
                    type="text"
                    placeholder="Entrer votre Prénom"
                    className="px-6 py-3 outline-none ring-0 border-0 w-full bg-gray-100"
                  />
                </div>
              </div>
              <div className="overflow-hidden relative bg-white rounded-lg mx-5 sm:mx-10">
                <input
                  type="password"
                  placeholder="Mot de passe"
                  className="px-6 py-3 outline-none ring-0 border-0 w-full bg-gray-100"
                />
                <FaLock className="text-xl absolute right-5 text-gray-600 top-1/2 -translate-y-1/2" />
              </div>
              <div className="overflow-hidden relative bg-white rounded-lg mx-5 sm:mx-10">
                <input
                  type="password"
                  placeholder="Corfirmé le mot de passe"
                  className="px-6 py-3 outline-none ring-0 border-0 w-full bg-gray-100"
                />
                <FaLock className="text-xl absolute right-5 text-gray-600 top-1/2 -translate-y-1/2" />
              </div>
              <div className="overflow-hidden relative bg-white rounded-lg mx-5 sm:mx-10">
                <input
                  type="email"
                  placeholder="Adresse e-mail"
                  className="px-6 py-3 outline-none ring-0 border-0 w-full bg-gray-100"
                />
                <MdAlternateEmail className="text-2xl absolute right-5 text-gray-600 top-1/2 -translate-y-1/2" />
              </div>
              <div className="overflow-hidden relative bg-white rounded-lg mx-5 sm:mx-10">
                {/* <input
                  type="email"
                  placeholder="Téléphone"
                  className="px-6 py-3 outline-none ring-0 border-0 w-full bg-gray-100"
                /> */}
                <PhoneInput
                  placeholder="Enter phone number"
                  value={value}
                  onChange={setValue}
                />
              </div>
              <div className="  relative bg-white rounded-lg mx-5 sm:mx-10">
                <label className="pb-2 inline-block">Date de naissance</label>
                <div className="flex">
                  <div className="w-[calc(100%-200px)]">
                    <DatePicker
                      className="px-4 py-2 rounded-md focus:outline-none focus:ring-0 focus:border-0 outline-none shadow-none ring-0 border-0 w-full bg-gray-100"
                      onChange={onChange}
                      value={valueTwho}
                    />
                  </div>
                  <div className="flex-grow flex items-center pl-2">
                    <Tooltip
                      content="Votre date de naissance nous permettra de vous offrir des cadeaux spéciaux"
                    >
                      <BsFillQuestionCircleFill className="text-primary cursor-pointer text-4xl" />
                    </Tooltip>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2 text-xs mx-10 items-start">
                <input type="checkbox" id="checkbox" className="text-tertiary" />
                <label htmlFor="checkbox">En cliquant sur "S'inscrire", je confirme que j'ai 16 ans ou plus et j'accepte les conditions d'utilisation, la politique de confidentialité, la politique de cookies et j'accepte de recevoir des nouvelles et des promotions.</label>
              </div>
            </form>
            <div className="text-right mx-5 sm:mx-10 pt-3">
              <button className="mt-5 md:mt-6 bg-primary text-white w-full rounded-lg py-4 font-bold  hover:bg-opacity-100 transition">
                Inscription
              </button>
            </div>

            <footer className="w-full pt-4 md:pt-0 bottom-8 text-center space-x-2">
              <span>Déjà un compte ?</span>{" "}
              <span
                onClick={switchToRLogin}
                className="text-primary cursor-pointer"
              >
                Connectez-vous{" "}
              </span>
            </footer>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default RegisterModal;
