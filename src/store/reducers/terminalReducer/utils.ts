import { createActionType } from 'utils/reducer';
import { TERMINAL_REDUCER_NAME } from './const';

export const createTerminalActionType = (action: string): string =>
  createActionType(TERMINAL_REDUCER_NAME, action);
