import React from 'react';
import { useTerminalContext } from 'contexts/TerminalContext';
import TerminalRow from './TerminalRow';
import css from './terminalRows.module.scss';

const TerminalRows = () => {
  const { terminalRows } = useTerminalContext();

  if (terminalRows.length === 0) return null;
  return (
    <ul className={css.rowsList}>
      {terminalRows.map((row, index) => (
        <li className={css.rowItem} key={`terminal-row-item-${row.input}-${index}`}>
          <TerminalRow {...row} />
        </li>
      ))}
    </ul>
  );
};

export default TerminalRows;
