import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fist-component',
  standalone: true,
  imports: [CommonModule],
  template: `
    <style>
        div {
            &:hover {
                cursor: pointer;
            }
        }

        img {
          width: 100px;
        }
    </style>

    <div class="bg-warning h-100 w-100 d-flex flex-column justify-content-center align-items-center p-4">
        <h1 class="m-0">Hello from first component.</h1>
        <img src="../../assets/free-click-icon-2384-thumb.png">
    </div>
  `
})
export class FistComponent {
  @Output() click = new EventEmitter();

  onClick() {
    this.click.emit();
  }
}
