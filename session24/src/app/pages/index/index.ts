import { Component } from '@angular/core';
import { Global } from '../../services/global';

@Component({
  selector: 'app-index',
  standalone: false,
  templateUrl: './index.html',
  styleUrl: './index.css'
})
export class Index {
  

  constructor(public global : Global){
    console.log(this.global.firstName)

  }
}
