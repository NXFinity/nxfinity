import { ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { NgForm, UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../auth.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginNgForm!: NgForm;

  loginForm!: UntypedFormGroup;
  inputType = 'password';
  visible = false;

  constructor(readonly authService: AuthService,
              private router: Router,
              private formBuilder: UntypedFormBuilder,
              private changeDirection: ChangeDetectorRef,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['demo', Validators.required],
      email: ['demo@demo.com', [Validators.required, Validators.email]],
      password: ['demodemo', Validators.required],
      rememberMe: ['']
    })
  }

  login(): void {

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
}
