import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutes } from "./app-routing.module";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { ThemeModule } from "../settings/theme/theme.module";
import { ExtraOptions, PreloadAllModules, RouterModule } from "@angular/router";
import { CoreModule } from "../settings/core/core.module";
import { LayoutModule } from "../settings/layout/layout.module";


const router: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
  scrollPositionRestoration: 'enabled'
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, router),

    LayoutModule,

    ThemeModule.forRoot(),
    CoreModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
