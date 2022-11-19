import { clearTerminalAction } from 'store/namespaces/terminal/actions';
import { BlankActionUtil } from 'types/reducer';

export const IN_COMMAND_SEPARATOR = ' ';
export const CLEAR_KEY = 'l';
export const NOT_FOUND_OUTPUT = 'bash: command not found:';

export const COMMAND_ACTIONS: Record<string, BlankActionUtil> = {
  clear: clearTerminalAction,
};
