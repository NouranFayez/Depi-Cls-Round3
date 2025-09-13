import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  standalone: false,
  templateUrl: './index.html',
  styleUrl: './index.css'
})
export class Index {

  title = "Frontend"
  num : number = 10
  num2 : number = 20
  imagePath : string = "images/natural.jpg"
  inputType = "password"
  placeholder = "enter your password"
  divText = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet id vel eveniet doloribus deserunt ratione alias
        quis aperiam, nobis atque.`

  h3Tag = `<h3 class="text-danger">Frontend track</h3>`      
  divClass = "col-4 bg-secondary-subtle border border-primary border-3"

  getName(firstName : string , lastName : string){
    return `${firstName} ${lastName}`
  }

  handleClick(){
    this.divClass = "col-8 bg-primary-subtle"
  }

}
