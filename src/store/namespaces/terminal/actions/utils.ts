import { createActionType } from 'utils/reducer';
import { TERMINAL_REDUCER_NAME, TERMINAL_SAGA_NAME } from '../const';

// Create action type with terminal reducer prefix
export const createTerminalReducerActionType = (actionType: string): string =>
  createActionType(TERMINAL_REDUCER_NAME, actionType);

// Create action type with terminal sagas prefix
export const createTerminalSagaActionType = (actionType: string): string =>
  createActionType(TERMINAL_SAGA_NAME, actionType);
