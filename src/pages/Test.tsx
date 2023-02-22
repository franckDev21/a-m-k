import React from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import TestContent from "../components/pages/test-page/TestContent";
import TestNavigation from "../components/pages/test-page/TestNavigation";

const Test = () => {
  const { type } = useParams();

  return (
    <MainLayout>
      <h1 className=" text-center font-bold py-4 text-2xl text-primary bg-gray-100">
        PMP TEST SIMULATOR ®
      </h1>
      <div className="container mx-auto py-5 flex ">
        {/* test content */}
        <TestContent />
        {/* test navigation */}
        <TestNavigation />
      </div>
    </MainLayout>
  );
};

export default Test;
