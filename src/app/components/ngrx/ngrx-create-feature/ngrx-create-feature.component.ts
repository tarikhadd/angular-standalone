import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { selectCfJokes } from '../../../state/createFeature/create-feature.reducer';
import { Store } from '@ngrx/store';
import { GetCfData } from 'src/app/state/createFeature/create-feature.actions';
import { Observable } from 'rxjs';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@Component({
  selector: 'app-ngrx-create-feature',
  standalone: true,
  imports: [CommonModule, NgbPaginationModule, StoreDevtoolsModule ],
  templateUrl: './ngrx-create-feature.component.html'
})
export class NgrxCreateFeatureComponent {
  page = 1;
  pageSize = 5;
  values$: Observable<[{value: string}]>
  isLoading$: Observable<boolean>;

  constructor(private store: Store){}

  ngOnInit() {
    this.store.dispatch(GetCfData());
    this.values$ = this.store.select(selectCfJokes);
  }
}
