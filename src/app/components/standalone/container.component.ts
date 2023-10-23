import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FistComponent } from './fist-component.component';
import { SecondComponent } from './second.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [
    FistComponent,
    SecondComponent,
    CommonModule
  ],
  template: `
    <style>
      .col-6 {
        min-height: 600px;
        text-align: center;
    }
    </style>

    <div class="row w-100 m-0 py-3">
        <div class="col-6">
            <app-fist-component (click)="onClick()"></app-fist-component>
        </div>
        <div class="col-6">
            <app-second-component
            [color]="color ? 'light' : 'danger'"></app-second-component>
        </div>
    </div>
  `
})
export class ContainerComponent {
  color = true;

  onClick() {
    this.color = !this.color
  }

}
