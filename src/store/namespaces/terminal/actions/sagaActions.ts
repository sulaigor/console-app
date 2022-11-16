import { IReducerAction } from 'types/reducer';
import { SagasActionTypes } from './actionTypes';

export const increaseHistoryIndexAction = (): IReducerAction => ({
  type: SagasActionTypes.INCREASE_HISTORY_INDEX,
});

export const decreaseHistoryIndexAction = (): IReducerAction => ({
  type: SagasActionTypes.DECREASE_HISTORY_INDEX,
});
