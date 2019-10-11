import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', 
  // 'style.css', 'dashboard.css'
]
})
export class AppComponent {
  
//  admin:boolean;
  constructor(public router: Router){}
  ngOnInit() {
    // if(this.router.url.includes('admin')){
    //   this.admin= false;
    // }else
    // {this.admin= true;}
    
  }
}