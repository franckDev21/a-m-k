import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import Banner from "../components/pages/home-page/Banner";
import NewLetter from "../components/layouts/NewLetter";
import TestifyBlock from "../components/pages/home-page/TestifyBlock";
import CertificationBlock from "../components/pages/home-page/CertificationBlock";
import VideoPresentation from "../components/pages/home-page/VideoPresentation";
import LogoBlock from "../components/pages/home-page/LogoBlock";
import FAQBlock from "../components/pages/home-page/FAQBlock";
import OffersBlock from "../components/pages/home-page/OffersBlock";

const Home = () => {
  return (
    <MainLayout>
      <Banner />

      <VideoPresentation />

      <CertificationBlock />

      <TestifyBlock />

      <LogoBlock />

      <FAQBlock />

      <OffersBlock />

      <NewLetter />
    </MainLayout>
  );
};

export default Home;
