import { Component } from '@angular/core';
import { Global } from '../../services/global';

@Component({
  selector: 'app-result',
  standalone: false,
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
    let obj = {
      keyword : history.state.searchWord
    }
    this.global.filterProducts(0 , 20 , obj).subscribe({
      next: (res)=>{
        this.products = res.data
        this.total = res.count
        console.log(this.products)
      }
    })
  }


  pageChanged(e : any){

  }

  //   get paginatedProducts() {
  //   const start = (this.p - 1) * this.itemsPerPage;
  //   return this.products.slice(start, start + this.itemsPerPage);
  // }

}
