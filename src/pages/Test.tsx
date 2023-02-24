import { useParams } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import TestContent from "../components/pages/test-page/TestContent";
import TestNavigation from "../components/pages/test-page/TestNavigation";
import { QuestionTestProvider } from "../context/QuestionTestContext";
import { StateTestProvider } from "../context/StateTestContext";

const Test = () => {
  const { type } = useParams();
  return (
    <MainLayout>
      <StateTestProvider>
        <QuestionTestProvider>
          <h1 className=" text-center font-bold py-4 text-2xl text-primary bg-gray-100">
            {type} TEST SIMULATOR ®
          </h1>
          <div className="container mx-auto py-5 flex ">
            {/* test content */}
            <TestContent />
            {/* test navigation */}
            <TestNavigation />
          </div>
        </QuestionTestProvider>
      </StateTestProvider>
    </MainLayout>
  );
};

export default Test;
