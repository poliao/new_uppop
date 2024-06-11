import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login/login.service';
import {  provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NavComponent } from './share/nav/nav.component';
import { EditComponent } from './edit/edit.component';
import { EditDetailComponent } from './edit/edit-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    ProfileComponent,
    EditComponent,
    EditDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [
    LoginService,
    provideHttpClient(withInterceptorsFromDi()),
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
