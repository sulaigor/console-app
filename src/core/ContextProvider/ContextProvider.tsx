import React from 'react';
import { IChildrenProps as IProps } from 'types/props';
import TerminalContext from 'contexts/TerminalContext';

function ContextProvider({ children }: IProps) {
  return <TerminalContext>{children}</TerminalContext>;
}

export default ContextProvider;
