import React from 'react';
import { IChildrenProps as IProps } from 'types/props';
import Background from './Background';
import Window from './Window';
import css from './appLayout.module.scss';

const AppLayout = ({ children }: IProps) => {
  return (
    <main className={css.mainContainer}>
      <Background className={css.bgImage} />
      <Window className={css.terminalWindow}>{children}</Window>
    </main>
  );
};

export default AppLayout;
