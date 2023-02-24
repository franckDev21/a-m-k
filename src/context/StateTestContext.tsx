import React, { createContext, FC, ReactNode, useState } from "react";
import { StateTestProps, StateType } from "../types";

const StateTestContext = createContext<StateTestProps>({
  state: "OFF",
  fullScreen: false,
  setState: (value) => {},
  toggleShowAllScreen: () => {},
});

export const StateTestProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<StateType>("OFF");
  const [fullScreen, setFullScreen] = useState(false);

  const contextValue: StateTestProps = {
    state,
    fullScreen,
    toggleShowAllScreen: () => {
      setFullScreen(!fullScreen);
    },
    setState: (value) => {
      setState(value);
    },
  };

  return (
    <StateTestContext.Provider value={contextValue}>
      {children}
    </StateTestContext.Provider>
  );
};

export default StateTestContext;
