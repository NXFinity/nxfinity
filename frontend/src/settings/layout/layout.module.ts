import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import {SharedModule} from "../shared/shared.module";
import {ToolbarComponent} from "./assets/toolbar/toolbar.component";
import {SidebarComponent} from "./assets/sidebar/sidebar.component";
import {NbUserModule} from "@nebular/theme";

const COMPONENTS = [
  ToolbarComponent,
  SidebarComponent,
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
