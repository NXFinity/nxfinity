import { ChangeDetectorRef, Component, HostBinding, OnInit } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { AuthService } from "../../auth.service";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
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
      username: ['demo', Validators.required],
      firstName: ['demo', Validators.required],
      lastName: ['demo', Validators.required],
      photoURL: ['https://i.postimg.cc/NGVSmTd5/nxie-logo.png', Validators.required],
      coverURL: ['https://i.postimg.cc/mDP8YS2k/twitter-banner.png', Validators.required],
      email: ['demo@demo.com', Validators.required],
      password: ['demodemo', Validators.required],
      passwordConfirm: ['demodemo', Validators.required],
    });
  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.changeDirection.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.changeDirection.markForCheck();
    }
  }

  register() {

  }
}
