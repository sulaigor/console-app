import React from 'react';
import classnames from 'classnames';
import { IChildrenProps } from 'types/props';
import css from './window.module.scss';

interface IProps extends IChildrenProps {
  className?: string;
}

const Window = ({ children, className }: IProps) => {
  return (
    <div className={classnames(css.terminalWindow, className)}>
      <header className={css.terminalHead}>console-app</header>
      <div className={css.terminalContent}>{children}</div>
    </div>
  );
};

export default Window;
