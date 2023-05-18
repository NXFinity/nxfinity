import { Component } from '@angular/core';
import {SidebarService} from "../sidebar/sidebar.service";
import {AuthService} from "../../../core/auth";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  constructor(
    private sidenav: SidebarService,
    private authService: AuthService
  ) {}

  toggleSidenav() {
    this.sidenav.toggle();
  }

  navigateHome() {
    this.sidenav.close();
  }
}
