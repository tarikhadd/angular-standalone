import * as fromStandard from './standard/standard.reducer';
import * as fromCreateFeature from './createFeature/create-feature.reducer';
import { createFeatureSelector } from '@ngrx/store';

export const reducers = {
    sReducer: fromStandard.reducer,
    cfReducer: fromCreateFeature.cfReducer
}