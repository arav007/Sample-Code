import { Component } from '@angular/core';
import { DataSharingService } from './data-sharing.service';
import { Inject } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isUserLoggedIn: boolean = false;
  userData: any;

  constructor(public ds: DataSharingService, private auth: AuthService) {
    this.ds.isUserLoggedIn.subscribe(value => {
      if (value) {
        this.ds.isUserLoggedIn.next(true);
      } else if (this.auth.CheckLoginStatus) {
        this.ds.isUserLoggedIn.next(true);
      }
    });

    this.ds.isUserLoggedIn.subscribe(value => {
      this.isUserLoggedIn = value;
    });
  }
}
