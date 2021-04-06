import { useLayoutEffect, useRef } from 'react';

const RESIZE_EVENT = 'custom-resize';

export const useResizeEvent = <T extends HTMLElement>() => {
  const elemRef = useRef<T>(null);

  useLayoutEffect(() => {
    const { current: elem } = elemRef;
    if (!elem?.firstChild) return () => null;

    const checkResize: ResizeObserverCallback = (mutations) => {
      const observedElem = mutations[0].target;
      const event = new CustomEvent(RESIZE_EVENT);
      observedElem.dispatchEvent(event);
    };

    const childElem = elem.firstChild as Element;
    const observer = new ResizeObserver(checkResize);
    observer.observe(childElem);

    const resizeHandler = () => {
      elem.scrollTop = elem.scrollHeight;
    };

    childElem.addEventListener(RESIZE_EVENT, resizeHandler);
    return () => {
      childElem.removeEventListener(RESIZE_EVENT, resizeHandler);
      observer.disconnect();
    };
  }, [elemRef.current]);

  return elemRef;
};
