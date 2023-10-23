import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/standalone/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {  StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [
    
  ],
  imports: [
    RouterOutlet,
    HeaderComponent,
    HttpClientModule,
    CommonModule,
    StoreModule,
    EffectsModule,
    HttpClientModule,
  ],
  template: `
    <app-header></app-header>
    <div style="height: calc(100vh - 60px); overflow: hidden; background: rgb(88, 88, 88);display: flex; justify-content: center; align-items: center; margin-top: 60px;">
      <div class="h-100 w-100 py-5" style="overflow: auto;">
        <router-outlet></router-outlet>
      </div>
    </div>
`
})
export class AppComponent {
  title = 'standalone';
}
