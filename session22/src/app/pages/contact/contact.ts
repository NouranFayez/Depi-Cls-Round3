import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  inputValue : string = ""

  handleInput(e :any){
    // console.log(e)
    console.log(e.target.value)
    this.inputValue = e.target.value
  }

  handleInputEvent(ele : any){
    console.log(ele)
    this.inputValue = ele.value
  }

  handleSearch(){
    console.log('search....')
  }

}
