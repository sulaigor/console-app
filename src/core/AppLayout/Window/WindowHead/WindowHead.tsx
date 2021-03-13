import React from 'react';
import { DEFAULT_TERMINAL_TITLE } from './const';
import css from './windowHead.module.scss';

interface IProps {
  title?: string;
}

const WindowHead = ({ title = DEFAULT_TERMINAL_TITLE }: IProps) => {
  return <header className={css.terminalHead}>{title}</header>;
};

export default WindowHead;
