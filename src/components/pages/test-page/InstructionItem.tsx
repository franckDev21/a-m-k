import React, { FC } from "react";
import { GiCheckMark } from "react-icons/gi";

const InstructionItem: FC<{ className?: string; label: string }> = ({
  className = "",
  label,
}) => {
  return (
    <div
      className={`${className}  flex justify-start items-start text-lg font-light `}
    >
      <span className="w-8">
        <GiCheckMark className="mt-1 text-primary" />
      </span>
      <span className="w-[calc(100%-20px)]">{label}</span>
    </div>
  );
};

export default InstructionItem;
