import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MerchantRegisterComponent } from './merchant-register/merchant-register.component';
import { MerchantLoginComponent } from './merchant-login/merchant-login.component';
import { MerchantProfileComponent } from './merchant-profile/merchant-profile.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    MerchantRegisterComponent,
    MerchantLoginComponent,
    MerchantProfileComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatChipsModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
