import React, { FC } from "react";

const TestItem: FC<{ className?: string; label: string; active?: boolean }> = ({
  className = "",
  label,
  active = false,
}) => {
  return (
    <div className={`${className} flex cursor-pointer text-sm justify-start space-x-2 font-semibold items-center`}>
      <span className={`w-4 h-4 border-2 ${active && 'bg-secondary'} border-secondary rounded-full `}></span>
      <span className="w-[calc(100%-18px)] text-gray-600">{label}</span>
    </div>
  );
};

export default TestItem;
