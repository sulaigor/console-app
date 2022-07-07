import classnames from 'classnames';
import css from './closeButton.module.scss';

interface IProps {
  onClick: () => void;
  className?: string;
}

const CloseButton = ({ className, onClick }: IProps) => {
  return (
    <button type='button' className={classnames(css.closeBtn, className)} onClick={onClick}>
      close button
    </button>
  );
};

export default CloseButton;
