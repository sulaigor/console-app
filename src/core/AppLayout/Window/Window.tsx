import classnames from 'classnames';
import { IChildrenProps } from 'types/props';
import { useResizeEvent } from './hooks';
import WindowHead from './WindowHead';
import css from './window.module.scss';

interface IProps extends IChildrenProps {
  className?: string;
}

const Window = ({ children, className }: IProps) => {
  const contentRef = useResizeEvent<HTMLDivElement>();

  return (
    <div className={classnames(css.terminalWindow, className)}>
      <div className={css.terminalWrapper}>
        <WindowHead />
        <div ref={contentRef} className={css.terminalContent}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Window;
