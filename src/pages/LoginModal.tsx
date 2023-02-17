import { Button, Modal } from "flowbite-react";
import React, { FC } from "react";
import Logo from "../components/uikit/Logo";

import { MdAlternateEmail } from 'react-icons/md';
import { FaLock } from "react-icons/fa";

interface LoginModalProps {
  show: boolean;
  onClick?: () => any;
  onClose: () => any;
}

const LoginModal: FC<LoginModalProps> = ({ show, onClick, onClose }) => {
  return (
    <React.Fragment>
      <Modal popup size="6xl" show={show} onClose={onClose}>
        <Modal.Header></Modal.Header>
        <div className="flex pb-10 md:pb-0 md:min-h-[600px]">
          <div className="w-1/2 justify-center items-center pl-10 hidden md:flex">
            {/* <img src="/assets/undraw_secure_login_pdn4.svg" alt="login-svg" /> */}
            <img
              src="/assets/undraw_mobile_login_re_9ntv.svg"
              alt="login-svg"
            />
          </div>
          <div className="w-full md:w-1/2 relative ">
            <header className="text-center space-y-3 flex flex-col justify-center items-center">
              <Logo />
              <div>
                <h1 className="text-4xl font-semibold text-gray-800">
                  Se connecter
                </h1>
                <p className='lowercase first-letter:uppercase text-sm w-[79%] mx-auto text-gray-500 pt-2'>
                  FORMATIONS 90% PRATIQUES DANS LES METIERS DU DIGITAL, DES
                  TECHNOLOGIES, DU LOGICIEL, DE L’INNOVATION ET DE
                  L’ENTREPRENEURIAT
                </p>
              </div>
            </header>
            <form className="pt-6 md:pt-10 space-y-6">
              <div className='overflow-hidden relative bg-white rounded-lg mx-5 sm:mx-10'>
                <input type='email' placeholder='Adresse e-mail' className='px-6 py-4 outline-none ring-0 border-0 w-full bg-gray-100' />
                <MdAlternateEmail className='text-2xl absolute right-5 text-gray-600 top-1/2 -translate-y-1/2' />
              </div>
              <div className='overflow-hidden relative bg-white rounded-lg mx-5 sm:mx-10'>
                <input type='password' placeholder='Mot de passe' className='px-6 py-4 outline-none ring-0 border-0 w-full bg-gray-100' />
                <FaLock className='text-xl absolute right-5 text-gray-600 top-1/2 -translate-y-1/2' />
              </div>
            </form>
            <div className="text-right mx-5 sm:mx-10 pt-3">
              <a href="#" className="text-sm text-gray-600 hover:text-primary">Mot de passe oublié ?</a>
              <button className='mt-5 md:mt-10 bg-primary text-white w-full rounded-lg py-4 font-bold  hover:bg-opacity-100 transition'>Connexion</button>
            </div>
           
            <footer className="w-full pt-4 md:pt-0 md:absolute bottom-8 text-center space-x-2">
              <span>Déjà un compte ?</span> <a href="#" className='text-primary'>Connectez-vous </a>
            </footer>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default LoginModal;
