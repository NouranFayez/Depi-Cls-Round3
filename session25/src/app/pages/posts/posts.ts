import { Component } from '@angular/core';
import { Global } from '../../services/global';

@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.html',
  styleUrl: './posts.css'
})
export class Posts {

  posts : any = []

  constructor(private global : Global){}

  ngOnInit(){
  
    console.log(this.global.getPosts())
    this.global.getPosts().subscribe({
      next : (res) => {
        console.log(res)
        this.posts = res
      },
      error : (err)=>{
        console.log(err)

      },
      complete: ()=>{
        console.log('completed')
      }
    })
  }

}
