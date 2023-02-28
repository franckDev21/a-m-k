import React, { FC } from "react";
import useQuestions from "../../../hooks/useQuestions";
import useResponse from "../../../hooks/useResponse";

interface QuestionItemProps {
  className?: string;
  active?: boolean;
  label: string;
  onClick?: () => any;
  success?:boolean;
  error?:boolean;
  type?: 'SQUARE'|'CIRCLE'
}

const QuestionItem: FC<QuestionItemProps> = ({
  className = "",
  active = false,
  label,
  onClick = () => {},
  success=false,
  error=false,
  type = 'CIRCLE'
}) => {

  const { updateCurrentResponse } = useQuestions();
  const { updateResponse } = useResponse()

  const handleClick = () => {
    updateCurrentResponse(label);
    onClick();
    updateResponse(label)
  };

  return (
    <div
      onClick={handleClick}
      className={`py-3 px-4 w-[99%] ${(error || success) ? 'pointer-events-none select-none cursor-none':'cursor-pointer'} ${error && 'bg-red-100'} ${success && 'bg-green-100'} font-bold border border-secondary flex items-center space-x-2 ${className}`}
    >
      <span
        className={`${
          active && "bg-secondary"
        } w-4 h-4 border-2 border-secondary ${type === 'CIRCLE' ? 'rounded-full':''}`}
      ></span>
      <span>{label}</span>
      {error && <span className="text-sm font-bold text-red-700">(Incorrect)</span> }
      {success && <span className="text-sm font-bold text-green-700">(Incorrect)</span> }
    </div>
  );
};

export default QuestionItem;
