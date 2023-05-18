import { ModuleWithProviders, NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [SharedModule],
  exports: [SharedModule],
  declarations: [],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [],
    };
  }
}
