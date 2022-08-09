import { createTerminalReducerActionType } from './utils';

export const ReducerActionTypes = {
  SET_INPUT_VALUE: createTerminalReducerActionType('SET_INPUT_VALUE'),
  RESET_INPUT_VALUE: createTerminalReducerActionType('RESET_INPUT_VALUE'),
  ADD_TERMINAL_ROW: createTerminalReducerActionType('ADD_TERMINAL_ROW'),
  CLEAR_TERMINAL: createTerminalReducerActionType('CLEAR_TERMINAL'),
  ADD_TERMINAL_HISTORY_ITEM: createTerminalReducerActionType('ADD_TERMINAL_HISTORY_ITEM'),
  SET_TERMINAL_HISTORY: createTerminalReducerActionType('SET_TERMINAL_HISTORY'),
  SET_HISTORY_INDEX: createTerminalReducerActionType('SET_HISTORY_INDEX'),
};
