import { IReducerAction } from 'types/reducer';
import { ITerminalRow } from 'types/terminal';
import { ADD_TERMINAL_ROW, CLEAR_TEMINAL_ROWS, RESET_INPUT_VALUE, SET_INPUT_VALUE } from './actionTypes';

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

export const clearTerminalRowsAction = (): IReducerAction => ({
  type: CLEAR_TEMINAL_ROWS,
});
