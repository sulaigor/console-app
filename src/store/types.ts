import { ITerminalReducerState, TERMINAL_REDUCER_NAME } from './reducers/terminalReducer';

export interface IStoreState {
  [TERMINAL_REDUCER_NAME]: ITerminalReducerState;
}
