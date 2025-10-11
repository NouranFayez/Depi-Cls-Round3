import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.html',
  styleUrl: './posts.css'
})
export class Posts {

  pageTitle : any 

  constructor(private activated : ActivatedRoute){}

  ngOnInit(){
    this.activated.data.subscribe({
      next:(res)=>{
        console.log(res)
        if(res['type'] == "posts") this.pageTitle = "Posts Page"
        else if(res['type'] == 'products') this.pageTitle = "Products page"

      }
    })
  }

}
