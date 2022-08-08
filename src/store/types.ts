import { ITerminalReducerState, TERMINAL_REDUCER_NAME } from 'store/reducers/terminalReducer';

export interface IStoreState {
  [TERMINAL_REDUCER_NAME]: ITerminalReducerState;
}
