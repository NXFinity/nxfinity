import { Component } from '@angular/core';

@Component({
  selector: 'app-single-page',
  styleUrls: ['./single-page.component.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed class="bg-transparent header">
        <app-header></app-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive start>
        <nb-sidebar-header></nb-sidebar-header>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer>
        <app-footer></app-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
})
export class SinglePageComponent {

}
