import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from 'store/reducers';
import { rootSaga } from 'store/sagas';

// Create a saga middleware
const sagaMiddleware = createSagaMiddleware();
// Create redux store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// Run saga middleware
sagaMiddleware.run(rootSaga);

export default store;
