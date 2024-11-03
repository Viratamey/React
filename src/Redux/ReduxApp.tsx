// src/App.tsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';
import { CounterState } from './reducer';
import { RootState, AppDispatch } from './store';

const ReduxApp: React.FC = () => {
    const count = useSelector((state: RootState) => state.count);
    const dispatch: AppDispatch = useDispatch();

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default ReduxApp;
