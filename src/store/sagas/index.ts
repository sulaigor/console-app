import { all, fork } from 'redux-saga/effects';
import { rootTerminalSaga } from 'store/sagas/terminalSagas';

// Create root redux saga
export const rootSaga = function* () {
  yield all([
    fork(rootTerminalSaga), // Add terminal sagas
  ]);
};
