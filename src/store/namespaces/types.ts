import { ITerminalReducerState, TERMINAL_REDUCER_NAMESPACE } from 'store/namespaces/terminal';

// Defines redu store state
export interface IStoreState {
  [TERMINAL_REDUCER_NAMESPACE]: ITerminalReducerState;
}
