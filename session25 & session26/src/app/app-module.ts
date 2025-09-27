import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './shared/navbar/navbar';
import { Index } from './pages/index/index';
import { Posts } from './pages/posts/posts';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { SinglePost } from './pages/single-post/single-post';
import { Login } from './pages/login/login';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Navbar,
    Index,
    Posts,
    SinglePost,
    Login
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    // HttpClientModule // old version
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
