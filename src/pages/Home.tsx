import React from "react";
import ReactPlayer from "react-player";
import MainLayout from "../components/layouts/MainLayout";
import Banner from "../components/pages/home-page/Banner";
import CardCertif from "../components/pages/home-page/CardCertif";
import { listeCertifications } from "../utils/testData";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import Accordeons from "../components/pages/home-page/Accordeons";

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
        <div className="container mx-auto px-3 xl:px-0 grid md:grid-cols-2 gap-4 lg:grid-cols-3">
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
              <img src="/assets/student1-removebg-preview.png" className='absolute w-full h-auto object-cover' />
            </div>
            <div>
              <p className='text-lg lg:text-xl xl:text-2xl font-light'>
                « La formation Tech Lead d'Adaa est réellement en
                accord avec le monde de l'entreprise. Il était aussi important
                que la formation soit au niveau Bac +5, car j'avais déjà un Bac
                +3 : je ne suis pas déçu du tout, car l’apprentissage est
                progressif avec l’aide des mentors. »
              </p>
              <div className="mt-10">
                <p className="bg-primary text-white max-w-max px-2">Product Manager, Orange Cameroun</p>
                <h1 className="text-2xl font-extrabold">Danielle KOTTO</h1>
                <h1 className='text-tertiary font-bold bg-white max-w-max px-2'>Certified PMP</h1>
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
        <div className="pt-14 grid grid-cols-5 gap-5">
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
        <div className="container mx-auto pb-10 pt-16">
          <h1 className="w-[59%] mx-auto text-center text-3xl text-primary font-bold lowercase first-letter:uppercase">
            QUESTIONS LES PLUS FREQUENTES{" "}
            <span className="uppercase">(FAQ)</span>
          </h1>
          <Accordeons className="mt-10" />
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="container mx-auto pb-10 pt-16">
          <h1 className=" text-3xl text-center text-primary mb-10 font-bold lowercase first-letter:uppercase">
            CHOISSISEZ L’OFFRE QUI CORRESPOND A VOTRE BESOIN
          </h1>

          <div className="space-x-1 flex pb-2 w-[70%] mx-auto">
            <div className="w-1/3 text-center font-bold text-xl bg-secondaryTwo cursor-pointer text-white px-4 py-2">
              OFFRES PMP
            </div>
            <div className="w-1/3 text-center font-bold text-xl bg-gray-400 cursor-pointer text-white px-4 py-2">
              OFFRES PSM 1
            </div>
            <div className="w-1/3 text-center font-bold text-xl bg-gray-400 cursor-pointer text-white px-4 py-2">
              OFFRES ITIL 4
            </div>
          </div>

          <div className="flex space-x-14 justify-between">
            <div className="w-80 bg-white shadow-md">
              <div className="relative bg-primary bg-opacity-90">
                <header
                  style={{
                    clipPath: "polygon(100% 0, 100% 76%, 51% 100%, 0 76%, 0 0)",
                  }}
                  className="bg-tertiary pt-4 pb-8 absolute top-0 w-full left-0 text-white space-y-4 flex items-center justify-center flex-col"
                >
                  <h1 className="font-extrabold text-2xl">DEMO</h1>
                  <span>Testez le PMP® Exam Simulator</span>
                </header>
                <div className="pt-32 flex justify-center items-center flex-col">
                  <p className="font-bold text-2xl py-8 text-white">GRATUIT</p>
                  <button className="px-4 py-3 mb-4 bg-secondary rounded-md font-bold text-white">
                    Profitez d’une démo
                  </button>
                </div>
              </div>
              <div>
                <h1 className="space-x-2 text-xl flex items-center px-4 py-2 border-b mb-2">
                  <img src="/assets/bar1.png" />
                  <span className="pt-1">FEATURES</span>
                </h1>

                <div className="pb-5">
                  <div className="px-4 py-2 border-b border-dashed">
                    Validité : <span className="font-bold">07 jours </span>
                  </div>
                  <div className="px-4 py-2 border-b border-dashed">
                    Test d’entrainement : <span className="font-bold">01</span>
                  </div>
                  <div className="px-4 py-2 border-b border-dashed">
                    Nombre d’essai : <span className="font-bold">illimité</span>
                  </div>
                  <div className="px-4 py-2 border-b border-dashed">
                    Récap. en fin de test :{" "}
                    <span className="font-bold">Oui</span>
                  </div>
                  <div className="px-4 py-2 border-b border-dashed">
                    Explication réponse : <span className="font-bold">Oui</span>
                  </div>
                  <div className="px-4 py-2 border-b border-dashed">
                    Vérification réponse :{" "}
                    <span className="font-bold">Oui</span>
                  </div>
                  <div className="px-4 py-2 border-b border-dashed">
                    Corrigé : <span className="font-bold">Oui</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-80 bg-white shadow-md">
              <div className="relative bg-primary bg-opacity-90">
                <header
                  style={{
                    clipPath: "polygon(100% 0, 100% 76%, 51% 100%, 0 76%, 0 0)",
                  }}
                  className="bg-secondary pt-4 pb-8 absolute top-0 w-full left-0 text-white space-y-4 flex items-center justify-center flex-col"
                >
                  <h1 className="font-extrabold text-2xl">PLAN MENSUEL</h1>
                  <span>30 jours de préparation</span>
                </header>
                <div className="pt-32 flex justify-center items-center flex-col">
                  <p className="font-bold text-2xl py-8 text-white">50 $USD</p>
                  <button className="px-4 py-3 mb-4 bg-tertiary rounded-md font-bold text-white">
                    Commander
                  </button>
                </div>
              </div>
              <div>
                <h1 className="space-x-2 text-xl flex items-center px-4 py-2 border-b mb-2">
                  <img src="/assets/bar2.png" />
                  <span className="pt-1">FEATURES</span>
                </h1>

                <div className="pb-5">
                  <div className="px-4 py-2 border-b border-dashed">
                    Validité : <span className="font-bold">07 jours </span>
                  </div>
                  <div className="px-4 py-2 border-b border-dashed">
                    Test d’entrainement : <span className="font-bold">01</span>
                  </div>
                  <div className="px-4 py-2 border-b border-dashed">
                    Nombre d’essai : <span className="font-bold">illimité</span>
                  </div>
                  <div className="px-4 py-2 border-b border-dashed">
                    Récap. en fin de test :{" "}
                    <span className="font-bold">Oui</span>
                  </div>
                  <div className="px-4 py-2 border-b border-dashed">
                    Explication réponse : <span className="font-bold">Oui</span>
                  </div>
                  <div className="px-4 py-2 border-b border-dashed">
                    Vérification réponse :{" "}
                    <span className="font-bold">Oui</span>
                  </div>
                  <div className="px-4 py-2 border-b border-dashed">
                    Corrigé : <span className="font-bold">Oui</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-80 bg-white shadow-md">
              <div className="relative bg-primary bg-opacity-90">
                <header
                  style={{
                    clipPath: "polygon(100% 0, 100% 76%, 51% 100%, 0 76%, 0 0)",
                  }}
                  className="bg-tertiary pt-4 pb-8 absolute top-0 w-full left-0 text-white space-y-4 flex items-center justify-center flex-col"
                >
                  <h1 className="font-extrabold text-2xl">PLAN TRIMENSUEL</h1>
                  <span>90 jours de préparation</span>
                </header>
                <div className="pt-32 flex justify-center items-center flex-col">
                  <span className="px-3 py-2 bg-green-600 text-white rounded-full text-xs">
                    Offert aux étudiants ADAA CERTIF
                  </span>
                  <p className="font-bold text-2xl py-8 text-white">135 $USD</p>
                  <button className="px-4 py-3 mb-4 bg-secondary rounded-md font-bold text-white">
                    Commander
                  </button>
                </div>
              </div>
              <div>
                <h1 className="space-x-2 text-xl flex items-center px-4 py-2 border-b mb-2">
                  <img src="/assets/bar1.png" />
                  <span className="pt-1">FEATURES</span>
                </h1>

                <div className="pb-5">
                  <div className="px-4 py-2 border-b border-dashed">
                    Validité : <span className="font-bold">07 jours </span>
                  </div>
                  <div className="px-4 py-2 border-b border-dashed">
                    Test d’entrainement : <span className="font-bold">01</span>
                  </div>
                  <div className="px-4 py-2 border-b border-dashed">
                    Nombre d’essai : <span className="font-bold">illimité</span>
                  </div>
                  <div className="px-4 py-2 border-b border-dashed">
                    Récap. en fin de test :{" "}
                    <span className="font-bold">Oui</span>
                  </div>
                  <div className="px-4 py-2 border-b border-dashed">
                    Explication réponse : <span className="font-bold">Oui</span>
                  </div>
                  <div className="px-4 py-2 border-b border-dashed">
                    Vérification réponse :{" "}
                    <span className="font-bold">Oui</span>
                  </div>
                  <div className="px-4 py-2 border-b border-dashed">
                    Corrigé : <span className="font-bold">Oui</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
