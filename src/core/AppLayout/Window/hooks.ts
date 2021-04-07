import { useLayoutEffect, useRef } from 'react';

export const useResizeEvent = <T extends HTMLElement>() => {
  const elemRef = useRef<T>(null);

  useLayoutEffect(() => {
    const { current: elem } = elemRef;
    if (!elem?.firstChild) return () => null;

    const resizeCallback: ResizeObserverCallback = () => {
      elem.scrollTop = elem.scrollHeight;
    };

    const childElem = elem.firstChild as Element;
    const observer = new ResizeObserver(resizeCallback);
    observer.observe(childElem);

    return () => observer.disconnect();
  }, [elemRef.current]);

  return elemRef;
};
