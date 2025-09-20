import { Component } from '@angular/core';

@Component({
  selector: 'app-users-list',
  standalone: false,
  templateUrl: './users-list.html',
  styleUrl: './users-list.css'
})
export class UsersList {

  users : any = []
  handleEvent(e : any){
    console.log(e)
    this.users.push(e)

  }

}
