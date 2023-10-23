import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="d-flex justify-content-center"><img style="width: 500px;" src="../../../assets/angular-icon.svg" alt=""></div>`
})
export class LandingPageComponent {

}
