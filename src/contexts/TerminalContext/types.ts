import { VoidFunctionType } from 'types/functions';
import { IReducerState } from './terminalReducer';

interface ITerminalContextActions {
  setInputValue: (newValue: string) => void;
  addTerminalRow: VoidFunctionType;
  clearTerminal: VoidFunctionType;
  increaseHistoryIndex: VoidFunctionType;
  decreaseHistoryIndex: VoidFunctionType;
}

export type TerminalContextType = IReducerState & ITerminalContextActions;
