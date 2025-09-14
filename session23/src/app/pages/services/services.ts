import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  role = "admin"
  date = new Date()

  user = {
    name : "Zein Tamer Fayez",
    age : 10
  }


  constructor(){
    if(this.role == 'admin') console.log('welcome admin')
  }

  ngOnInit(){
    console.log('frontend')
  }




}
