import { Component } from '@angular/core';
import {SidebarService} from "../sidebar/sidebar.service";
import {AuthService} from "../../../core/auth";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  bullion = '12'
  followers = '123'
  nuggets = '1234'

  constructor(
    private sidenav: SidebarService,
    public authService: AuthService
  ) {}

  toggleSidenav() {
    this.sidenav.toggle();
  }

  navigateHome() {
    this.sidenav.close();
  }
}
