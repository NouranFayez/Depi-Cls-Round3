import { Component } from '@angular/core';
import { Global } from '../../services/global';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-actual-login',
  standalone: false,
  templateUrl: './actual-login.html',
  styleUrl: './actual-login.css'
})
export class ActualLogin {

  
  model = {
    // name:null,
    email: null,
    password:null,
    // confirmPassword : null
  }

  constructor(private global : Global){}
  // passwordMatch():boolean{
  //   return this.model.password === this.model.confirmPassword
  // }


  handleSubmit(form : NgForm){
    
    if(form.valid){
      console.log(form)
      this.global.login(this.model).subscribe({
        next : (res)=>{
          console.log(res)
        }
      }
      )

    }

  }

}
