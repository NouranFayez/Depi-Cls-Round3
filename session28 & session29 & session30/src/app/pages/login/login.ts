import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Global } from '../../services/global';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loginForm = new FormGroup({
    email :new FormControl("nouran@email.com" , [Validators.required , Validators.email , Validators.minLength(10)]),
    password : new FormControl(null , [Validators.required]) //  Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")
  })
  isSubmitted = false

  get emailControl(){
    return this.loginForm.controls.email
  }

  get loginControls (){
    return this.loginForm.controls
  }

  constructor(private global : Global , private router : Router){
    // if(localStorage.getItem('token')) this.router.navigateByUrl('/')
   
  }


  handleSubmit(){
    this.isSubmitted = true
    if(this.loginForm.valid){
      console.log(this.loginForm)
      this.global.login(this.loginForm.value).subscribe({
        next : (res)=>{
          console.log(res)
          localStorage.setItem('token' , res.data.token)
        }
      })
    }
    else {
      console.log('invalid')
    }
  }

}
