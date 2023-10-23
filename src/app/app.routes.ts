import { Route } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/standard/standard.reducer';
import { DataService } from './core/services/data.service';
import { provideEffects } from '@ngrx/effects';
import { StandardEffects } from './state/standard/standard.effects';
import { NgrxComponent } from './components/ngrx/ngrx-standard/ngrx-standard.component';
import { NgrxCreateFeatureComponent } from './components/ngrx/ngrx-create-feature/ngrx-create-feature.component';
import { cfReducer } from './state/createFeature/create-feature.reducer';
export const appRoutes: Route[] = [
  {
    path: 'lazy',
    loadComponent: () => import('./components/standalone/container.component').then(m => m.ContainerComponent)
  },

  {
    path: 'ngrx-standard',
    component: NgrxComponent,
    providers: [
      importProvidersFrom(StoreModule.forFeature('jokes', reducer)), 
      provideEffects([StandardEffects]),
      DataService,
    ],
  },

  {
    path: 'ngrx-create-feature',
    component: NgrxCreateFeatureComponent,
    providers: [
      importProvidersFrom(StoreModule.forFeature('cfJokes', cfReducer)), 
      provideEffects([StandardEffects]),
      DataService,
    ],
  },

  {
    path: '',
    loadComponent: () => import('./components/standalone/landing-page.component').then(m => m.LandingPageComponent)
  },

  {
    path: '**',
    redirectTo: '',
  },
];
