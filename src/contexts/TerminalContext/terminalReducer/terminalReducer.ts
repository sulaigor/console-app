import { IReducerAction } from 'types/reducer';
import { RESET_INPUT_VALUE, SET_INPUT_VALUE } from './actionTypes';
import { DEFAULT_INPUT_VALUE } from './const';
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

    default:
      return state;
  }
};

export default terminalReducer;
