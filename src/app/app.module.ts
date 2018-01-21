import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import {MatButtonModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule,
  MatMenuModule, MatStepperModule, MatCheckboxModule, MatListModule, MatExpansionModule, MatDialogModule } from '@angular/material';
import { AppOrderComponent } from './app.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, AppOrderComponent
  ],
  imports: [
    BrowserModule, HttpModule, HttpClientModule, RouterModule, MatListModule, MatExpansionModule, MatFormFieldModule,
    MatButtonModule, MatIconModule, MatCardModule, MatInputModule, MatToolbarModule, MatMenuModule, MatStepperModule,
    MatCheckboxModule, BrowserAnimationsModule, NoopAnimationsModule, MatDialogModule, FormsModule, ReactiveFormsModule
  ],
  entryComponents: [AppOrderComponent],

  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
