import { useEffect } from 'react';
import { CLEAR_KEY } from 'const/commands';
import { useTerminalContext } from 'contexts/TerminalContext';

export const useTerminalClear = () => {
  const { clearTerminal } = useTerminalContext();

  useEffect(() => {
    const handleKeyUp = ({ ctrlKey, key }: KeyboardEvent) => {
      if (ctrlKey && key === CLEAR_KEY) {
        clearTerminal();
      }
    };

    window.addEventListener('keyup', handleKeyUp);
    return () => window.removeEventListener('keyup', handleKeyUp);
  }, []);
};
