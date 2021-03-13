import React from 'react';
import classnames from 'classnames';
import { IChildrenProps } from 'types/props';
import WindowHead from './WindowHead';
import css from './window.module.scss';

interface IProps extends IChildrenProps {
  className?: string;
}

const Window = ({ children, className }: IProps) => {
  return (
    <div className={classnames(css.terminalWindow, className)}>
      <WindowHead />
      <div className={css.terminalContent}>{children}</div>
    </div>
  );
};

export default Window;
