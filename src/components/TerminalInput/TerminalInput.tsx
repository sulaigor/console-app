import { useDispatch, useSelector } from 'react-redux';
import React, { ChangeEvent, FormEvent, RefObject, useLayoutEffect } from 'react';
import TerminalLabel from 'components/TerminalLabel';
import css from './terminalInput.module.scss';
import { createTerminalRowAction, setInputValueAction } from 'store/namespaces/terminal/actions';
import { selectInputValue } from 'store/namespaces/terminal/selectors';

interface IProps {
  inputRef: RefObject<HTMLInputElement>;
}

const TerminalInput = ({ inputRef }: IProps) => {
  const dispatch = useDispatch();
  const inputValue = useSelector(selectInputValue);

  useLayoutEffect(() => {
    inputRef.current?.focus();
  }, [inputRef]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(setInputValueAction(e.target.value));
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createTerminalRowAction());
  };

  return (
    <div className={css.terminalInputWrapper}>
      <TerminalLabel />
      <form className={css.inputForm} onSubmit={handleFormSubmit}>
        <input
          spellCheck={false}
          ref={inputRef}
          className={css.terminalInput}
          type='text'
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default TerminalInput;
