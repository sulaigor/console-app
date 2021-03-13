import React from 'react';
import classNames from 'classnames';
import LockIcon from './LockIcon';
import ModalBody from './ModalBody';
import ModalForm from './ModalForm';
import ModalFooter from './ModalFooter';
import css from './passwordModal.module.scss';

interface IProps {
  onClose: () => void;
  className?: string;
}

const PasswordModal = ({ className, onClose }: IProps) => {
  const handleModalConfirm = () => null;

  return (
    <div className={classNames(css.passwordModal, className)}>
      <LockIcon className={css.lockIcon} />
      <ModalBody />
      <ModalForm onConfirm={handleModalConfirm} />
      <ModalFooter onClose={onClose} onConfirm={handleModalConfirm} />
    </div>
  );
};

export default PasswordModal;
