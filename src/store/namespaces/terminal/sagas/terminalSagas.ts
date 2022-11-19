import { put, select } from 'redux-saga/effects';
import { BlankActionUtil } from 'types/reducer';
import { COMMAND_ACTIONS } from 'const/commands';
import { TERMINAL_HISTORY_KEY } from 'const/terminal';
import { getItem, setItem } from 'utils/localStorage';
import { TerminalRow } from 'models/TerminalRow';
import { DefaultValues } from '../reducer/const';
import {
  addTerminalRowAction,
  addTerminalHistoryItemAction,
  resetInputValueAction,
  setHistoryIndexAction,
  setTerminalHistoryAction,
} from '../actions';
import { selectHistoryIndex, selectInputValue, selectTerminalHistory } from '../selectors';

export const increaseHistoryIndexSaga = function* () {
  const terminalHistory: string[] = yield select(selectTerminalHistory);
  const historyIndex: number = yield select(selectHistoryIndex);

  yield put(setHistoryIndexAction(Math.min(historyIndex + 1, terminalHistory.length)));
};

export const decreaseHistoryIndexSaga = function* () {
  const historyIndex: number = yield select(selectHistoryIndex);

  yield put(setHistoryIndexAction(Math.max(historyIndex - 1, DefaultValues.HISTORY_INDEX)));
};

export const createTerminalRowSaga = function* () {
  const inputValue: string = yield select(selectInputValue);

  const terminalRow = new TerminalRow(inputValue);
  yield put(addTerminalRowAction(terminalRow));

  const { input, command } = terminalRow;
  if (input) {
    yield put(addTerminalHistoryItemAction(input));

    const commandAction: BlankActionUtil | undefined = COMMAND_ACTIONS[command];
    if (commandAction) yield put(commandAction());

    // Update terminal history
    const terminalHistory: string[] = yield select(selectTerminalHistory);
    setItem(TERMINAL_HISTORY_KEY, JSON.stringify(terminalHistory));
  }

  yield put(resetInputValueAction());
};

export const loadTerminalHistorySaga = function* () {
  const savedTerminalHistory = getItem(TERMINAL_HISTORY_KEY);

  if (savedTerminalHistory) {
    try {
      yield put(setTerminalHistoryAction(JSON.parse(savedTerminalHistory)));
    } catch (err) {
      // TODO add alerting?
    }
  }
};

export const setTerminalHistorySaga = function* () {
  const terminalHistory: string[] = yield select(selectTerminalHistory);
  setItem(TERMINAL_HISTORY_KEY, JSON.stringify(terminalHistory));

  yield put(setTerminalHistoryAction(terminalHistory));
};
