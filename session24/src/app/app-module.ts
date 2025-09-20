import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './shared/navbar/navbar';
import { Index } from './pages/index/index';
import { Posts } from './pages/posts/posts';
import { Products } from './pages/products/products';
import { About } from './pages/about/about';
import { Card } from './components/card/card';
import { UsersList } from './pages/users-list/users-list';
import { UserForm } from './components/user-form/user-form';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Navbar,
    Index,
    Posts,
    Products,
    About,
    Card,
    UsersList,
    UserForm
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
