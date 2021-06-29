import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Databinding1Component } from './databinding1/databinding1.component';
import { LogdirconsoleComponent } from './logdirconsole/logdirconsole.component';
import { Logdirconsole2Component } from './logdirconsole2/logdirconsole2.component';
import { TwowatdatabindingComponent } from './twowatdatabinding/twowatdatabinding.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    Databinding1Component,
    LogdirconsoleComponent,
    Logdirconsole2Component,
    TwowatdatabindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
