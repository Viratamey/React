// src/actions.ts

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export interface IncrementAction {
    type: typeof INCREMENT;
}

export interface DecrementAction {
    type: typeof DECREMENT;
}

export type CounterAction = IncrementAction | DecrementAction;

export const increment = (): IncrementAction => ({
    type: INCREMENT,
});

export const decrement = (): DecrementAction => ({
    type: DECREMENT,
});