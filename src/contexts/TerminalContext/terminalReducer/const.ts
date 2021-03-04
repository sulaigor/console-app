import { IReducerState } from './types';

export const DEFAULT_INPUT_VALUE = '';
export const DEFAULT_TERMINAL_ROWS = [];

export const initialState: IReducerState = {
  inputValue: DEFAULT_INPUT_VALUE,
  terminalRows: DEFAULT_TERMINAL_ROWS,
};
