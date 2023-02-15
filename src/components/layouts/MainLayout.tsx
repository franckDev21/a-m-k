import React, { ReactNode, FC } from "react";
import { GoChevronUp } from "react-icons/go";
import Footer from "./Footer";
import Header from "./Header";
import HeaderPrimary from "./Header/HeaderPrimary";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className=" min-h-screen relative overflow-hidden">
      <HeaderPrimary />
      {children}

      <span className="fixed bottom-4 md:bottom-10 right-4 md:right-8 bg-tertiary text-white p-2.5 rounded-full">
        <GoChevronUp />
      </span>
      <Footer />
    </div>
  );
};

export default MainLayout;
