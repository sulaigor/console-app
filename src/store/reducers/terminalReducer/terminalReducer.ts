import { ReducerType } from 'types/reducer';
import {
  ADD_TERMINAL_ROW,
  CLEAR_TERMINAL,
  SET_HISTORY_INDEX,
  RESET_INPUT_VALUE,
  SET_INPUT_VALUE,
  SET_TERMINAL_HISTORY,
  ADD_TERMINAL_HISTORY_ITEM,
} from './actionTypes';
import {
  DEFAULT_HISTORY_INDEX,
  DEFAULT_INPUT_VALUE,
  DEFAULT_TERMINAL_ROWS,
  terminalInitialState,
} from './const';
import { ITerminalReducerState } from './types';

export const terminalReducer: ReducerType<ITerminalReducerState> = (state = terminalInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_INPUT_VALUE:
      return {
        ...state,
        inputValue: payload?.newValue,
        cachedInputValue: payload?.newValue,
      };

    case RESET_INPUT_VALUE:
      return {
        ...state,
        inputValue: DEFAULT_INPUT_VALUE,
        cachedInputValue: DEFAULT_INPUT_VALUE,
        historyIndex: DEFAULT_HISTORY_INDEX,
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

    case ADD_TERMINAL_HISTORY_ITEM:
      return {
        ...state,
        terminalHistory: [payload?.newHistoryItem, ...state.terminalHistory],
      };

    case SET_TERMINAL_HISTORY:
      return {
        ...state,
        terminalHistory: [...payload?.newTerminalHistory],
      };

    case SET_HISTORY_INDEX:
      return {
        ...state,
        historyIndex: payload?.newIndex,
        inputValue:
          payload?.newIndex === DEFAULT_HISTORY_INDEX
            ? state.cachedInputValue
            : state.terminalHistory[payload?.newIndex - 1],
      };

    default:
      return state;
  }
};
