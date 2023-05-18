import { ModuleWithProviders, NgModule } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { LayoutComponent } from "./layout.component";
import { ThemeModule } from "../theme.module";

@NgModule({
  imports: [
    SharedModule,
    ThemeModule,
  ],
  exports: [],
  declarations: [
    LayoutComponent
  ],
})
export class LayoutModule {
  static forRoot(): ModuleWithProviders<LayoutModule> {
    return {
      ngModule: LayoutModule,
      providers: [],
    }
  }
}
