import React, { useRef } from 'react';
import TerminalInput from 'components/TerminalInput';
import css from './consoleWindow.module.scss';

const ConsoleWindow = () => {
  const terminalInputRef = useRef<HTMLInputElement>(null);

  const handleTerminalClick = () => terminalInputRef.current?.focus();

  return (
    <main className={css.mainContainer} onClick={handleTerminalClick}>
      <TerminalInput inputRef={terminalInputRef} />
    </main>
  );
};

export default ConsoleWindow;
