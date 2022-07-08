import { createTerminalActionType } from './utils';

export const SET_INPUT_VALUE = createTerminalActionType('CHANGE_INPUT_VALUE');
export const RESET_INPUT_VALUE = createTerminalActionType('RESET_INPUT_VALUE');

export const ADD_TERMINAL_ROW = createTerminalActionType('ADD_TERMINAL_ROW');
export const CLEAR_TERMINAL = createTerminalActionType('CLEAR_TERMINAL');

export const ADD_TERMINAL_HISTORY_ITEM = createTerminalActionType('ADD_TERMINAL_HISTORY_ITEM');
export const SET_TERMINAL_HISTORY = createTerminalActionType('SET_TERMINAL_HISTORY');
export const SET_HISTORY_INDEX = createTerminalActionType('SET_HISTORY_INDEX');
