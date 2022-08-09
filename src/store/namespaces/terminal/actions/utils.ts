import { createActionType } from 'utils/reducer';
import { TERMINAL_REDUCER_NAME, TERMINAL_SAGA_NAME } from '../const';

export const createTerminalReducerActionType = (actionType: string): string =>
  createActionType(TERMINAL_REDUCER_NAME, actionType);

export const createTerminalSagaActionType = (actionType: string): string =>
  createActionType(TERMINAL_SAGA_NAME, actionType);
