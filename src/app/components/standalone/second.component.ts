import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-second-component',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-{{color}} h-100 w-100 d-flex justify-content-center align-items-center">
        <h1 class="m-0">Hello from second component.</h1>
    </div>
  `
})
export class SecondComponent {
  @Input() color: any;
}
