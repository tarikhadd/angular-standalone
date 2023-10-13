import { Route } from '@angular/router';
import { ContainerComponent } from './components/container.component';
import { LandingPageComponent } from './components/landing-page.component';
export const appRoutes: Route[] = [
  {
    path: 'lazy',
    loadComponent: () => import('./components/container.component').then(m => m.ContainerComponent)
  },

  {
    path: '',
    loadComponent: () => import('./components/landing-page.component').then(m => m.LandingPageComponent)
  },

  {
    path: '**',
    redirectTo: '',
  },
];
