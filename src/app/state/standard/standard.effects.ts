import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GetData, GetDataFail, GetDataSuccess } from './standard.actions';
import { catchError, map, mergeMap, of, switchMap, tap, withLatestFrom } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';



@Injectable()
export class StandardEffects {

  constructor(private actions$: Actions, private dataService: DataService) {}

    loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Standard] Get Data'),
      mergeMap(() => this.dataService.getData()
        .pipe(
          map(data => ({ type: '[Standard] Get Data Success', data: data.result })),
          catchError(() => of({ type: '[Standard] Get Data Error' }))
        )
      )
    )
  );

  loadRestData$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[CreateFeature] Get Data'),
      mergeMap(() => this.dataService.getCreateFeatureData()
        .pipe(
          map(data => {
            return ({ type: '[CreateFeature] Get Data Success', data: data.result })
          }),
          catchError(() => of({ type: '[CreateFeature] Get Data Error' }))
        )
      )
    )
  );
}