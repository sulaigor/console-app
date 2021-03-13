import React, { ReactNode } from 'react';
import classNames from 'classnames';
import css from './button.module.scss';

enum BUTTON_TYPE_ENUM {
  primary = 'primary',
  secondary = 'secondary',
}

interface IProps {
  children: string | ReactNode;
  onClick: () => void;
  type?: keyof typeof BUTTON_TYPE_ENUM;
}

const Button = ({ children, type = BUTTON_TYPE_ENUM.primary, onClick }: IProps) => {
  return (
    <button type='button' className={classNames(css.btn, css[type])} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
