import React, { FC, ReactNode } from "react";

const TestBlock: FC<{ className?: string; children: ReactNode }> = ({
  className = "",
  children,
}) => {
  return <div className={`${className} overflow-x-hidden overflow-y-scroll scrollbar-cool h-[50vh]`}>{children}</div>;
};

export default TestBlock;
