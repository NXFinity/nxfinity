import { NgModule } from '@angular/core';
import { BlogComponent } from './blog.component';
import { SharedModule } from "../../settings/shared/shared.module";
import { RouterModule } from "@angular/router";
import { blogRoutes } from "./blog-routing.module";


@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(blogRoutes),
  ]
})
export class BlogModule { }
