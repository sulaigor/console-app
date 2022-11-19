import { useDispatch } from 'react-redux';
import { CLEAR_KEY, COMMAND_ACTIONS } from 'const/commands';
import { useKeyboardEvent } from 'hooks/useKeyboardEvent';

export const useTerminalClear = () => {
  const dispatch = useDispatch();

  useKeyboardEvent('keyup', ({ ctrlKey, key }) => {
    if (ctrlKey && key === CLEAR_KEY) {
      dispatch(COMMAND_ACTIONS.clear());
    }
  });
};
