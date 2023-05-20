import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturedRoutingModule } from './featured-routing.module';
import { FeaturedComponent } from './featured.component';


@NgModule({
  declarations: [
    FeaturedComponent
  ],
  imports: [
    CommonModule,
    FeaturedRoutingModule
  ]
})
export class FeaturedModule { }
