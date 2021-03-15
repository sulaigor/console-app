import React, { ChangeEvent, useState } from 'react';
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
  const [password, setPassword] = useState('');
  const [isConfirmTriggered, setConfirmTrigger] = useState(false);

  const handlePasswordChange = ({ target }: ChangeEvent<HTMLInputElement>) => setPassword(target.value);
  const handleModalConfirm = () => setConfirmTrigger(true);
  const handleConfirmAnimEnd = () => {
    setConfirmTrigger(false);
    setPassword('');
  };

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
      <div
        className={classNames(css.passwordModal, className, { [css.confirmAnim]: isConfirmTriggered })}
        onAnimationEnd={handleConfirmAnimEnd}
      >
        <LockIcon className={css.lockIcon} />
        <ModalBody />
        <ModalForm
          passwordValue={password}
          onPasswordChange={handlePasswordChange}
          onConfirm={handleModalConfirm}
        />
        <ModalFooter onClose={onClose} onConfirm={handleModalConfirm} />
      </div>
    </CSSTransition>
  );
};

export default PasswordModal;
