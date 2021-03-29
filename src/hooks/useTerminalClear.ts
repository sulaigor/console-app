import { CLEAR_KEY } from 'const/commands';
import { useTerminalContext } from 'contexts/TerminalContext';
import { useKeyboardEvent } from 'hooks/useKeyboardEvent';

export const useTerminalClear = () => {
  const { clearTerminal } = useTerminalContext();

  useKeyboardEvent('keyup', ({ ctrlKey, key }) => {
    if (ctrlKey && key === CLEAR_KEY) {
      clearTerminal();
    }
  });
};
