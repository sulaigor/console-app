interface ITerminalContextState {
  inputValue: string;
}

interface ITerminalContextActions {
  setInputValue: (newValue: string) => void;
}

export type TerminalContextType = ITerminalContextState & ITerminalContextActions;
