import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Index } from './pages/index';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';

const routes: Routes = [
  {path:"" , component:Index},
  {path:"about" , component:About},
  {path:"contact" , component:Contact},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
