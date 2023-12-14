import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

import {RegisterComponent} from "../../components/register/register.component";

@Component({
  selector: 'app-register.page',
  template: '',
})
export class RegisterPageComponent {

  constructor(private matDialog: MatDialog) {
    this.matDialog.open(RegisterComponent, {
      disableClose: true,
      hasBackdrop: false,
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms'
    })
  }

}
