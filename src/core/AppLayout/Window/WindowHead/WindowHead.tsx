import React, { useState } from 'react';
import CloseButton from './CloseButton';
import PasswordModal from './PasswordModal';
import { DEFAULT_TERMINAL_TITLE } from './const';
import css from './windowHead.module.scss';

interface IProps {
  title?: string;
}

const WindowHead = ({ title = DEFAULT_TERMINAL_TITLE }: IProps) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const hadnleCloseBtnClick = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);

  return (
    <header className={css.terminalHead}>
      <CloseButton className={css.closeBtn} onClick={hadnleCloseBtnClick} />
      {title}
      {isModalVisible && <PasswordModal className={css.passwordModal} onClose={handleCloseModal} />}
    </header>
  );
};

export default WindowHead;
