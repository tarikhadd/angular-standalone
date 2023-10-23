import { createAction, props } from '@ngrx/store';

export const GetCfData = createAction('[CreateFeature] Get Data');
export const GetCfDataSuccess = createAction('[CreateFeature] Get Data Success', props<{data: any}>());
export const GetCfDataFail = createAction('[CreateFeature] Get Data Fail', props<{error: any}>());