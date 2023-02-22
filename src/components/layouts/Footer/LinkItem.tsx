import React, { FC, ReactNode } from "react";

const LinkItem: FC<{ className?: string, label: ReactNode }> = ({ className = '', label }) => {
  return (
    <li className={`${className}`}>
      <div
        className="text-body-color cursor-pointer space-x-1 inline-flex items-start hover:text-primary mb-2 text-base leading-loose"
      >
        <span className="text-2xl">-</span>
        <span>{label}</span>
      </div>
    </li>
  );
};

export default LinkItem;
