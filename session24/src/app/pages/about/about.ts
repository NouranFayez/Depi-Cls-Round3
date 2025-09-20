import { Component } from '@angular/core';
import { Global } from '../../services/global';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

  constructor(public global : Global){}

  handleChange(){
    this.global.firstName = "Tamer"

  }

}
