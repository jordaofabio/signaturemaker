import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MakerModule } from './maker/maker.module';
import {NgxMaskModule, IConfig} from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MakerModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
