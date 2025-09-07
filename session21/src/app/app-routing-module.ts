import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';



const routes: Routes = [
  // www.abc.com
  {path:"" , component: Home},
  // www.abc.com/about
  {path:"about" , component: About},
  // www.abc.com/contact
  {path:"contact" , component: Contact},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
