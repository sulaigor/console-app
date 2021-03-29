import { DependencyList, useEffect } from 'react';

type KeyboardEventType = 'keyup' | 'keydown';
type KeyboardHandlerType = (event: KeyboardEvent) => void;
type UseKeyboardEventType = (
  event: KeyboardEventType,
  handler: KeyboardHandlerType,
  deps?: DependencyList
) => void;

export const useKeyboardEvent: UseKeyboardEventType = (event, handler, deps = []) => {
  useEffect(() => {
    window.addEventListener(event, handler);
    return () => window.removeEventListener(event, handler);
  }, deps);
};
