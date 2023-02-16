import React from "react";
import ReactPlayer from "react-player";
import MainLayout from "../components/layouts/MainLayout";
import Banner from "../components/pages/home-page/Banner";
import CardCertif from "../components/pages/home-page/CardCertif";
import { listeCertifications } from "../utils/testData";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import Accordeons from "../components/pages/home-page/Accordeons";
import { FaCheck } from "react-icons/fa";
import NewLetter from "../components/layouts/NewLetter";

const Home = () => {
  return (
    <MainLayout>
      <Banner />
      <div className="lg:flex-row px-3 flex-col-reverse flex items-center md:space-x-5 container mx-auto mt-16 ">
        <ReactPlayer
          width={650}
          className="hidden lg:block"
          controls
          url="/assets/video.mp4"
        />
        <ReactPlayer
          className="video-responsive lg:hidden "
          controls
          url="/assets/video.mp4"
        />
        <div className="flex justify-center items-center flex-col flex-grow mb-4 lg:mb-0">
          <div className="text-center w-full mb-5">
            <h1 className="text-3xl space-x-2 font-bold">
              <span className="text-tertiary">Obtenez</span>
              <span className="text-4xl font-extrabold text-primary">
                99.99%
              </span>
            </h1>
            <p className="text-2xl lg:text-3xl text-gray-800 font-bold">
              de chance de réussir votre <br /> Certification au 1<sup>er</sup>{" "}
              essai
            </p>
          </div>
          <img src="/assets/undraw_certificate_re_yadi.svg" width={300} />
        </div>
      </div>

      <div className="bg-gray-100 py-10 mt-10 px-3 lg:px-0">
        <div className="container mx-auto px-3 xl:px-0 items-start grid md:grid-cols-2 gap-4 lg:grid-cols-3">
          {listeCertifications.map((certif, key) => (
            <CardCertif
              principal={key === 1}
              certif={certif}
              key={key}
              className="w-1/3"
            />
          ))}
        </div>
      </div>

      <div
        className="py-10 h-[900px] relative"
        style={{
          backgroundImage: `linear-gradient(#3C5EAB, #3c5dab57, #3c5dab57),url('/assets/istockphoto-1248897199-1024x1024.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        <div className="container mx-auto ">
          <h1 className=" mx-auto mt-5 lg:mt-10 text-center text-4xl font-extrabold text-white">
            Nos étudiants témoignent
          </h1>

          <div className="p-5 flex flex-col md:flex-row md:space-x-5 space-y-4 md:space-y-0 w-[99%] md:w-[70%] text-white rounded-md absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-[200px] h-[200px] lg:w-[350px] flex-none lg:h-[350px] overflow-hidden relative border-4">
              <img
                src="/assets/student1-removebg-preview.png"
                className="absolute w-full h-auto object-cover"
              />
            </div>
            <div>
              <p className="text-lg lg:text-xl xl:text-2xl font-light">
                « La formation Tech Lead d'Adaa est réellement en accord avec le
                monde de l'entreprise. Il était aussi important que la formation
                soit au niveau Bac +5, car j'avais déjà un Bac +3 : je ne suis
                pas déçu du tout, car l’apprentissage est progressif avec l’aide
                des mentors. »
              </p>
              <div className="mt-10">
                <p className="bg-primary text-white max-w-max px-2">
                  Product Manager, Orange Cameroun
                </p>
                <h1 className="text-2xl font-extrabold">Danielle KOTTO</h1>
                <h1 className="text-tertiary font-bold bg-white max-w-max px-2">
                  Certified PMP
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto pb-10 pt-16">
        <h1 className="w-[79%] mx-auto text-center text-2xl lg:text-4xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r to-blue-400 from-primary text-gray-800">
          <span
            style={{ clipPath: "polygon(5% 0, 100% 0%, 95% 100%, 0% 100%)" }}
            className="px-5 bg-primary text-white inline-block"
          >
            +2 000 professionnels{" "}
          </span>{" "}
          formés de plus de +350 organisations, y compris ces organisations
          réputées
        </h1>
        <div className="pt-14 grid grid-cols-5 gap-5 px-2 lg:px-0">
          <img
            src="/assets/logo les brasseries du cameroun.png"
            className="w-full"
            alt="logo"
          />
          <img
            src="/assets/logo Gabon Telecom.png"
            className="w-full"
            alt="logo"
          />
          <img src="/assets/logo BGFI Bank.png" className="w-full" alt="logo" />
          <img src="/assets/logo Olam.png" className="w-full" alt="logo" />
          <img src="/assets/logo Axa.png" className="w-full" alt="logo" />
          <img
            src="/assets/logo societe Generale.png"
            className="w-full"
            alt="logo"
          />
          <img src="/assets/logo eneo.png" alt="logo" className="w-full" />
          <img src="/assets/logo eneo 2.png" alt="logo" className="w-full" />
          <img
            src="/assets/logo cartepillar 2.png"
            alt="logo"
            className="w-full"
          />
          <img
            src="/assets/logo10-200x200.jpg"
            className="w-full"
            style={{ filter: "grayscale(100%)" }}
            alt="logo"
          />
        </div>
      </div>

      <div style={{ backgroundImage: "url(/assets/home-menu-bg-overlay.svg)" }}>
        <div className="container mx-auto pb-10 pt-4 lg:pt-16">
          <h1 className="lg:w-[59%] mx-auto text-center text-3xl lg:text-4xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r to-blue-400 from-primary text-gray-800 lowercase first-letter:uppercase">
            QUESTIONS LES PLUS FREQUENTES{" "}
            <span className="uppercase">(FAQ)</span>
          </h1>
          <Accordeons className="mt-10" />
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="container mx-auto pb-10 pt-16">
          <h1 className=" lg:w-[65%] mx-auto text-center text-3xl pb-5 lg:text-4xl text-transparent  bg-clip-text bg-gradient-to-r to-blue-400 from-primary text-gray-800 font-extrabold lowercase first-letter:uppercase">
            CHOISSISEZ L’OFFRE QUI CORRESPOND A VOTRE BESOIN
          </h1>
          <div className="flex px-3 lg:px-0 lg:w-[70%] items-center justify-center mx-auto my-6 space-x-4 ">
            <div className="w-1/2 lg:max-w-max px-2 lg:px-10 border-2 border-dashed border-tertiary text-center font-bold md:text-xl text-tertiary bg-tertiary bg-opacity-10 cursor-pointer  py-2">
              PMP
            </div>
            <span className="h-1 w-1/6 md-w-28 lg:w-40 border-t-2 border-dashed"></span>
            <div className="w-1/2 lg:max-w-max px-2 lg:px-10 border-2 border-dashed lg:border-r text-center font-bold md:text-xl text-gray-600 bg-white cursor-pointer  py-2">
              PSM
            </div>
            <span className="h-1 w-1/6 md-w-28 lg:w-40 border-t-2 border-dashed"></span>
            <div className="w-1/2 lg:max-w-max px-2 lg:px-10 border-2 border-dashed text-center font-bold md:text-xl text-gray-600 bg-white cursor-pointer  py-2">
              ITIL 4
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-3 xl:px-0">
            <div className="border border-primary rounded-md p-4 bg-white">
              <header className="space-y-6 pb-10 border-b border-primary">
                <div className="text-center">
                  <h1 className="text-3xl text-secondary">
                    DEMO
                  </h1>
                  <span className="text-sm font-light">
                    Testez le PMP® Exam Simulator
                  </span>
                </div>

                <div className="flex flex-col space-y-3 justify-center items-center">
                  <div className="flex justify-center items-center space-x-1 text-base">
                    <span className='line-through'>$9.99</span>
                    <span className="inline-block px-4 font-bold uppercase bg-indigo-200 text-indigo-600 py-1 rounded-full">
                      save 100%
                    </span>
                  </div>
                  <span className="text-secondary text-2xl flex justify-center items-end">
                    <span className="text-5xl font-bold">GRATUIT</span>
                  </span>
                </div>

                <div className="text-center">
                  <button className="text-white px-4 font-bold bg-primary rounded-md py-3 w-[80%] mx-auto block">
                    Add to cart
                  </button>
                </div>
              </header>
              <div className="pt-5 px-3">
                <h1 className="text-2xl font-extrabold text-gray-600 lowercase first-letter:uppercase">
                  FEATURES
                </h1>

                <div className="pb-5">
                  <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                    <span><FaCheck className='text-green-600 mr-2 text-sm' /></span> Validité : <span className="font-bold">07 jours </span>
                  </div>
                  <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                    <span><FaCheck className='text-green-600 mr-2 text-sm' /></span> Test d’entrainement : <span className="font-bold">01</span>
                  </div>
                  <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                    <span><FaCheck className='text-green-600 mr-2 text-sm' /></span> Nombre d’essai : <span className="font-bold">illimité</span>
                  </div>
                  <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                    <span><FaCheck className='text-green-600 mr-2 text-sm' /></span> Récap. en fin de test :{" "}
                    <span className="font-bold">Oui</span>
                  </div>
                  <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                    <span><FaCheck className='text-green-600 mr-2 text-sm' /></span> Explication réponse : <span className="font-bold">Oui</span>
                  </div>
                  <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                    <span><FaCheck className='text-green-600 mr-2 text-sm' /></span> Vérification réponse :{" "}
                    <span className="font-bold">Oui</span>
                  </div>
                  <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                    <span><FaCheck className='text-green-600 mr-2 text-sm' /></span> Corrigé : <span className="font-bold">Oui</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-primary rounded-md p-4 bg-white">
              <header className="space-y-6 pb-10 border-b border-primary">
                <div className="text-center">
                  <h1 className="text-3xl text-secondary">
                    PLAN MENSUEL
                  </h1>
                  <span className="text-sm font-light">
                    30 jours de préparation
                  </span>
                </div>

                <div className="flex flex-col space-y-3 justify-center items-center">
                  <div className="flex justify-center items-center space-x-1 text-base">
                    <span className='line-through'>$99</span>
                    <span className="inline-block px-4 font-bold uppercase bg-indigo-200 text-indigo-600 py-1 rounded-full">
                      save 80%
                    </span>
                  </div>
                  <span className="text-secondary text-2xl flex justify-center items-end">
                    <span></span>
                    <span className="text-5xl font-bold">50</span>
                    <span>$ USD</span>
                  </span>
                </div>

                <div className="text-center">
                  <button className="text-white px-4 font-bold bg-tertiary rounded-md py-3 w-[80%] mx-auto block">
                    Add to cart
                  </button>
                  <span className="text-sm font-light">
                    $3.99 /mo when you renew
                  </span>
                </div>
              </header>
              <div className="pt-5 px-3">
                <h1 className="text-2xl font-extrabold text-gray-600 lowercase first-letter:uppercase">
                  FEATURES
                </h1>

                <div className="pb-5">
                  <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                    <span><FaCheck className='text-green-600 mr-2 text-sm' /></span> Validité : <span className="font-bold">07 jours </span>
                  </div>
                  <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                    <span><FaCheck className='text-green-600 mr-2 text-sm' /></span> Test d’entrainement : <span className="font-bold">01</span>
                  </div>
                  <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                    <span><FaCheck className='text-green-600 mr-2 text-sm' /></span> Nombre d’essai : <span className="font-bold">illimité</span>
                  </div>
                  <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                    <span><FaCheck className='text-green-600 mr-2 text-sm' /></span> Récap. en fin de test :{" "}
                    <span className="font-bold">Oui</span>
                  </div>
                  <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                    <span><FaCheck className='text-green-600 mr-2 text-sm' /></span> Explication réponse : <span className="font-bold">Oui</span>
                  </div>
                  <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                    <span><FaCheck className='text-green-600 mr-2 text-sm' /></span> Vérification réponse :{" "}
                    <span className="font-bold">Oui</span>
                  </div>
                  <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                    <span><FaCheck className='text-green-600 mr-2 text-sm' /></span> Corrigé : <span className="font-bold">Oui</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-primary rounded-md p-4 bg-white">
              <header className="space-y-6 pb-10 border-b border-primary">
                <div className="text-center">
                  <h1 className="text-3xl text-secondary">
                  PLAN TRIMENSUEL
                  </h1>
                  <span className="text-sm font-light">
                  90 jours de préparation
                  </span>
                </div>

                <div className="flex flex-col space-y-3 justify-center items-center">
                  <div className="flex justify-center items-center space-x-1 text-base">
                    <span className="inline-block px-4 font-bold text-sm bg-green-200 text-green-600 py-1 rounded-full">
                      Offert aux étudiants ADAA CERTI
                    </span>
                  </div>
                  <span className="text-secondary text-2xl flex justify-center items-end">
                    <span></span>
                    <span className="text-5xl font-bold">135</span>
                    <span>$ USD</span>
                  </span>
                </div>

                <div className="text-center">
                  <button className="text-white px-4 font-bold bg-primary rounded-md py-3 w-[80%] mx-auto block">
                    Add to cart
                  </button>
                  <span className="text-sm font-light">
                    $3.99 /mo when you renew
                  </span>
                </div>
              </header>
              <div className="pt-5 px-3">
                <h1 className="text-2xl font-extrabold text-gray-600 lowercase first-letter:uppercase">
                  FEATURES
                </h1>

                <div className="pb-5">
                  <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                    <span><FaCheck className='text-green-600 mr-2 text-sm' /></span> Validité : <span className="font-bold">07 jours </span>
                  </div>
                  <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                    <span><FaCheck className='text-green-600 mr-2 text-sm' /></span> Test d’entrainement : <span className="font-bold">01</span>
                  </div>
                  <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                    <span><FaCheck className='text-green-600 mr-2 text-sm' /></span> Nombre d’essai : <span className="font-bold">illimité</span>
                  </div>
                  <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                    <span><FaCheck className='text-green-600 mr-2 text-sm' /></span> Récap. en fin de test :{" "}
                    <span className="font-bold">Oui</span>
                  </div>
                  <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                    <span><FaCheck className='text-green-600 mr-2 text-sm' /></span> Explication réponse : <span className="font-bold">Oui</span>
                  </div>
                  <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                    <span><FaCheck className='text-green-600 mr-2 text-sm' /></span> Vérification réponse :{" "}
                    <span className="font-bold">Oui</span>
                  </div>
                  <div className="flex items-center space-x-2 py-2 border-b border-dashed">
                    <span><FaCheck className='text-green-600 mr-2 text-sm' /></span> Corrigé : <span className="font-bold">Oui</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="container mx-auto pt-20 pb-10 px-3 lg:px-0">
      <NewLetter />
      </div>
    </MainLayout>
  );
};

export default Home;
