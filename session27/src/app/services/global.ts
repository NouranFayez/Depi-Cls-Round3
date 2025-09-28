import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Global {
  // http : HttpClient

  userName = null

  isLogin = (localStorage.getItem('token')) ? true : false

  constructor(private http : HttpClient){

  }

  getPosts():Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
    // return this.http.get("https://jsonplaceholder.ty")
  }

  getSinglePost(id : any):Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }

//   all products ==> https://dummyjson.com/products
//  single product ==>  https://dummyjson.com/products/6

login(body:any):Observable<any>{
  return this.http.post('https://full.faedg.com/public/api/client/customer_login' , body )
}

profile():Observable<any>{
  return this.http.get('https://full.faedg.com/public/api/client/profile')
}

  
}



// all products with search input
// single product ==> images , name , out/in stock , category , price , reviews(name , comment) , sku