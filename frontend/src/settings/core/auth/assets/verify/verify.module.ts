import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerifyRoutingModule } from './verify-routing.module';
import { VerifyComponent } from './verify.component';
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatTooltipModule } from "@angular/material/tooltip";
import { ReactiveFormsModule } from "@angular/forms";
import { ThemeModule } from "../../../../theme/theme.module";


@NgModule({
  declarations: [
    VerifyComponent
  ],
  imports: [
    CommonModule,
    VerifyRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    ReactiveFormsModule,
    ThemeModule
  ]
})
export class VerifyModule { }
