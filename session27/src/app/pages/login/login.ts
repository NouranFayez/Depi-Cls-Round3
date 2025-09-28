import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Global } from '../../services/global';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private global : Global , public toastr: ToastrService){}
  passwordMatch():boolean{
    return this.model.password === this.model.confirmPassword
  }


  handleSubmit(form : NgForm){
    
    if(form.valid){
      console.log(form)
      this.global.login(this.model).subscribe({
        next : (res)=>{
          // console.log
        }
      }
      )

    }

  }

}
