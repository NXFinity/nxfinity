import { ModuleWithProviders, NgModule } from '@angular/core';
import { SharedModule } from "../shared/shared.module";
import { IconModule } from "./icon/icon.module";

@NgModule({
  imports: [
    SharedModule,
    IconModule,
  ],
  exports: [
    IconModule,
  ],
  declarations: []
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [],
    }
  }
}
