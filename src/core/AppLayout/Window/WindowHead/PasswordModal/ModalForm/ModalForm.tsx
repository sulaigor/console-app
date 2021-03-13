import React, { FormEvent } from 'react';
import classNames from 'classnames';
import { USER_NAME } from 'const/webPage';
import css from './modalForm.module.scss';

interface IProps {
  onConfirm: () => void;
}

const ModalForm = ({ onConfirm }: IProps) => {
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
        <input autoFocus className={css.formInput} type='password' />
      </label>
    </form>
  );
};

export default ModalForm;
