import { getCommand, getNotFoundOutput } from 'utils/commands';

export interface ITerminalRow {
  input: string;
  output: string;
  command: string;
}

export class TerminalRow implements ITerminalRow {
  public input: string;
  public output: string;
  public command: string;

  constructor(input: string) {
    this.input = input;
    this.output = getNotFoundOutput(this.input);
    this.command = getCommand(this.input);
  }
}
