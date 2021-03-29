import React, { createContext, useCallback, useContext, useEffect, useReducer } from 'react';
import { IChildrenProps as IProps } from 'types/props';
import { TerminalRow } from 'models/TerminalRow';
import { isClearCommand } from 'utils/commands';
import { dummyFunction } from 'utils/dummy';
import { setItem, loadItem } from 'utils/localStorage';
import terminalReducer, { initialState } from './terminalReducer';
import { DEFAULT_HISTORY_INDEX } from './terminalReducer/const';
import {
  addTerminalRowAction,
  clearTerminalAction,
  setHistoryIndexAction,
  resetInputValueAction,
  setInputValueAction,
  setTerminalHistoryAction,
  addTerminalHistoryItem,
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
  const { historyIndex, terminalHistory } = reducerState;

  useEffect(() => loadTerminalHistory(), []);
  useEffect(() => setItem(TERMINAL_HISTORY_KEY, JSON.stringify(terminalHistory)), [terminalHistory]);

  const setHistory = (newTerminalHistory: string[]) => dispatch(setTerminalHistoryAction(newTerminalHistory));
  const setInputValue = (newValue: string) => dispatch(setInputValueAction(newValue));
  const clearTerminal = () => dispatch(clearTerminalAction());
  const resetInputValue = () => dispatch(resetInputValueAction());

  const setHistoryIndex = (newIndex: number) => {
    if (newIndex !== historyIndex) {
      dispatch(setHistoryIndexAction(newIndex));
    }
  };

  const increaseHistoryIndex = useCallback(
    () => setHistoryIndex(Math.min(historyIndex + 1, terminalHistory.length)),
    [historyIndex, terminalHistory]
  );

  const decreaseHistoryIndex = useCallback(
    () => setHistoryIndex(Math.max(historyIndex - 1, DEFAULT_HISTORY_INDEX)),
    [historyIndex]
  );

  const addTerminalRow = () => {
    const { inputValue } = reducerState;

    if (isClearCommand(inputValue)) {
      clearTerminal();
    } else {
      const terminalRow = new TerminalRow(inputValue);
      dispatch(addTerminalRowAction(terminalRow));

      const { input } = terminalRow;
      if (input) dispatch(addTerminalHistoryItem(input));
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
