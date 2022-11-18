import { ReducerUtil } from 'types/reducer';
import { ReducerActionTypes } from '../actions';
import { DefaultValues, initialState as terminalInitialState } from './const';
import { ITerminalReducerState } from './types';

export const terminalReducer: ReducerUtil<ITerminalReducerState> = (state = terminalInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ReducerActionTypes.SET_INPUT_VALUE:
      return {
        ...state,
        inputValue: payload?.newValue,
        cachedInputValue: payload?.newValue,
      };

    case ReducerActionTypes.RESET_INPUT_VALUE:
      return {
        ...state,
        inputValue: DefaultValues.INPUT_VALUE,
        cachedInputValue: DefaultValues.INPUT_VALUE,
        historyIndex: DefaultValues.HISTORY_INDEX,
      };

    case ReducerActionTypes.ADD_TERMINAL_ROW:
      return {
        ...state,
        terminalRows: [...state.terminalRows, payload?.newRow],
      };

    case ReducerActionTypes.CLEAR_TERMINAL:
      return {
        ...state,
        terminalRows: DefaultValues.TERMINAL_ROWS,
      };

    case ReducerActionTypes.ADD_TERMINAL_HISTORY_ITEM:
      return {
        ...state,
        terminalHistory: [payload?.newHistoryItem, ...state.terminalHistory],
      };

    case ReducerActionTypes.SET_TERMINAL_HISTORY:
      return {
        ...state,
        terminalHistory: [...payload?.newTerminalHistory],
      };

    case ReducerActionTypes.SET_HISTORY_INDEX:
      return {
        ...state,
        historyIndex: payload?.newIndex,
        inputValue:
          payload?.newIndex === DefaultValues.HISTORY_INDEX
            ? state.cachedInputValue
            : state.terminalHistory[payload?.newIndex - 1],
      };

    default:
      return state;
  }
};
