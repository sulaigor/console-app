import { createTerminalReducerActionType, createTerminalSagaActionType } from './utils';

const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
const RESET_INPUT_VALUE = 'RESET_INPUT_VALUE';
const ADD_TERMINAL_ROW = 'ADD_TERMINAL_ROW';
const CLEAR_TERMINAL = 'CLEAR_TERMINAL';
const ADD_TERMINAL_HISTORY_ITEM = 'ADD_TERMINAL_HISTORY_ITEM';
const SET_TERMINAL_HISTORY = 'SET_TERMINAL_HISTORY';
const SET_HISTORY_INDEX = 'SET_HISTORY_INDEX';

export const ReducerActionTypes = {
  SET_INPUT_VALUE: createTerminalReducerActionType(SET_INPUT_VALUE),
  RESET_INPUT_VALUE: createTerminalReducerActionType(RESET_INPUT_VALUE),
  ADD_TERMINAL_ROW: createTerminalReducerActionType(ADD_TERMINAL_ROW),
  CLEAR_TERMINAL: createTerminalReducerActionType(CLEAR_TERMINAL),
  ADD_TERMINAL_HISTORY_ITEM: createTerminalReducerActionType(ADD_TERMINAL_HISTORY_ITEM),
  SET_TERMINAL_HISTORY: createTerminalReducerActionType(SET_TERMINAL_HISTORY),
  SET_HISTORY_INDEX: createTerminalReducerActionType(SET_HISTORY_INDEX),
};

export const SagasActionTypes = {
  SET_INPUT_VALUE: createTerminalSagaActionType(SET_INPUT_VALUE),
  RESET_INPUT_VALUE: createTerminalSagaActionType(RESET_INPUT_VALUE),
  ADD_TERMINAL_ROW: createTerminalSagaActionType(ADD_TERMINAL_ROW),
  CLEAR_TERMINAL: createTerminalSagaActionType(CLEAR_TERMINAL),
  ADD_TERMINAL_HISTORY_ITEM: createTerminalSagaActionType(ADD_TERMINAL_HISTORY_ITEM),
  SET_TERMINAL_HISTORY: createTerminalSagaActionType(SET_TERMINAL_HISTORY),
  SET_HISTORY_INDEX: createTerminalSagaActionType(SET_HISTORY_INDEX),
};