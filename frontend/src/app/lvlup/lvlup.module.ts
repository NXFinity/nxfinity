import { NgModule } from '@angular/core';
import { LvlupComponent } from './lvlup.component';
import { SharedModule } from "../../settings/shared/shared.module";
import { RouterModule } from "@angular/router";
import { lvlupRouting } from "./lvlup-routing.module";


@NgModule({
  declarations: [
    LvlupComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(lvlupRouting),
  ]
})
export class LvlupModule { }
