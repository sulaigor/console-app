import React, { ChangeEvent } from 'react';
import { useTerminalContext } from 'contexts/TerminalContext';
import css from './terminalInput.module.scss';

function TerminalInput() {
  const { inputValue, setInputValue } = useTerminalContext();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);

  return (
    <div className={css.terminalInputWrapper}>
      <label htmlFor='terminal-input' className={css.terminalLabel}>
        igorsula@web-page
      </label>
      <input
        id='terminal-input'
        autoFocus
        className={css.terminalInput}
        type='text'
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default TerminalInput;
