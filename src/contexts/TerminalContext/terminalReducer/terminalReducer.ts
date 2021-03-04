import { IReducerAction } from 'types/reducer';
import { SET_INPUT_VALUE } from './actionTypes';
import { IReducerState } from './types';

const terminalReducer = (state: IReducerState, action: IReducerAction): IReducerState => {
  const { type, payload } = action;

  switch (type) {
    case SET_INPUT_VALUE:
      return {
        ...state,
        inputValue: payload?.newValue,
      };

    default:
      return state;
  }
};

export default terminalReducer;
