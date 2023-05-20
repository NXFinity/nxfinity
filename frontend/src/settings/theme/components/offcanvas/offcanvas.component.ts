import { Component } from '@angular/core';
import {OffcanvasService} from "./offcanvas.service";

@Component({
  selector: 'app-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.scss']
})
export class OffcanvasComponent {
  constructor(public offcanvasService: OffcanvasService) { }
}
