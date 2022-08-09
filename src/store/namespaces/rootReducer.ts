import { combineReducers } from 'redux';
import { terminalReducer, TERMINAL_REDUCER_NAMESPACE } from 'store/namespaces/terminal';

// Create root redux reducer
export const rootReducer = combineReducers({ [TERMINAL_REDUCER_NAMESPACE]: terminalReducer });
