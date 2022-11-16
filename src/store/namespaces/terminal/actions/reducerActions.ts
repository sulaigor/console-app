import { IReducerAction } from 'types/reducer';
import { ITerminalRow } from 'models/TerminalRow';
import { HistoryIndexType, InputValueType } from '../reducer/types';
import { ReducerActionTypes } from './actionTypes';

export const setInputValueAction = (newValue: InputValueType): IReducerAction => ({
  type: ReducerActionTypes.SET_INPUT_VALUE,
  payload: { newValue },
});

export const resetInputValueAction = (): IReducerAction => ({
  type: ReducerActionTypes.RESET_INPUT_VALUE,
});

export const addTerminalRowAction = (newRow: ITerminalRow): IReducerAction => ({
  type: ReducerActionTypes.ADD_TERMINAL_ROW,
  payload: { newRow },
});

export const clearTerminalAction = (): IReducerAction => ({
  type: ReducerActionTypes.CLEAR_TERMINAL,
});

export const addTerminalHistoryItemAction = (newHistoryItem: InputValueType): IReducerAction => ({
  type: ReducerActionTypes.ADD_TERMINAL_HISTORY_ITEM,
  payload: { newHistoryItem },
});

export const setTerminalHistoryAction = (newTerminalHistory: InputValueType[]): IReducerAction => ({
  type: ReducerActionTypes.SET_TERMINAL_HISTORY,
  payload: { newTerminalHistory },
});

export const setHistoryIndexAction = (newIndex: HistoryIndexType): IReducerAction => ({
  type: ReducerActionTypes.SET_HISTORY_INDEX,
  payload: { newIndex },
});
