import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  mode = new FormControl('push');
  
  events: string[] = [];
   opened: boolean;
  

  

  //  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));


  constructor(public authservice: AuthService, public router: Router) { }

  ngOnInit() {
    }
    navbarOpen = false;

    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen;
    }
    logout(){
    this.authservice.logout();
    }
  
}
