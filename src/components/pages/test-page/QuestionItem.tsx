import React, { FC } from "react";
import useQuestions from "../../../hooks/useQuestions";

interface QuestionItemProps {
  className?: string;
  active?: boolean;
  label: string;
}

const QuestionItem: FC<QuestionItemProps> = ({
  className = "",
  active = false,
  label
}) => {

  const { updateCurrentResponse } = useQuestions();

  const handleClick = () => updateCurrentResponse(label);

  return (
    <div onClick={handleClick} className={`py-3 px-4 w-[99%] cursor-pointer font-bold border border-secondary flex items-center space-x-2 ${className}`}>
      <span className={`${active && 'bg-secondary'} w-4 h-4 border-2 border-secondary rounded-full`}></span>
      <span>{label}</span>
    </div>
  );
};

export default QuestionItem;
