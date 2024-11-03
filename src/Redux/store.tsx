// src/store.ts

import { createStore } from 'redux';
import counterReducer from './reducer';
import { CounterState } from './reducer';

const store = createStore(counterReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;