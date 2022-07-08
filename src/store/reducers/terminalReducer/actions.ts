import { IReducerAction } from 'types/reducer';
import { ITerminalRow } from 'models/TerminalRow';
import { HistoryIndexType, InputValueType } from './types';
import {
  ADD_TERMINAL_HISTORY_ITEM,
  ADD_TERMINAL_ROW,
  CLEAR_TERMINAL,
  RESET_INPUT_VALUE,
  SET_HISTORY_INDEX,
  SET_INPUT_VALUE,
  SET_TERMINAL_HISTORY,
} from './actionTypes';

export const setInputValueAction = (newValue: InputValueType): IReducerAction => ({
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

export const addTerminalHistoryItem = (newHistoryItem: InputValueType): IReducerAction => ({
  type: ADD_TERMINAL_HISTORY_ITEM,
  payload: { newHistoryItem },
});

export const setTerminalHistoryAction = (newTerminalHistory: InputValueType[]): IReducerAction => ({
  type: SET_TERMINAL_HISTORY,
  payload: { newTerminalHistory },
});

export const setHistoryIndexAction = (newIndex: HistoryIndexType): IReducerAction => ({
  type: SET_HISTORY_INDEX,
  payload: { newIndex },
});
