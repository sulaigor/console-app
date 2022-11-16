import { IStoreState } from '../types';

export const selectInputValue = (store: IStoreState) => store.terminal.inputValue;
export const selectHistoryIndex = (store: IStoreState) => store.terminal.historyIndex;
export const selectTerminalHistory = (store: IStoreState) => store.terminal.terminalHistory;
export const selectTerminalRows = (store: IStoreState) => store.terminal.terminalRows;
