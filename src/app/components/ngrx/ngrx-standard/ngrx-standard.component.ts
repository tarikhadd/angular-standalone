import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap'
import { Store } from '@ngrx/store';
import { GetData } from 'src/app/state/standard/standard.actions';
import { getStanadrdData } from 'src/app/state/standard/standard.selectors';
import { StandardState } from 'src/app/state/standard/standard.reducer';
import { Observable } from 'rxjs';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx-standard.component.html',
  standalone: true,
  imports: [
    CommonModule,
    NgbPaginationModule,
    StoreDevtoolsModule 
  ],
})
export class NgrxComponent {
  page = 1;
  pageSize = 5;
  values$: Observable<[{value: string}]>

  constructor(private  readonly store: Store<StandardState>){}

  ngOnInit() {

    this.store.dispatch(GetData());
    this.values$ = this.store.select(getStanadrdData);

  }

}
