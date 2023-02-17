import React, { ReactNode, FC } from "react";
import { GoChevronUp } from "react-icons/go";
import Footer from "./Footer";
import Header from "./Header";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className=" min-h-screen relative overflow-hidden">
      <Header />

      {children}

      <span id="whatsapp-btn" className="fixed w-14 z-20 bottom-2 md:bottom-5 left-3 md:left-8">
        <a
          href="https://wa.me/message/I2Z5CTNEQFSKB1"
          target="_blanck"
        >
          <img
            src="https://adaalearning.com/images/icons/whatsapp.svg"
            alt=""
          />
        </a>
      </span>
      <span className="fixed z-20 bottom-4 md:bottom-10 right-4 md:right-8 bg-tertiary text-white p-2.5 rounded-full">
        <GoChevronUp />
      </span>
      <Footer />
    </div>
  );
};

export default MainLayout;
