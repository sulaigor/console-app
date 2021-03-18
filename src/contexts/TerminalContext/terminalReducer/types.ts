import { ITerminalRow } from 'models/TerminalRow';

export interface IReducerState {
  inputValue: string;
  terminalRows: ITerminalRow[];
  terminalHistory: string[];
  historyIndex: number;
}
