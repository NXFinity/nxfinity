import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { SharedModule } from "../shared/shared.module";
import { ToolbarComponent } from "./assets/toolbar/toolbar.component";
import { SidebarComponent } from "./assets/sidebar/sidebar.component";
import { NbUserModule } from "@nebular/theme";
import { FooterComponent } from './assets/footer/footer.component';

const COMPONENTS = [
  ToolbarComponent,
  SidebarComponent,
  FooterComponent,
];
@NgModule({
    imports: [
        SharedModule,
        NbUserModule,
    ],
  exports: [...COMPONENTS],
  declarations: [LayoutComponent, ...COMPONENTS],
})
export class LayoutModule { }
