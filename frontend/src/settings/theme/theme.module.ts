import {ModuleWithProviders, NgModule, Optional, SkipSelf} from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";
import { VideoComponent } from "./components";
import { CountdownComponent } from './components/countdown/countdown.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { MATERIAL_SANITY_CHECKS } from "@angular/material/core";

const COMPONENTS = [
  VideoComponent,
  CountdownComponent,
  BreadcrumbsComponent
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
          // Disable 'theme' sanity check
          provide : MATERIAL_SANITY_CHECKS,
          useValue: {
            doctype: true,
            theme  : false,
            version: true
          }
        },
        {
          // Use the 'fill' appearance on Angular Material form fields by default
          provide : MAT_FORM_FIELD_DEFAULT_OPTIONS,
          useValue: {
            appearance: 'fill'
          }
        }
      ]
    };
  }

  constructor(@Optional() @SkipSelf() parentModule?: ThemeModule) {
    if ( parentModule ) {
      throw new Error('Theme has already been loaded. Import this module in the AppModule only.');
    }
  }
}
