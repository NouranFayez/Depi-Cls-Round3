import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Index } from './pages/index';
import { Login } from './pages/login/login';
import { Posts } from './pages/posts/posts';
import { Result } from './pages/result/result';
import { TestDatePicker } from './pages/test-date-picker/test-date-picker';
import { UserImage } from './pages/user-image/user-image';
import { canActivateGuard } from './guards/can-activate-guard';
import { canDeactivateGuard } from './guards/can-deactivate-guard';
import { Error } from './pages/error/error';
import { Parent } from './pages/parent/parent';

const routes: Routes = [
  {path:'' , component:Index},
  {path:'login' , component:Login , canActivate:[canActivateGuard] , canDeactivate:[canDeactivateGuard]},
  {path:'posts' , component:Posts , data:{type : 'posts'}},
  {path:'products' , component:Posts , data:{type : 'products'}},
  {path:'result' , component:Result},
  {path:'user-image' , component:UserImage},
  {path:'datePicker' , component:TestDatePicker},
  {path:'parent' , component:Parent},
  {path:"**" , component : Error}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
