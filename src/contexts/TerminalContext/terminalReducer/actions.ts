import { IReducerAction } from 'types/reducer';
import { ITerminalRow } from 'models/TerminalRow';
import { ADD_TERMINAL_ROW, CLEAR_TERMINAL, RESET_INPUT_VALUE, SET_INPUT_VALUE } from './actionTypes';

export const setInputValueAction = (newValue: string): IReducerAction => ({
  type: SET_INPUT_VALUE,
  payload: { newValue },
});

export const resetInputValueAction = (): IReducerAction => ({
  type: RESET_INPUT_VALUE,
});

export const addTerminalRowAction = (newRow: ITerminalRow): IReducerAction => ({
  type: ADD_TERMINAL_ROW,
  payload: { newRow },
});

export const clearTerminalAction = (): IReducerAction => ({
  type: CLEAR_TERMINAL,
});
