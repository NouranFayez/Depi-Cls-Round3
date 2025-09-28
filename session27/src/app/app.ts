import { Component, signal } from '@angular/core';
import { Global } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('session25');

  constructor(private global : Global){
    console.log('reload......')  
    this.global.profile().subscribe({
      next : (res)=>{
        console.log(res)
        this.global.userName = res.data.customer_first_name
      }
    })
  }
}
