import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module'; //Needed for routing between pages
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { GetUserComponent } from './get-user/get-user.component';
import { PostUserComponent } from './post-user/post-user.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginComponent,
    HeaderComponent,
    GetUserComponent,
    PostUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
