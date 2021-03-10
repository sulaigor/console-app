import React from 'react';
import classnames from 'classnames';
import { ITerminalRow as IProps } from 'models/TerminalRow';
import TerminalLabel from 'components/TerminalLabel';
import css from './terminalRow.module.scss';

const TerminalRow = ({ input, output }: IProps) => {
  return (
    <div className={css.rowWrapper}>
      <TerminalLabel />
      <p className={css.row}>{input}</p>
      {output && <p className={classnames(css.row, css.outputRow)}>{output}</p>}
    </div>
  );
};

export default TerminalRow;
