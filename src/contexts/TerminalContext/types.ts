import { IReducerState } from './terminalReducer';

interface ITerminalContextActions {
  setInputValue: (newValue: string) => void;
  addTerminalRow: () => void;
}

export type TerminalContextType = IReducerState & ITerminalContextActions;
