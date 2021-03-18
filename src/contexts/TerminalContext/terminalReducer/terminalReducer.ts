import { IReducerAction } from 'types/reducer';
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
import { DEFAULT_INPUT_VALUE, DEFAULT_TERMINAL_ROWS } from './const';
import { IReducerState } from './types';

const terminalReducer = (state: IReducerState, action: IReducerAction): IReducerState => {
  const { type, payload } = action;

  switch (type) {
    case SET_INPUT_VALUE:
      return {
        ...state,
        inputValue: payload?.newValue,
      };

    case RESET_INPUT_VALUE:
      return {
        ...state,
        inputValue: DEFAULT_INPUT_VALUE,
      };

    case ADD_TERMINAL_ROW:
      return {
        ...state,
        terminalRows: [...state.terminalRows, payload?.newRow],
      };

    case CLEAR_TERMINAL:
      return {
        ...state,
        terminalRows: DEFAULT_TERMINAL_ROWS,
      };

    case SET_TERMINAL_HISTORY:
      return {
        ...state,
        terminalHistory: payload?.newTerminalHistory,
      };

    case ADD_TERMINAL_HISTORY:
      return {
        ...state,
        terminalHistory: [...state.terminalHistory, payload?.newItem],
      };

    case INCREASE_HISTORY_INDEX:
      return {
        ...state,
        historyIndex: Math.min(state.historyIndex + 1, state.terminalHistory.length),
      };

    case DECREASE_HISTORY_INDEX:
      return {
        ...state,
        historyIndex: Math.max(state.historyIndex - 1, 0),
      };

    default:
      return state;
  }
};

export default terminalReducer;
