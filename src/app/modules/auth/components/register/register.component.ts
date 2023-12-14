import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

import {AuthService} from "../../../../services";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  error = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this._initForm()
  }

  _initForm(): void {
    this.form = this.fb.group({
      username: [''],
      password: ['']
    })
  }

  register(): void {
    this.authService.register(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['auth', 'login'])
      },
      error: () => {
        console.log(this.error);
        this.error = true;
      },
      complete: () => {
        this.error = false
      }
    })
  }
}
