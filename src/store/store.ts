import { configureStore } from '@reduxjs/toolkit';
import { terminalInitialState, terminalReducer, TERMINAL_REDUCER_NAME } from 'store/reducers/terminalReducer';

const store = configureStore({
  reducer: {
    [TERMINAL_REDUCER_NAME]: terminalReducer,
  },
  preloadedState: {
    [TERMINAL_REDUCER_NAME]: terminalInitialState,
  },
});

export default store;
