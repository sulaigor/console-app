import { IReducerAction } from 'types/reducer';
import { RESET_INPUT_VALUE, SET_INPUT_VALUE } from './actionTypes';

export const setInputValueAction = (newValue: string): IReducerAction => ({
  type: SET_INPUT_VALUE,
  payload: {
    newValue,
  },
});

export const resetInputValueAction = (): IReducerAction => ({
  type: RESET_INPUT_VALUE,
});
