import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <app-single-page>
      <router-outlet></router-outlet>
    </app-single-page>
  `,
})
export class LayoutComponent {

}
