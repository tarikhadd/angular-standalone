import { createFeature, createReducer, on } from '@ngrx/store';
import * as CreateFeatureActions from './create-feature.actions';

export interface StandardState {
  cfJokes: any;
}

export const initialState: StandardState = {
  cfJokes: undefined
};

const createFeatureReducer = createFeature({
  name: 'cfJokes',
  reducer: createReducer(
    initialState,
    on(CreateFeatureActions.GetCfDataSuccess, (state, { data }) => (
    { 
      ...state,
      cfJokes: data, 
      isLoading: false 
    }))
  )
})


export const {
  name: createFeatureReducerKey,
  reducer: cfReducer,
  selectCfJokes
} = createFeatureReducer

