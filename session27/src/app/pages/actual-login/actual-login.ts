import { Component } from '@angular/core';
import { Global } from '../../services/global';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

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

  constructor(private global : Global , private toastr : ToastrService , private router : Router){
    if(localStorage.getItem('token')) this.router.navigateByUrl("")
  }
  // passwordMatch():boolean{
  //   return this.model.password === this.model.confirmPassword
  // }


  handleSubmit(form : NgForm){
    
    if(form.valid){
      console.log(form)
      this.global.login(this.model).subscribe({
        next : (res)=>{
          console.log(res)
          if(res.status == "Success"){
            this.toastr.success('login Successfully')

            // this.router.navigateByUrl("/posts")
            this.router.navigateByUrl("/")
            this.router.navigateByUrl("")
            localStorage.setItem('token' , res.data.token)
            this.global.userName = res.data.first_name
            this.global.isLogin = true
          }
        },
        error : (err)=>{
          console.log(err.error.message)
          this.toastr.error(err.error.message)
        }
      }
      )

    }

  }

}
