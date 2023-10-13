import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  template: `<h1 class="text-light m-0">This is standalone component.</h1>`
})
export class LandingPageComponent {

}
