import {Component} from '@angular/core';
import {NavigationStart, Router} from "@angular/router";
import {filter} from "rxjs";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {

  constructor(private router: Router, private matDialog: MatDialog) {
    this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe(() => {
      this.matDialog.closeAll()
    })
  }
}
