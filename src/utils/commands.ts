import { CLEAR_COMMAND, IN_COMMAND_SEPARATOR, NOT_FOUND_OUTPUT } from 'const/commands';

export const getCommand = (input: string): string => input.split(IN_COMMAND_SEPARATOR)[0];
export const isClearCommand = (input: string): boolean => getCommand(input) === CLEAR_COMMAND;
export const getNotFoundOutput = (input: string): string =>
  input && `${NOT_FOUND_OUTPUT} ${getCommand(input)}`;
