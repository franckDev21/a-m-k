import React from "react";
import Button from "../../uikit/Button";
import { GiCutDiamond } from 'react-icons/gi'

const Banner = () => {
  return (
    <div className='h-96 relative bg-slate-400 flex justify-center items-center flex-col'>
      <img src='/assets/banner.jpg' className='absolute left-0 top-0 w-full h-full object-cover' />
      <div className='bg-white opacity-80 text-primary p-3 relative z-20 max-w-2xl text-xl text-center'>
        <h1 className='font-bold'>VOTRE SIMULATEUR DE TEST D’EXAMENS </h1>
        <p>POUR PASSER AVEC SUCCES LES CERTIFICATIONS INTERNATIONALES </p>
        <h1 className='font-bold'>(PMP®, SCRUM MASTER – PSM1 et ITIL4)</h1>
      </div>
      <div className='flex items-center space-x-6 relative z-20 mt-10'>
        <Button icon={<GiCutDiamond />} rounded label='Démo gratuite' className='bg-primary font-bold' />
        <Button rounded label="S'inscrire a une session" className='bg-tertiary font-bold' />
      </div>
    </div>
  );
};

export default Banner;
