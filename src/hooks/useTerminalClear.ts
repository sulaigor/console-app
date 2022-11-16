import { useDispatch } from 'react-redux';
import { CLEAR_KEY } from 'const/commands';
import { useKeyboardEvent } from 'hooks/useKeyboardEvent';
import { clearTerminalAction } from 'store/namespaces/terminal/actions';

export const useTerminalClear = () => {
  const dispatch = useDispatch();

  useKeyboardEvent('keyup', ({ ctrlKey, key }) => {
    if (ctrlKey && key === CLEAR_KEY) {
      dispatch(clearTerminalAction());
    }
  });
};
