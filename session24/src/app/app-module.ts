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

@NgModule({
  declarations: [
    App,
    Navbar,
    Index,
    Posts,
    Products,
    About,
    Card
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
