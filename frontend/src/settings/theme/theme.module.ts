import { ModuleWithProviders, NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from "@angular/material/form-field";
import { VideoComponent } from "./components";

const COMPONENTS = [
  VideoComponent
];
@NgModule({
  imports: [SharedModule],
  exports: [SharedModule, ...COMPONENTS],
  declarations: [...COMPONENTS],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [
        {
          provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
          useValue: {
            appearance: 'fill'
          } as MatFormFieldDefaultOptions
        }
      ],
    };
  }
}
