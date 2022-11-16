import { useSelector } from 'react-redux';
import { selectTerminalRows } from 'store/namespaces/terminal/selectors';
import TerminalRow from './TerminalRow';
import css from './terminalRows.module.scss';

const TerminalRows = () => {
  const terminalRows = useSelector(selectTerminalRows);

  if (terminalRows.length === 0) return null;
  return (
    <ul className={css.rowsList}>
      {terminalRows.map((row, index) => (
        <li className={css.rowItem} key={`terminal-row-item-${row.input}-${index}`}>
          <TerminalRow {...row} />
        </li>
      ))}
    </ul>
  );
};

export default TerminalRows;
