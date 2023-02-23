import React, { FC } from "react";
import { MdTimer } from "react-icons/md";

interface TimerCardProps {
  className?: string;
}

const TimerCard: FC<TimerCardProps> = ({ className = "" }) => {
  return (
    <div
      className={`${className} flex items-center py-2 px-10 w-[99%] rounded-md mx-auto bg-yellow-400 text-gray-500 justify-between`}
    >
      <h4 className="text-white font-bold">Question 25 sur 25</h4>
      <div className="space-x-2 flex items-center">
        <span className="bg-white px-3 py-2 space-x-2 uppercase inline-flex items-center">
          <MdTimer className="text-gray-800 text-lg" />
          <span>18:49</span>
        </span>
        <span className="bg-white px-3 py-2 uppercase inline-block">
          terminer le test
        </span>
      </div>
    </div>
  );
};

export default TimerCard;
