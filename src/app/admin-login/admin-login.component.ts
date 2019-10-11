import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

constructor(private formBuilder: FormBuilder,
  private route: ActivatedRoute,
  private router: Router,
  private _authService: AuthService) { }

ngOnInit() {
  this.loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
});

// get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}

get f() { return this.loginForm.controls; }

loginAdmin() {
     this.submitted = true;
    //  const admindetail = JSON.stringify({ 
    //   "email": this.f.username.value,
    //   "password": this.f.password.value,
    //   "type":'a',
    //   });

     const admindetail = new HttpParams()
     .set(`email`, this.f.username.value)
     .set(`password`, this.f.password.value)
     .set(`type`, 'a');
    //  const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    //  alert(JSON.stringify(admindetail));
     this._authService.loginAdmin(admindetail.toString())
    .subscribe(res => {
      this.loading = false;
      console.log(res);
      localStorage.setItem('token', JSON.stringify(res));
      alert('welcome to admin.');
      this.router.navigate(['/admin']);
     },
     (err) => {
      console.log(err);
      this.loading = false;
              }
    );
    // {alert('invalid user'); }
}
}
