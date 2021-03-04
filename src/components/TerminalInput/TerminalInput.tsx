import React, { ChangeEvent } from 'react';
import { useTerminalContext } from 'contexts/TerminalContext';
import TerminalLabel from 'components/TerminalLabel';
import css from './terminalInput.module.scss';

function TerminalInput() {
  const { inputValue, setInputValue } = useTerminalContext();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);

  return (
    <div className={css.terminalInputWrapper}>
      <TerminalLabel />
      <input
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
