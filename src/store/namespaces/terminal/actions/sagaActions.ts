import { IReducerAction } from 'types/reducer';
import { SagaActionTypes } from './actionTypes';

export const increaseHistoryIndexAction = (): IReducerAction => ({
  type: SagaActionTypes.INCREASE_HISTORY_INDEX,
});

export const decreaseHistoryIndexAction = (): IReducerAction => ({
  type: SagaActionTypes.DECREASE_HISTORY_INDEX,
});

export const createTerminalRowAction = (): IReducerAction => ({
  type: SagaActionTypes.CREATE_TERMINAL_ROW,
});

export const loadHistoryAction = (): IReducerAction => ({
  type: SagaActionTypes.LOAD_HISTORY,
});
