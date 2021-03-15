import React, { ChangeEvent, FormEvent } from 'react';
import classNames from 'classnames';
import { USER_NAME } from 'const/webPage';
import css from './modalForm.module.scss';

interface IProps {
  passwordValue: string;
  onPasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onConfirm: () => void;
}

const ModalForm = ({ passwordValue, onPasswordChange, onConfirm }: IProps) => {
  const handleModalConfirm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onConfirm();
  };

  return (
    <form className={css.passwordForm} onSubmit={handleModalConfirm}>
      <label className={css.formLabel}>
        User:
        <div className={classNames(css.formInput, css.fakeInput)}>{USER_NAME}</div>
      </label>
      <label className={css.formLabel}>
        Password:
        <input
          autoFocus
          className={css.formInput}
          type='password'
          value={passwordValue}
          onChange={onPasswordChange}
        />
      </label>
    </form>
  );
};

export default ModalForm;
