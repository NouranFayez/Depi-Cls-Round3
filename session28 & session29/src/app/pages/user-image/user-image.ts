import { Component } from '@angular/core';
import { Global } from '../../services/global';

@Component({
  selector: 'app-user-image',
  standalone: false,
  templateUrl: './user-image.html',
  styleUrl: './user-image.css'
})
export class UserImage {

  constructor(private global : Global){}
  imgPath : any = null

  handleChange(e:any){
    console.log(e)
    let img = e.target.files[0]
    let formDate = new FormData()
    formDate.append('image' , img)
    this.global.uploadImg(formDate).subscribe({
      next:(res)=>{
        console.log(res)
        this.imgPath = res.data.image
      }
    })
  }
  openFileInput(){
    let input : any = document.getElementById('uploadImg')
    input.click()
  }


}
