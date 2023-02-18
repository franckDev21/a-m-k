import React, { FC, useState } from "react";
import { Modal, Spinner } from "flowbite-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Logo from "../components/uikit/Logo";

import { MdAlternateEmail } from "react-icons/md";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { LoginSchema } from "../utils/validatorShema";
import { loginApi } from "../utils/testApi";

interface LoginModalProps {
  show: boolean;
  onClick?: () => any;
  switchToRegister?: () => any;
  onClose: () => any;
}
type Inputs = {
  email: string;
  password: string;
};

const LoginModal: FC<LoginModalProps> = ({
  show,
  onClick,
  onClose,
  switchToRegister,
}) => {
  const [showEye, setShowEye] = useState(false);

  const {
    register,
    formState: { errors, isValid, isSubmitting },
    handleSubmit,
    reset,
    setError,
  } = useForm<Inputs>({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    try {
      let response: any = await loginApi(data);
      if (response.success) {
        alert(`${response.message}`);
        reset();
      } else {
        console.log(response.errors);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleShowEye = () => setShowEye(!showEye);

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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full md:w-1/2 relative "
          >
            <header className="text-center space-y-3 flex flex-col justify-center items-center">
              <Logo />
              <div>
                <h1 className="text-4xl font-semibold text-gray-800">
                  Se connecter
                </h1>
                <p className="lowercase first-letter:uppercase text-sm w-[79%] mx-auto text-gray-500 pt-2">
                  FORMATIONS 90% PRATIQUES DANS LES METIERS DU DIGITAL, DES
                  TECHNOLOGIES, DU LOGICIEL, DE L’INNOVATION ET DE
                  L’ENTREPRENEURIAT
                </p>
              </div>
            </header>
            <div className="pt-6 md:pt-10 space-y-6">
              <div className="overflow-hidden relative bg-white rounded-lg mx-5 sm:mx-10">
                <input
                  {...register("email")}
                  type="text"
                  placeholder="Adresse e-mail"
                  className="px-6 py-4 outline-none ring-0 border-0 w-full bg-gray-100"
                />

                {errors.email && (
                  <span className="inline-block text-sm text-red-600">
                    {errors.email.message}
                  </span>
                )}

                <MdAlternateEmail className="text-2xl absolute right-5 opacity-50 text-gray-600 top-1/2 -translate-y-1/2" />
              </div>
              <div className="overflow-hidden relative bg-white rounded-lg mx-5 sm:mx-10">
                <input
                  {...register("password")}
                  type={showEye ? "text" : "password"}
                  placeholder="Mot de passe"
                  className="px-6 py-4 outline-none ring-0 border-0 w-full bg-gray-100"
                />

                {errors.password && (
                  <span className="inline-block text-sm text-red-600">
                    {errors.password.message}
                  </span>
                )}

                {!showEye && (
                  <FaEyeSlash
                    onClick={toggleShowEye}
                    className="text-2xl cursor-pointer absolute right-14 text-gray-600 top-1/2 -translate-y-1/2"
                  />
                )}
                {showEye && (
                  <FaEye
                    onClick={toggleShowEye}
                    className="text-2xl cursor-pointer absolute right-14 text-gray-600 top-1/2 -translate-y-1/2"
                  />
                )}

                <FaLock className="text-xl absolute right-5 opacity-50 text-gray-600 top-1/2 -translate-y-1/2" />
              </div>
            </div>
            <div className="text-right mx-5 sm:mx-10 pt-3">
              <a href="#" className="text-sm text-gray-600 hover:text-primary">
                Mot de passe oublié ?
              </a>
              <button
                type="submit"
                className={`mt-5 md:mt-10 bg-primary text-white w-full rounded-lg py-4 font-bold ${
                  !isValid || isSubmitting ? "disabled" : "active:scale-[.95]"
                } `}
              >
                {isSubmitting ? (
                  <Spinner color="info" aria-label="Info spinner example" />
                ) : (
                  "Connexion"
                )}
              </button>
            </div>

            <footer className="w-full pt-4 md:pt-0 md:absolute bottom-8 text-center space-x-2">
              <span>Vous n’avez pas encore de compte ?</span>{" "}
              <span
                onClick={switchToRegister}
                className="cursor-pointer text-primary"
              >
                Créer un compte
              </span>
            </footer>
          </form>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default LoginModal;
