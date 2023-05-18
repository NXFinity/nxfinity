import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import {SharedModule} from "../shared/shared.module";
import {ToolbarComponent} from "./assets/toolbar/toolbar.component";
import {SidebarComponent} from "./assets/sidebar/sidebar.component";

const COMPONENTS = [
  ToolbarComponent,
  SidebarComponent,
];
@NgModule({
  imports: [
    SharedModule,
  ],
  exports: [...COMPONENTS],
  declarations: [LayoutComponent, ...COMPONENTS],
})
export class LayoutModule { }
