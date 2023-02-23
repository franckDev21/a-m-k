import React, { FC } from "react";
import { AiFillStar } from "react-icons/ai";
import TestBlock from "./TestBlock";

const QuestionsBlock: FC<{ className?: string }> = ({ className }) => {
  return (
    <TestBlock className="pt-5">
      <header className="space-y-2">
        <h1 className="flex items-center space-x-2 text-xl">
          <span><AiFillStar className="text-gray-300" /></span>
          <span>Question 1 :</span>
        </h1>
        {/* intitulé */}
        <p className="font-bold">The Product Backlog is ordered by:</p>
      </header>
      <div className="mt-5 space-y-4">
        <div className="py-3 px-4 w-[99%] cursor-pointer font-bold border border-secondary flex items-center space-x-2">
          <span className="w-4 h-4 border-2 bg-secondary border-secondary rounded-full"></span>
          <span>{` A) Size, where small items are at the top and large items are at the bottom`}</span>
        </div>

        <div className="py-3 px-4 w-[99%] cursor-pointer font-bold border border-secondary flex items-center space-x-2">
          <span className="w-4 h-4 border-2  border-secondary rounded-full"></span>
          <span>{` B) Risk, where safer items are at the top, and riskier items are at the bottom.`}</span>
        </div>

        <div className="py-3 px-4 w-[99%] cursor-pointer font-bold border border-secondary flex items-center space-x-2">
          <span className="w-4 h-4 border-2  border-secondary rounded-full"></span>
          <span>{`C) Least valuable items at the top to most valuable at the bottom.`}</span>
        </div>

        <div className="py-3 px-4 w-[99%] cursor-pointer font-bold border border-secondary flex items-center space-x-2">
          <span className="w-4 h-4 border-2  border-secondary rounded-full"></span>
          <span>{`D) Items are randomly arranged.`}</span>
        </div>

        <div className="py-3 px-4 w-[99%] cursor-pointer font-bold border border-secondary flex items-center space-x-2">
          <span className="w-4 h-4 border-2  border-secondary rounded-full"></span>
          <span>{`E) Whatever is deemed most appropriate by the Product Owner.`}</span>
        </div>

        
      </div>
    </TestBlock>
  );
};

export default QuestionsBlock;
