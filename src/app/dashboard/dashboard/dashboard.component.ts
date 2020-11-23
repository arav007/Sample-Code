import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../../data-sharing.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router,  private dataSharingService: DataSharingService) { }

  ngOnInit() {
  }

  logout() {
    localStorage.clear();
    this.dataSharingService.isUserLoggedIn.next(false);
    this.router.navigate(['/login']);
  }

}
