import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  userName = null

  model = {
    name : null,
    email:null
  }

  // h2Text = "Frontend Track"
  h2Text = signal("Frontend Track")

  showAlert = signal(true)

  num = signal(1)




  handleClick(){
    console.log(this.model)
  }

  handleChange(){
    this.h2Text.set("Depi - cls")
  }

  handleShowAlert(){
    this.showAlert.set(false)
  }

  handleChangeNum(n : any){
    this.num.set(n)
  }

}
