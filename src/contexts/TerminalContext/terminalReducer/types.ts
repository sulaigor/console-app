import { ITerminalRow } from 'types/terminal';

export interface IReducerState {
  inputValue: string;
  terminalRows: ITerminalRow[];
}
