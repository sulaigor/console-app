import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadHistoryAction } from 'store/namespaces/terminal/actions';

export const useAppStart = () => {
  const dispatch = useDispatch();

  // Setup in application startup
  useEffect(() => {
    dispatch(loadHistoryAction());
  }, []);
};
