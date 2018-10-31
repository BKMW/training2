import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { TestCComponent } from './test-c/test-c.component';
import { AppareilComponent } from './appareil/appareil.component';

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    TestCComponent,
    AppareilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
