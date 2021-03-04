import { IReducerState } from './terminalReducer';

interface ITerminalContextActions {
  setInputValue: (newValue: string) => void;
  resetInputValue: () => void;
}

export type TerminalContextType = IReducerState & ITerminalContextActions;
