import React from 'react';
import classnames from 'classnames';
import terminalBackground from 'assets/images/terminalBackground.json';
import css from './background.module.scss';

interface IProps {
  className?: string;
}

const Background = ({ className }: IProps) => {
  return (
    <div
      style={{ backgroundImage: `url("${terminalBackground.data}")` }}
      className={classnames(css.bgImage, className)}
    />
  );
};

export default Background;
