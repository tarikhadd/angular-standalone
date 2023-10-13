import { Route } from '@angular/router';
import { ContainerComponent } from './components/container.component';
import { LandingPageComponent } from './components/landing-page.component';
export const appRoutes: Route[] = [
  {
    path: 'lazy',
    component: ContainerComponent
  },

  {
    path: '',
    component: LandingPageComponent,
  },

  {
    path: '**',
    redirectTo: '',
  },
];
