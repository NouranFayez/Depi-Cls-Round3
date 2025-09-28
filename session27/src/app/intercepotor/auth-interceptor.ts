import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Global } from '../services/global';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const global = inject(Global)
  let token = localStorage.getItem('token')
  if(localStorage.getItem('token')){
req = req.clone(
  {headers : req.headers.set("Authorization" , `Bearer ${token}` )}
)
  }
  return next(req);
};
