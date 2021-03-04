import React from 'react';
import { WEB_PAGE_NAME } from 'const/webPage';
import css from './terminalLabel.module.scss';

const TerminalLabel = () => {
  return <span className={css.terminalLabel}>{WEB_PAGE_NAME}</span>;
};

export default TerminalLabel;
