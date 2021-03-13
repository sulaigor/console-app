import React from 'react';
import Button from 'components/Button';
import css from './modalFooter.module.scss';

interface IProps {
  onClose: () => void;
  onConfirm: () => void;
}

const ModalFooter = ({ onClose, onConfirm }: IProps) => {
  return (
    <footer className={css.modalFooter}>
      <Button type='secondary' onClick={onClose}>
        Cancel
      </Button>
      <Button onClick={onConfirm}>Unlock</Button>
    </footer>
  );
};

export default ModalFooter;
