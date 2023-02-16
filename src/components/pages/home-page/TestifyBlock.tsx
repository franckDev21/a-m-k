import React, { FC } from "react";

const TestifyBlock: FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <h1 className=" mx-auto text-center text-4xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r to-blue-400 from-primary text-gray-800">
      Nos étudiants témoignent
    </h1>
  );
};

export default TestifyBlock;
