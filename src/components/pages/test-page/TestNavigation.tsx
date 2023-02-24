import React, { FC, useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import useStateTest from "../../../hooks/useStateTest";
import Test from "../../../models/Test";
import { getAllTest } from "../../../utils/helper";
import { tests } from "../../../utils/testData";
import Accordeon from "./Accordeon";
import TestItem from "./TestItem";

const TestNavigation: FC<{ className?: string }> = ({ className = "" }) => {
  const { toggleShow, fullScreen } = useStateTest();
  const [testTrainings,setTestTrainings] = useState<Test[]>([])
  const [testExams,setTestExams] = useState<Test[]>([])

  useEffect(()=>{
    setTestTrainings(getAllTest('TRAINING',tests))
    setTestExams(getAllTest('EXAM',tests));
  },[])

  return (
    <div
      className={`${
        fullScreen && "hidden"
      } overflow-y-auto w-[350px] flex-none bg-gray-50 border ml-2 rounded-2xl py-5 px-4 ${className}`}
    >
      <header className="space-x-2 pb-4 border-b justify-between items-center flex text-xl mb-6">
        <h1 className="font-bold">Contenu du PMP TEST</h1>
        <AiOutlinePlus
          onClick={toggleShow}
          className="cursor-pointer rotate-45 text-2xl"
        />
      </header>

      {/* accordeon */}
      <Accordeon className="mb-4" title="Tests d’entrainement">
        {testTrainings.map((test,key) => (
          <TestItem key={key} active={key === 0} label={test.label} />
        ))}
      </Accordeon>

      <Accordeon title="Tests d’examens">
        {testExams.map((test,key) => (
          <TestItem key={key} active={key === 0} label={test.label} />
        ))}
      </Accordeon>
    </div>
  );
};

export default TestNavigation;
