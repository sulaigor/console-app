import React from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import LockIcon from './LockIcon';
import ModalBody from './ModalBody';
import ModalForm from './ModalForm';
import ModalFooter from './ModalFooter';
import css from './passwordModal.module.scss';

interface IProps {
  visible: boolean;
  onClose: () => void;
  className?: string;
}

const PasswordModal = ({ visible, className, onClose }: IProps) => {
  const handleModalConfirm = () => null;

  return (
    <CSSTransition
      in={visible}
      timeout={200}
      classNames={{
        enter: css.slideEnter,
        enterActive: css.slideEnterActive,
        exit: css.slideExit,
        exitActive: css.slideExitActive,
      }}
      unmountOnExit
    >
      <div className={classNames(css.passwordModal, className)}>
        <LockIcon className={css.lockIcon} />
        <ModalBody />
        <ModalForm onConfirm={handleModalConfirm} />
        <ModalFooter onClose={onClose} onConfirm={handleModalConfirm} />
      </div>
    </CSSTransition>
  );
};

export default PasswordModal;
