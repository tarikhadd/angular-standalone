import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterModule,
    CommonModule
  ],
  template: `

    <style>
      .not-link {
        &:hover {
          cursor: pointer;
        }
      }

      .nav {
        z-index: 100;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
      }

    </style>

    <ul class="nav navbar-dark bg-dark text-light" style="height: 60px;">
        <li class="nav-item d-flex align-items-center not-link" [routerLink]="''">
            <img class="mx-3" style="width: 40px;" src="../../../assets/angular-icon.svg" alt="">
            <h3 class="h-100 d-flex align-items-center m-0 text-light">STANDALONE</h3>
        </li>

        <li class="nav-item">
            <a 
            [routerLink]="'lazy'"
            routerLinkActive="text-warning"
            style="color: white;"
            class="ms-3 nav-link h-100 d-flex align-items-center">
                <h5 class="m-0">Lazy Load</h5>
            </a>
        </li>

        <li class="nav-item">
            <a 
            [routerLink]="'ngrx-standard'"
            routerLinkActive="text-warning"
            style="color: white;"
            class="me-3 nav-link h-100 d-flex align-items-center p-0">
                <h5 class="m-0">NGRX Standard</h5>
            </a>
        </li>

        <li class="nav-item">
            <a 
            [routerLink]="'ngrx-create-feature'"
            routerLinkActive="text-warning"
            style="color: white;"
            class="me-3 nav-link h-100 d-flex align-items-center p-0">
                <h5 class="m-0">NGRX Create Feature</h5>
            </a>
        </li>
    </ul>
  `
})
export class HeaderComponent {

}
