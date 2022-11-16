import { all, takeEvery, takeLatest } from 'redux-saga/effects';
import { SagaActionTypes } from '../actions';
import {
  increaseHistoryIndexSaga,
  decreaseHistoryIndexSaga,
  createTerminalRowSaga,
  loadTerminalHistorySaga,
} from './terminalSagas';

// Create root terminal saga
export const rootTerminalSaga = function* () {
  yield all([
    takeEvery(SagaActionTypes.CREATE_TERMINAL_ROW, createTerminalRowSaga),
    takeEvery(SagaActionTypes.INCREASE_HISTORY_INDEX, increaseHistoryIndexSaga),
    takeEvery(SagaActionTypes.DECREASE_HISTORY_INDEX, decreaseHistoryIndexSaga),
    takeLatest(SagaActionTypes.LOAD_HISTORY, loadTerminalHistorySaga),
  ]);
};
