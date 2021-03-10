import { IReducerState } from './terminalReducer';

interface ITerminalContextActions {
  setInputValue: (newValue: string) => void;
  addTerminalRow: () => void;
  clearTerminal: () => void;
}

export type TerminalContextType = IReducerState & ITerminalContextActions;
