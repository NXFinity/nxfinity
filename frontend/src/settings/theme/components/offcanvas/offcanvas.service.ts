import { Injectable } from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";

declare var bootstrap: any;


@Injectable({
  providedIn: 'root'
})
export class OffcanvasService {
  private drawer!: MatDrawer;

  setDrawer(drawer: MatDrawer) {
    this.drawer = drawer;
  }

  open() {
    this.drawer.open();
  }

  close() {
    this.drawer.close();
  }
}
