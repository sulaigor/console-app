import { CLEAR_COMMAND, IN_COMMAND_SEPARATOR } from 'const/commands';

export const getCommandValue = (inputValue: string): string => inputValue.split(IN_COMMAND_SEPARATOR)[0];
export const isClearCommand = (inputValue: string): boolean => getCommandValue(inputValue) === CLEAR_COMMAND;
