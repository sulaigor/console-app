import React from 'react';
import classNames from 'classnames';
import css from './lockIcon.module.scss';

interface IProps {
  className?: string;
}

const LockIcon = ({ className }: IProps) => {
  return (
    <div className={classNames(css.lockIcon, className)}>
      <div className={css.lockShackle}>Lock shackle</div>
      <div className={css.lockBody}>Lock body</div>
    </div>
  );
};

export default LockIcon;
