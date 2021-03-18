import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { IChildrenProps as IProps } from 'types/props';
import { TerminalRow } from 'models/TerminalRow';
import { isClearCommand } from 'utils/commands';
import { dummyFunction } from 'utils/dummy';
import { setItem, loadItem } from 'utils/localStorage';
import terminalReducer, { initialState } from './terminalReducer';
import {
  addTerminalHistoryAction,
  addTerminalRowAction,
  clearTerminalAction,
  decreaseHistoryIndexAction,
  increaseHistoryIndexAction,
  resetInputValueAction,
  setInputValueAction,
  setTerminalHistoryAction,
} from './terminalReducer/actions';
import { TERMINAL_HISTORY_KEY } from './const';
import { TerminalContextType } from './types';

const Context = createContext<TerminalContextType>({
  ...initialState,
  setInputValue: dummyFunction,
  addTerminalRow: dummyFunction,
  clearTerminal: dummyFunction,
  increaseHistoryIndex: dummyFunction,
  decreaseHistoryIndex: dummyFunction,
});

const TerminalContext = ({ children }: IProps) => {
  const [reducerState, dispatch] = useReducer(terminalReducer, initialState);
  const { terminalHistory } = reducerState;

  useEffect(() => loadTerminalHistory(), []);
  useEffect(() => setItem(TERMINAL_HISTORY_KEY, JSON.stringify(terminalHistory)), [terminalHistory]);

  const setHistory = (newTerminalHistory: string[]) => dispatch(setTerminalHistoryAction(newTerminalHistory));
  const setInputValue = (newValue: string) => dispatch(setInputValueAction(newValue));
  const resetInputValue = () => dispatch(resetInputValueAction());
  const clearTerminal = () => dispatch(clearTerminalAction());
  const increaseHistoryIndex = () => dispatch(increaseHistoryIndexAction());
  const decreaseHistoryIndex = () => dispatch(decreaseHistoryIndexAction());

  const addTerminalHistory = (newHistoryItem: string) => {
    if (newHistoryItem) {
      dispatch(addTerminalHistoryAction(newHistoryItem));
    }
  };

  const addTerminalRow = () => {
    const { inputValue } = reducerState;

    if (isClearCommand(inputValue)) clearTerminal();
    else {
      const terminalRow = new TerminalRow(inputValue);
      const { command } = terminalRow;
      addTerminalHistory(command);
      dispatch(addTerminalRowAction(terminalRow));
    }
    resetInputValue();
  };

  const loadTerminalHistory = () => {
    const historySaveCallback = (savedTerminalHistory: string) =>
      setHistory(JSON.parse(savedTerminalHistory));

    loadItem(TERMINAL_HISTORY_KEY, historySaveCallback);
  };

  const contextValue: TerminalContextType = {
    ...reducerState,
    setInputValue,
    addTerminalRow,
    clearTerminal,
    increaseHistoryIndex,
    decreaseHistoryIndex,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default TerminalContext;
export const useTerminalContext = () => useContext(Context);
