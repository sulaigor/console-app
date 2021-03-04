import { IReducerState } from './terminalReducer';

interface ITerminalContextActions {
  setInputValue: (newValue: string) => void;
}

export type TerminalContextType = IReducerState & ITerminalContextActions;
