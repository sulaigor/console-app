import React from 'react';
import TerminalInput from 'components/TerminalInput';
import css from './consoleWindow.module.scss';

const ConsoleWindow = () => {
  return (
    <main className={css.mainContainer}>
      <TerminalInput />
    </main>
  );
};

export default ConsoleWindow;
