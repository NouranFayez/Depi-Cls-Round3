import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Index } from './pages/index';
import { Posts } from './pages/posts/posts';
import { SinglePost } from './pages/single-post/single-post';
import { Login } from './pages/login/login';

const routes: Routes = [
  {path: "" , component:Index},
  {path: "posts" , component:Posts},
  {path: "posts/:postId" , component:SinglePost},
  {path: "login" , component:Login},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
