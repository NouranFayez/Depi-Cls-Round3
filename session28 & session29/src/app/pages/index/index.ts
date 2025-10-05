import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: false,
  templateUrl: './index.html',
  styleUrl: './index.css'
})
export class Index {

  model = {
    keyword : null
  }

  search: any = null

  constructor(private router : Router){}

  handleSearch(){
    this.router.navigateByUrl("/result" , 
      {state : {searchWord : this.search}})
  }

}
