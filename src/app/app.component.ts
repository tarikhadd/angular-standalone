import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent
  ],
  template: `
    <app-header></app-header>
    <div style="height: calc(100vh - 60px); background: rgb(88, 88, 88);display: flex; justify-content: center; align-items: center;">
      <router-outlet></router-outlet>
    </div>
`
})
export class AppComponent {
  title = 'standalone';
}
