import { Route } from "@angular/router";
import {LayoutComponent} from "../settings/theme/layout/layout.component";

export const appRoutes: Route[] = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', // PUBLIC ROUTING
    component: LayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./frontpage/frontpage.module').then(m => m.FrontpageModule)}
    ]
  },
  { path: '', // AUTH ROUTING
    component: LayoutComponent,
    children: []
  },
  { path: '', // AUTHENTICATED ROUTING
    canActivate: [],
    component: LayoutComponent,
    children: []
  },
];
