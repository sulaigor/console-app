import { getCommand, getNotFoundOutput } from 'utils/commands';

export interface ITerminalRow {
  input: string;
  output: string;
  command: string;
}

export class TerminalRow implements ITerminalRow {
  public readonly input: string;
  public readonly output: string;
  public readonly command: string;

  constructor(input: string) {
    this.input = input.trim();
    this.command = getCommand(this.input);
    this.output = getNotFoundOutput(this.input);
  }
}
