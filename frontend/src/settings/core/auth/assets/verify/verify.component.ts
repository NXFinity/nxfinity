import { ChangeDetectorRef, Component, HostBinding, OnInit } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { NbGlobalPhysicalPosition } from "@nebular/theme";
import { AuthService } from "../../auth.service";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {
  form!: UntypedFormGroup;

  private index: number = 0;

  @HostBinding('class')
  classes = 'example-items-rows';

  inputType = 'password';
  visible = false;

  positions = NbGlobalPhysicalPosition;

  constructor(readonly authService: AuthService,
              private router: Router,
              private formBuilder: UntypedFormBuilder,
              private changeDirection: ChangeDetectorRef,
              private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      verifyUser: ['', Validators.required],
    });
  }

  verify() {

  }
}
