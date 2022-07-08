import { ITerminalReducerState } from './types';

export const TERMINAL_REDUCER_NAME = 'terminal';

export const DEFAULT_INPUT_VALUE = '';
export const DEFAULT_HISTORY_INDEX = 0;
export const DEFAULT_TERMINAL_ROWS = [];
export const DEFAULT_TERMINAL_HISTORY = [];

export const terminalInitialState: ITerminalReducerState = {
  inputValue: DEFAULT_INPUT_VALUE,
  cachedInputValue: DEFAULT_INPUT_VALUE,
  terminalRows: DEFAULT_TERMINAL_ROWS,
  terminalHistory: DEFAULT_TERMINAL_HISTORY,
  historyIndex: DEFAULT_HISTORY_INDEX,
};
