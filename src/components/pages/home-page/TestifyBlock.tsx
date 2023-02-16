import React, { FC } from "react";


const TestifyBlock: FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div
      className={`${className} py-10 h-[900px] relative`}
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
              soit au niveau Bac +5, car j'avais déjà un Bac +3 : je ne suis pas
              déçu du tout, car l’apprentissage est progressif avec l’aide des
              mentors. »
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
          <div className="mt-6 space-x-5 absolute -bottom-28 left-28 hidden lg:flex">
            <span className="w-4 h-4 rounded-full block bg-white cursor-pointer"></span>
            <span className="w-4 h-4 rounded-full block bg-white bg-opacity-60 cursor-pointer"></span>
            <span className="w-4 h-4 rounded-full block bg-white bg-opacity-60 cursor-pointer"></span>
          </div>
        </div>


      </div>
    </div>
  );
};

export default TestifyBlock;
