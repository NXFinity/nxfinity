import { Route } from "@angular/router";
import { LayoutComponent } from "../settings/theme/layout/layout.component";
import { AuthGuard } from "../settings/core/auth";

export const appRoutes: Route[] = [
  // { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'account' },
  {
    path: '',
    component: LayoutComponent,
    children: [

    ],
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'login', loadChildren: () => import('../settings/core/auth/assets/login/login.module').then(m => m.LoginModule) },
      { path: 'register', loadChildren: () => import('../settings/core/auth/assets/register/register.module').then(m => m.RegisterModule) },
      { path: 'verify', loadChildren: () => import('../settings/core/auth/assets/verify/verify.module').then(m => m.VerifyModule) },
    ],
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [

    ],
  }
];

