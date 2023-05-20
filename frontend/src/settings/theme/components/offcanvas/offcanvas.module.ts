import { NgModule } from '@angular/core';
import { OffcanvasComponent } from './offcanvas.component';
import { OffcanvasService } from "./offcanvas.service";
import { SharedModule } from "../../../shared/shared.module";
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { BottomNavbarComponent } from './bottom-navbar/bottom-navbar.component';



@NgModule({
  imports: [SharedModule],
  exports: [OffcanvasComponent],
  declarations: [OffcanvasComponent, TopNavbarComponent, BottomNavbarComponent],
  providers: [OffcanvasService],
})
export class OffcanvasModule { }
