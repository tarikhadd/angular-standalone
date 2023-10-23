import { createAction, props } from '@ngrx/store';

export const GetData = createAction('[Standard] Get Data');
export const GetDataSuccess = createAction('[Standard] Get Data Success', props<{data: any}>());
export const GetDataFail = createAction('[Standard] Get Data Fail', props<{error: any}>());