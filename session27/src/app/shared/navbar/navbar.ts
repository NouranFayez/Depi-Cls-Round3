import { Component } from '@angular/core';
import { Global } from '../../services/global';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  constructor(public global : Global){}

  handleLogout(){
    localStorage.removeItem('token')
    this.global.isLogin = false
  }

}
