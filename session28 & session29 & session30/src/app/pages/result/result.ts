import { Component } from '@angular/core';
import { Global } from '../../services/global';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-result',
  // standalone: false,
  imports:[NgxPaginationModule],
  templateUrl: './result.html',
  styleUrl: './result.css'
})
export class Result {
  products : any =[]
  p : number = 1
  total : any 
itemsPerPage : any=10
  constructor(private global : Global){}
  


  ngOnInit(){
    console.log(history.state)
   this.showData(0)
  }


  pageChanged(e : any){
    console.log(e)
    this.p = e
    this.showData(this.p-1)
  }


  showData(page:any){
   
       let obj = {
      keyword : history.state.searchWord
    }
        this.global.filterProducts(page , 15 , obj).subscribe({
      next: (res)=>{
        this.products = res.data
        this.total = res.count
        console.log(this.products)
      }
    })
  }



}
