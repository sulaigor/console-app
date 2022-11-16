import {
  ADD_TERMINAL_HISTORY_ITEM,
  ADD_TERMINAL_ROW,
  CLEAR_TERMINAL,
  DECREASE_HISTORY_INDEX,
  INCREASE_HISTORY_INDEX,
  LOAD_HISTORY,
  SET_INPUT_VALUE,
  SET_TERMINAL_HISTORY,
  SET_HISTORY_INDEX,
  RESET_INPUT_VALUE,
  CREATE_TERMINAL_ROW,
} from './const';
import { createTerminalReducerActionType, createTerminalSagaActionType } from './utils';

export const ReducerActionTypes = {
  ADD_TERMINAL_HISTORY_ITEM: createTerminalReducerActionType(ADD_TERMINAL_HISTORY_ITEM),
  ADD_TERMINAL_ROW: createTerminalReducerActionType(ADD_TERMINAL_ROW),
  CLEAR_TERMINAL: createTerminalReducerActionType(CLEAR_TERMINAL),
  SET_INPUT_VALUE: createTerminalReducerActionType(SET_INPUT_VALUE),
  SET_TERMINAL_HISTORY: createTerminalReducerActionType(SET_TERMINAL_HISTORY),
  SET_HISTORY_INDEX: createTerminalReducerActionType(SET_HISTORY_INDEX),
  RESET_INPUT_VALUE: createTerminalReducerActionType(RESET_INPUT_VALUE),
};

export const SagaActionTypes = {
  CREATE_TERMINAL_ROW: createTerminalSagaActionType(CREATE_TERMINAL_ROW),
  DECREASE_HISTORY_INDEX: createTerminalSagaActionType(DECREASE_HISTORY_INDEX),
  INCREASE_HISTORY_INDEX: createTerminalSagaActionType(INCREASE_HISTORY_INDEX),
  LOAD_HISTORY: createTerminalSagaActionType(LOAD_HISTORY),
};
