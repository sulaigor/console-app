import React, { createContext, useContext, useReducer } from 'react';
import { IChildrenProps as IProps } from 'types/props';
import { TerminalRow } from 'models/TerminalRow';
import { isClearCommand } from 'utils/commands';
import terminalReducer, { initialState } from './terminalReducer';
import {
  addTerminalRowAction,
  clearTerminalAction,
  resetInputValueAction,
  setInputValueAction,
} from './terminalReducer/actions';
import { TerminalContextType } from './types';

const Context = createContext<TerminalContextType>({
  ...initialState,
  setInputValue: () => null,
  addTerminalRow: () => null,
});

const TerminalContext = ({ children }: IProps) => {
  const [reducerState, dispatch] = useReducer(terminalReducer, initialState);

  const setInputValue = (newValue: string) => dispatch(setInputValueAction(newValue));
  const resetInputValue = () => dispatch(resetInputValueAction());

  const addTerminalRow = () => {
    const { inputValue } = reducerState;

    if (isClearCommand(inputValue)) dispatch(clearTerminalAction());
    else {
      const terminalRow = new TerminalRow(inputValue);
      dispatch(addTerminalRowAction(terminalRow));
    }
    resetInputValue();
  };

  const contextValue: TerminalContextType = {
    ...reducerState,
    setInputValue,
    addTerminalRow,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default TerminalContext;
export const useTerminalContext = () => useContext(Context);
