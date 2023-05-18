import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { ExtraOptions, PreloadAllModules, RouterModule } from "@angular/router";
import { appRoutes } from "./app-routing";
import { HttpClientModule } from "@angular/common/http";
import { CoreModule } from "../settings/core/core.module";
import { LayoutModule } from "../settings/theme/layout/layout.module";
import { ThemeModule } from "../settings/theme/theme.module";

const router: ExtraOptions = {
  useHash: false,
  preloadingStrategy: PreloadAllModules,
  scrollPositionRestoration: 'enabled'
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, router),
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,

    CoreModule.forRoot(),
    LayoutModule.forRoot(),
    ThemeModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
