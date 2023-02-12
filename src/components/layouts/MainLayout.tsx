import React, { ReactNode, FC } from "react";
import { GoChevronUp } from 'react-icons/go'
import Footer from "./Footer";
import Header from "./Header";

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return <div className=' min-h-screen relative'>
    <Header />
      { children }

      <span className='fixed bottom-10 right-8 bg-tertiary text-white p-2.5 rounded-full'>
        <GoChevronUp />
      </span>
    <Footer />
  </div>;
};

export default MainLayout;
