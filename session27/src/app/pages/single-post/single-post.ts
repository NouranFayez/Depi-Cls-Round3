import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Global } from '../../services/global';

@Component({
  selector: 'app-single-post',
  standalone: false,
  templateUrl: './single-post.html',
  styleUrl: './single-post.css'
})
export class SinglePost {
  post : any = {}
  allPosts : any[] =[]

  constructor(private activated : ActivatedRoute , private global : Global){}

  ngOnInit(){
    let id = this.activated.snapshot.paramMap.get('postId')
    this.activated.paramMap.subscribe({
      next : (param)=>{
        console.log(`${param.get('postId')}`)
        // console.log(`param ==> ${param}`)
        this.global.getSinglePost(param.get('postId')).subscribe({
          next:(res)=>{
            console.log(res)
            this.post = res
          }
        })
      }
    })
    console.log(id)
    this.global.getPosts().subscribe({
      next: (res)=>{
        this.allPosts = res
      }
    })


  }

}
