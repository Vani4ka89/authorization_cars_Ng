import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../../../services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  error = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this._initForm();
  }

  _initForm(): void {
    this.form = this.fb.group({
      username: [''],
      password: ['']
    })
  }

  login(): void {
    this.authService.login(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['cars'])
      },
      error: () => {
        console.log(this.error);
        this.error = true;
      },
      complete: () => {
        this.error = false;
      }
    })
  }
}
