import { useEffect } from 'react';
import { useTerminalContext } from 'contexts/TerminalContext';

enum ArrowKeys {
  ARROW_UP = 'ArrowUp',
  ARROW_DOWN = 'ArrowDown',
}

export const useTerminalHistory = () => {
  const { increaseHistoryIndex, decreaseHistoryIndex } = useTerminalContext();

  useEffect(() => {
    const handleKeyDown = ({ key }: KeyboardEvent) => {
      if (key === ArrowKeys.ARROW_UP) {
        increaseHistoryIndex();
      }

      if (key === ArrowKeys.ARROW_DOWN) {
        decreaseHistoryIndex();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [increaseHistoryIndex, decreaseHistoryIndex]);
};
