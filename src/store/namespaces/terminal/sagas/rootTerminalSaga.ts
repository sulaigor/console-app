import { all, takeEvery } from 'redux-saga/effects';
import { SagasActionTypes } from '../actions';
import { increaseHistoryIndexSaga, decreaseHistoryIndexSaga } from './terminalSagas';

// Create root terminal saga
export const rootTerminalSaga = function* () {
  yield all([
    takeEvery(SagasActionTypes.INCREASE_HISTORY_INDEX, increaseHistoryIndexSaga),
    takeEvery(SagasActionTypes.DECREASE_HISTORY_INDEX, decreaseHistoryIndexSaga),
  ]);
};
