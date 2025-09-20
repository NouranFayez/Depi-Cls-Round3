import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Index } from './pages/index';
import { Posts } from './pages/posts/posts';
import { Products } from './pages/products/products';
import { About } from './pages/about/about';
import { UsersList } from './pages/users-list/users-list';

const routes: Routes = [
  {path:'' , component : Index},
  {path:'posts' , component : Posts},
  {path:'products' , component : Products},
  {path:'about' , component : About},
  {path:'users' , component : UsersList},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
