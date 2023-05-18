import { ModuleWithProviders, NgModule } from "@angular/core";
import { AuthService } from "./auth.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "../http/http.interceptor";
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  imports: [
    SharedModule,
  ],
  exports: [],
  declarations: [],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule : AuthModule,
      providers: [
        AuthService,
        {
          provide : HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi   : true
        }
      ]
    }
  }
}
