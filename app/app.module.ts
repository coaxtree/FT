import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }   from './app.component';
import { routing }        from './app.routing';
import { AuthGuard } from './guards/index';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {CreatefamilyComponent} from './createfamily/createfamily.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, routing],
  declarations: [ AppComponent, LoginComponent, SignupComponent,CreatefamilyComponent ],
  providers: [AuthGuard],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }