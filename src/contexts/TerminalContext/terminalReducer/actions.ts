import { IReducerAction } from 'types/reducer';
import { ITerminalRow } from 'models/TerminalRow';
import {
  ADD_TERMINAL_HISTORY,
  ADD_TERMINAL_ROW,
  CLEAR_TERMINAL,
  DECREASE_HISTORY_INDEX,
  INCREASE_HISTORY_INDEX,
  RESET_INPUT_VALUE,
  SET_INPUT_VALUE,
  SET_TERMINAL_HISTORY,
} from './actionTypes';

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

export const setTerminalHistoryAction = (newTerminalHistory: string[]): IReducerAction => ({
  type: SET_TERMINAL_HISTORY,
  payload: { newTerminalHistory },
});

export const addTerminalHistoryAction = (newItem: string): IReducerAction => ({
  type: ADD_TERMINAL_HISTORY,
  payload: { newItem },
});

export const increaseHistoryIndexAction = (): IReducerAction => ({
  type: INCREASE_HISTORY_INDEX,
});

export const decreaseHistoryIndexAction = (): IReducerAction => ({
  type: DECREASE_HISTORY_INDEX,
});
