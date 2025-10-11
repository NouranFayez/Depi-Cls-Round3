import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './shared/navbar/navbar';
import { Index } from './pages/index/index';
import { Login } from './pages/login/login';
import { Posts } from './pages/posts/posts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { authInterceptor } from './interceptor/auth-interceptor';
import { UserImage } from './pages/user-image/user-image';
import { Error } from './pages/error/error';
import { Parent } from './pages/parent/parent';
import { Child } from './pages/child/child';

@NgModule({
  declarations: [
    App,
    Navbar,
    Index,
    Login,
    Posts,
    UserImage,
    Error,
    Parent,
    Child
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // CommonModule,
    // NgxPaginationModule,
    
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideAnimations()
  ],
  bootstrap: [App]
})
export class AppModule { }
