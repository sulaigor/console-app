import React, { createContext, useContext, useReducer } from 'react';
import { IChildrenProps as IProps } from 'types/props';
import terminalReducer, { initialState } from './terminalReducer';
import { setInputValueAction } from './terminalReducer/actions';
import { TerminalContextType } from './types';

const Context = createContext<TerminalContextType>({
  ...initialState,
  setInputValue: () => null,
});

const TerminalContext = ({ children }: IProps) => {
  const [reducerState, dispatch] = useReducer(terminalReducer, initialState);

  const setInputValue = (newValue: string) => dispatch(setInputValueAction(newValue));

  const contextValue: TerminalContextType = {
    ...reducerState,
    setInputValue,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default TerminalContext;
export const useTerminalContext = () => useContext(Context);
