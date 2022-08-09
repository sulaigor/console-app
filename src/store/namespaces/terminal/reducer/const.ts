import { ITerminalReducerState } from './types';

export const DefaultValues = {
  INPUT_VALUE: '',
  HISTORY_INDEX: 0,
  TERMINAL_ROWS: [],
  TERMINAL_HISTORY: [],
};

export const initialState: ITerminalReducerState = {
  inputValue: DefaultValues.INPUT_VALUE,
  cachedInputValue: DefaultValues.INPUT_VALUE,
  terminalRows: DefaultValues.TERMINAL_ROWS,
  terminalHistory: DefaultValues.TERMINAL_HISTORY,
  historyIndex: DefaultValues.HISTORY_INDEX,
};
