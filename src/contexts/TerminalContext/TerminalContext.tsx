import React, { createContext, useContext, useState } from 'react';
import { IChildrenProps as IProps } from 'types/props';
import { INPUT_DEFAULT_VALUE } from './const';
import { TerminalContextType } from './types';

const Context = createContext<TerminalContextType>({
  inputValue: INPUT_DEFAULT_VALUE,
  setInputValue: () => null,
});

const TerminalContext = ({ children }: IProps) => {
  const [inputValue, setInputValue] = useState(INPUT_DEFAULT_VALUE);

  const contextValue: TerminalContextType = {
    inputValue,
    setInputValue,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default TerminalContext;
export const useTerminalContext = () => useContext(Context);
