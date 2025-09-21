import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './shared/navbar/navbar';
import { Index } from './pages/index/index';
import { Posts } from './pages/posts/posts';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { SinglePost } from './pages/single-post/single-post';

@NgModule({
  declarations: [
    App,
    Navbar,
    Index,
    Posts,
    SinglePost
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HttpClientModule // old version
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
