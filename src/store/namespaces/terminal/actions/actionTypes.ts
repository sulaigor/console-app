import {
  SET_INPUT_VALUE,
  RESET_INPUT_VALUE,
  ADD_TERMINAL_ROW,
  CLEAR_TERMINAL,
  ADD_TERMINAL_HISTORY_ITEM,
  SET_TERMINAL_HISTORY,
  SET_HISTORY_INDEX,
  DECREASE_HISTORY_INDEX,
  INCREASE_HISTORY_INDEX,
} from './const';
import { createTerminalReducerActionType, createTerminalSagaActionType } from './utils';

export const ReducerActionTypes = {
  SET_INPUT_VALUE: createTerminalSagaActionType(SET_INPUT_VALUE),
  RESET_INPUT_VALUE: createTerminalSagaActionType(RESET_INPUT_VALUE),
  ADD_TERMINAL_ROW: createTerminalSagaActionType(ADD_TERMINAL_ROW),
  CLEAR_TERMINAL: createTerminalSagaActionType(CLEAR_TERMINAL),
  ADD_TERMINAL_HISTORY_ITEM: createTerminalSagaActionType(ADD_TERMINAL_HISTORY_ITEM),
  SET_TERMINAL_HISTORY: createTerminalSagaActionType(SET_TERMINAL_HISTORY),
  SET_HISTORY_INDEX: createTerminalSagaActionType(SET_HISTORY_INDEX),
};

export const SagasActionTypes = {
  INCREASE_HISTORY_INDEX: createTerminalReducerActionType(INCREASE_HISTORY_INDEX),
  DECREASE_HISTORY_INDEX: createTerminalReducerActionType(DECREASE_HISTORY_INDEX),
};
