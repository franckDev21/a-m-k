import React, { createContext, FC, ReactNode, useState } from "react";
import { typeOffre } from "../models/Offre";
import { TypeOffreContextProps } from "../types";

const TypeOffreContext = createContext<TypeOffreContextProps>({
  type: 'PMP',
  setType: () => {},
});

export const TypeOffreProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [type, setType] = useState<typeOffre>('PMP');

  const contextValue: TypeOffreContextProps = {
    type,
    setType: (type) => {
      setType(type);
    },
  };

  return (
    <TypeOffreContext.Provider value={contextValue}>{children}</TypeOffreContext.Provider>
  );
};

export default TypeOffreContext;
