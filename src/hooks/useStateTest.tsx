import { useContext } from "react";
import StateTestContext from "../context/StateTestContext";
import { StateType } from "../types";

const useStateTest = () => {
  const { state, fullScreen, toggleShowAllScreen, setState } = useContext(StateTestContext);

  const updateState = (state: StateType) => {
    setState(state)
  };

  const toggleShow = () => {
    toggleShowAllScreen()
  };

  return {
    state,
    fullScreen,
    updateState,
    toggleShow
  };
};

export default useStateTest;
