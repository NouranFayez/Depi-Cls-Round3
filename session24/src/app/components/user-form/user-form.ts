import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-form',
  standalone: false,
  templateUrl: './user-form.html',
  styleUrl: './user-form.css'
})
export class UserForm {

  @Output() userData = new EventEmitter()

  data = {
    name : null,
    email : null
  }


  handleClick(){
    console.log(this.data)

    const user = {
      name : this.data.name,
      email : this.data.email
    }
    this.userData.emit(user)
  }

}
