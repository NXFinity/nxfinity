import { ModuleWithProviders, NgModule } from '@angular/core';
import { SinglePageComponent } from "./layouts/single-page/single-page.component";
import { LayoutComponent } from "./layout.component";
import { SharedModule } from "../../shared/shared.module";

const layoutComponents = [
  SinglePageComponent
];
@NgModule({
  imports: [
    SharedModule,
  ],
  exports: [
    ...layoutComponents
  ],
  declarations: [
    LayoutComponent,
    ...layoutComponents
  ]
})
export class LayoutModule {
  static forRoot(): ModuleWithProviders<LayoutModule> {
    return {
      ngModule: LayoutModule,
      providers: []
    };
  }
}
