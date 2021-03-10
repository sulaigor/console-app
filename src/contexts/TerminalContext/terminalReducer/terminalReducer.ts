import { IReducerAction } from 'types/reducer';
import { ADD_TERMINAL_ROW, CLEAR_TERMINAL, RESET_INPUT_VALUE, SET_INPUT_VALUE } from './actionTypes';
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

    default:
      return state;
  }
};

export default terminalReducer;
