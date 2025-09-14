import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Index } from './pages/index';
import { Posts } from './pages/posts/posts';
import { Services } from './pages/services/services';
import { SinglePost } from './pages/single-post/single-post';

const routes: Routes = [
  {path:'' , component:Index},
  {path:'posts' , component:Posts},
  {path:'posts/:postId' , component:SinglePost},
  {path:'services' , component:Services},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
