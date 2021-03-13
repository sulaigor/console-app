import React, { useRef } from 'react';
import { useTerminalClear } from 'hooks/useTerminalClear';
import TerminalInput from 'components/TerminalInput';
import TerminalRows from 'components/TerminalRows';

const ConsoleDefaultPage = () => {
  useTerminalClear();
  const terminalInputRef = useRef<HTMLInputElement>(null);

  const handleTerminalClick = () => terminalInputRef.current?.focus();

  return (
    <section onClick={handleTerminalClick}>
      <TerminalRows />
      <TerminalInput inputRef={terminalInputRef} />
    </section>
  );
};

export default ConsoleDefaultPage;
