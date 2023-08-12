import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { FormsModule } from "@angular/forms";

import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";

import { AddUserComponent } from "./addUser.component";

@NgModule({
  declarations: [
    AppComponent,AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule, 
    HttpClientModule, BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddUserComponent],
})
export class AppModule { }
