import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

import {LoginComponent} from "../../components/login/login.component";

@Component({
  selector: 'app-login.page',
  template: '',
})
export class LoginPageComponent {

  constructor(private matDialog: MatDialog) {
    this.matDialog.open(LoginComponent, {
      disableClose: true,
      hasBackdrop: false,
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms'
    })
  }
}
