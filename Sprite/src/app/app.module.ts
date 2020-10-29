import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SpriteComponent } from './sprite.component';
import { AppComponent } from './app.component'

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent, SpriteComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
