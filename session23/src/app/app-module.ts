import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './shared/navbar/navbar';
import { Index } from './pages/index/index';
import { Posts } from './pages/posts/posts';
import { Services } from './pages/services/services';
import { SinglePost } from './pages/single-post/single-post';

@NgModule({
  declarations: [
    App,
    Navbar,
    Index,
    Posts,
    Services,
    SinglePost
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
