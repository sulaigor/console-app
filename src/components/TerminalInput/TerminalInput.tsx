import React, { ChangeEvent, FormEvent, RefObject, useLayoutEffect } from 'react';
import { useTerminalContext } from 'contexts/TerminalContext';
import TerminalLabel from 'components/TerminalLabel';
import css from './terminalInput.module.scss';

interface IProps {
  inputRef: RefObject<HTMLInputElement>;
}

const TerminalInput = ({ inputRef }: IProps) => {
  const { inputValue, setInputValue, addTerminalRow } = useTerminalContext();

  useLayoutEffect(() => {
    inputRef.current?.focus();
  }, [inputRef]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTerminalRow();
  };

  return (
    <div className={css.terminalInputWrapper}>
      <TerminalLabel />
      <form className={css.inputForm} onSubmit={handleFormSubmit}>
        <input
          spellCheck={false}
          ref={inputRef}
          className={css.terminalInput}
          type='text'
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default TerminalInput;
