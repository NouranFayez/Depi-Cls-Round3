import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Global {
  firstName = "Zein"

  getFullName(firstName: string , lastName : string){
    return `${firstName} ${lastName}`

  }
}
