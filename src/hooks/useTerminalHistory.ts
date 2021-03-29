import { useTerminalContext } from 'contexts/TerminalContext';
import { useKeyboardEvent } from 'hooks/useKeyboardEvent';

enum ArrowKeys {
  ARROW_UP = 'ArrowUp',
  ARROW_DOWN = 'ArrowDown',
}

export const useTerminalHistory = () => {
  const { increaseHistoryIndex, decreaseHistoryIndex } = useTerminalContext();

  useKeyboardEvent(
    'keydown',
    ({ key }) => {
      if (key === ArrowKeys.ARROW_UP) {
        increaseHistoryIndex();
      }

      if (key === ArrowKeys.ARROW_DOWN) {
        decreaseHistoryIndex();
      }
    },
    [increaseHistoryIndex, decreaseHistoryIndex]
  );
};
