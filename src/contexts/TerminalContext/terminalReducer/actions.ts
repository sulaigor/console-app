import { IReducerAction } from 'types/reducer';
import { SET_INPUT_VALUE } from './actionTypes';

export const setInputValueAction = (newValue: string): IReducerAction => ({
  type: SET_INPUT_VALUE,
  payload: {
    newValue,
  },
});
