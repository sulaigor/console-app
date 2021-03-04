import React, { ChangeEvent, RefObject, useLayoutEffect } from 'react';
import { useTerminalContext } from 'contexts/TerminalContext';
import TerminalLabel from 'components/TerminalLabel';
import css from './terminalInput.module.scss';

interface IProps {
  inputRef: RefObject<HTMLInputElement>;
}

const TerminalInput = ({ inputRef }: IProps) => {
  const { inputValue, setInputValue } = useTerminalContext();

  useLayoutEffect(() => {
    inputRef.current?.focus();
  }, [inputRef]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);

  return (
    <div className={css.terminalInputWrapper}>
      <TerminalLabel />
      <input
        spellCheck={false}
        ref={inputRef}
        className={css.terminalInput}
        type='text'
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default TerminalInput;
