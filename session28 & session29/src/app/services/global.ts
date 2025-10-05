import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Global {
  baseUrl = "https://full.faedg.com/public/api"

  constructor(private http : HttpClient){}

  filterProducts(page : any , limit : any , body:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/search-by-keyword/${page}/${limit}` , body)
  }

  login(body:any):Observable<any>{
    return this.http.post(`https://full.faedg.com/public/api/client/customer_login` , body)
  }
  uploadImg(body:any):Observable<any>{
    return this.http.post(`https://full.faedg.com/public/api/client/update-profile-image` , body)
  }
  
}
