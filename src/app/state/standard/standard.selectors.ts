import { createSelector } from '@ngrx/store';
import { StandardState } from './standard.reducer';
import * as fromStandardReducer from './standard.reducer';

export const selectStandardState = (state: StandardState) => state.jokes;

export const getStanadrdData = createSelector(
    selectStandardState,
    fromStandardReducer.getData
);