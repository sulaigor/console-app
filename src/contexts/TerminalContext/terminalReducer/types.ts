import { ITerminalRow } from 'models/TerminalRow';

export type InputValueType = string;
export type HistoryIndexType = number;

export interface IReducerState {
  inputValue: InputValueType;
  cachedInputValue: InputValueType;
  terminalRows: ITerminalRow[];
  terminalHistory: InputValueType[];
  historyIndex: HistoryIndexType;
}
