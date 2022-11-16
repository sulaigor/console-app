import { useDispatch } from 'react-redux';
import { useKeyboardEvent } from 'hooks/useKeyboardEvent';
import { decreaseHistoryIndexAction, increaseHistoryIndexAction } from 'store/namespaces/terminal/actions';

enum ArrowKeys {
  ARROW_UP = 'ArrowUp',
  ARROW_DOWN = 'ArrowDown',
}

export const useTerminalHistory = () => {
  const dispatch = useDispatch();

  useKeyboardEvent(
    'keydown',
    ({ key }) => {
      // Increase history index
      if (key === ArrowKeys.ARROW_UP) dispatch(increaseHistoryIndexAction());
      // Decrease history index
      if (key === ArrowKeys.ARROW_DOWN) dispatch(decreaseHistoryIndexAction());
    },
    [dispatch]
  );
};
