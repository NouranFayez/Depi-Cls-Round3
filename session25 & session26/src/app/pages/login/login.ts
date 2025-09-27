import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {


  currentDate = new Date()

  model = {
    name:null,
    email: null,
    password:null,
    confirmPassword : null
  }

  passwordMatch():boolean{
    return this.model.password === this.model.confirmPassword
  }


  handleSubmit(form : NgForm){
    console.log(form)

  }

}
