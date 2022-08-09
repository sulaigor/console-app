import { put, select } from 'redux-saga/effects';
import { TERMINAL_HISTORY_KEY } from 'const/terminal';
import { IStoreState } from 'store/namespaces';
import { getItem, setItem } from 'utils/localStorage';
import { TerminalRow } from 'models/TerminalRow';
import { DefaultValues } from '../reducer/const';
import {
  addTerminalHistoryItemAction,
  addTerminalRowAction,
  resetInputValueAction,
  setHistoryIndexAction,
  setTerminalHistoryAction,
} from '../actions';

export const increaseHistoryIndexSaga = function* () {
  const terminalHistory: string[] = yield select((store: IStoreState) => store.terminal.terminalHistory);
  const historyIndex: number = yield select((store: IStoreState) => store.terminal.historyIndex);

  yield put(setHistoryIndexAction(Math.min(historyIndex + 1, terminalHistory.length)));
};

export const decreaseHistoryIndexSaga = function* () {
  const historyIndex: number = yield select((store: IStoreState) => store.terminal.historyIndex);

  yield put(setHistoryIndexAction(Math.max(historyIndex - 1, DefaultValues.HISTORY_INDEX)));
};

export const addTerminalRowSaga = function* () {
  const inputValue: string = yield select((store: IStoreState) => store.terminal.inputValue);

  const terminalRow = new TerminalRow(inputValue);
  yield put(addTerminalRowAction(terminalRow));

  const { input } = terminalRow;
  if (input) yield put(addTerminalHistoryItemAction(input));

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
  const terminalHistory: string[] = yield select((store: IStoreState) => store.terminal.terminalHistory);
  setItem(TERMINAL_HISTORY_KEY, JSON.stringify(terminalHistory));

  yield put(setTerminalHistoryAction(terminalHistory));
};
