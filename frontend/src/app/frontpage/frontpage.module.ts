import { NgModule } from '@angular/core';
import { SharedModule } from "../../settings/shared/shared.module";
import { FrontpageComponent } from "./frontpage.component";
import { RouterModule } from "@angular/router";
import { frontpageRouting } from "./frontpage-routing";

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(frontpageRouting),
  ],
  exports: [],
  declarations: [
    FrontpageComponent
  ]
})
export class FrontpageModule { }
