import { IStoreAction } from 'types/reducer';
import { SagaActionTypes } from './actionTypes';

export const increaseHistoryIndexAction = (): IStoreAction => ({
  type: SagaActionTypes.INCREASE_HISTORY_INDEX,
});

export const decreaseHistoryIndexAction = (): IStoreAction => ({
  type: SagaActionTypes.DECREASE_HISTORY_INDEX,
});

export const createTerminalRowAction = (): IStoreAction => ({
  type: SagaActionTypes.CREATE_TERMINAL_ROW,
});

export const loadHistoryAction = (): IStoreAction => ({
  type: SagaActionTypes.LOAD_HISTORY,
});
