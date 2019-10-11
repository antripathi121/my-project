import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( public auth: AuthService, public router: Router) { }
  

  
  // signupForm:FormGroup;

  signupForm=new FormGroup({
    id:new FormControl(''),
    fname:new FormControl(''),
    lname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });
   
  initSignupForm() {
    
  }
  ngOnInit() {
    
    this.initSignupForm();
  }

  
  get id() { return this.signupForm.get('id'); }
  get fname() { return this.signupForm.get('fname'); }
  get lname() { return this.signupForm.get('lname'); }
  get username() { return this.signupForm.get('username'); }
  get email() { return this.signupForm.get('email'); }
  get password() { return this.signupForm.get('password'); }


  loading:boolean=false;
  showAllErrors:boolean= false;

  
  signupUser(){
    console.log(34);
    if(this.signupForm.valid){
      this.loading = true;
    
      const signupCredentials = JSON.stringify({
        "id":this.id.value,
        "first_name":this.fname.value,
        "last_name":this.lname.value,
        "username":this.username.value,
        "email": this.email.value,
        "password":this.password.value,
     
    });


    this.auth.SignUp(signupCredentials)
    .subscribe(res =>{
      this.loading = false;
      console.log(res)
      localStorage.setItem('userDetails', JSON.stringify(res))
      alert('Your have registered successfully.');
      this.router.navigate(['login']);
      //document.getElementById('signup-close').click();
     },
     (err) => {
       console.log(err)
      this.loading = false;
              }
    )
    }
  }
  
}
