import { Action, createReducer, on } from '@ngrx/store';
import * as StandardActions from './standard.actions';

export const standardFeatureKey = 'standard';

export interface StandardState {
  jokes: any;
}

export const initialState: StandardState = {
  jokes: undefined
};

const standardReducer = createReducer(
  initialState,
  on(StandardActions.GetDataSuccess, (state, { data }) => ({ jokes: data }))
);

export function reducer(state: StandardState | undefined, action: Action) {
  return standardReducer(state, action);
}

export const getData = (state: StandardState) => state.jokes;

