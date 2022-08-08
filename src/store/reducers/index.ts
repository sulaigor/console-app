import { combineReducers } from 'redux';
import { terminalReducer, TERMINAL_REDUCER_NAME } from 'store/reducers/terminalReducer';

// Create root redux reducer
export const rootReducer = combineReducers({ [TERMINAL_REDUCER_NAME]: terminalReducer });
