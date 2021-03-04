import React from 'react';
import { ITerminalRow as IProps } from 'types/terminal';
import TerminalLabel from 'components/TerminalLabel';
import css from './terminalRow.module.scss';

const TerminalRow = ({ value }: IProps) => {
  return (
    <div className={css.rowWrapper}>
      <TerminalLabel />
      <p className={css.rowValue}>{value}</p>
    </div>
  );
};

export default TerminalRow;
